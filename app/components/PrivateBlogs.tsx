'use client';

import { useState, useEffect } from 'react';
import { useAuthContext } from '../authHooks/useAuthContext';
import Link from 'next/link';
interface Blog {
  id: number;
  title: string;
  content: string;
  authorName: string;
  isPrivate: boolean;
  createdAt: string;
}

export default function PrivateBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const { user, fnStateLoggedOut } = useAuthContext();
  const [isCreating, setIsCreating] = useState(false);
  const [newBlog, setNewBlog] = useState({
    title: '',
    content: '',
    authorName: '',
    isPrivate: true
  });
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);

  

  useEffect(() => {
    async function fnFetchPrivateBlogs() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog`, {
          credentials: 'include',
          headers: {
            'Authorization': `Bearer ${user?.token}`
          }
        });
        if (!res.ok) throw new Error('Failed to fetch blogs');
        if (res.status === 401) {
          console.warn("Unauthorized access, logging out.");
          localStorage.removeItem("user"); // Remove user from localStorage
          fnStateLoggedOut(); // Update state to logged out
          return; // Exit the function
        }
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    }
    fnFetchPrivateBlogs();
  }, [user, fnStateLoggedOut]);



  async function fnHandleCreateBlog(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${user?.token}` },
        credentials: 'include',
        body: JSON.stringify(newBlog)
      });
      if (!res.ok) throw new Error('Failed to create blog');
      if (res.status === 401) {
        console.warn("Unauthorized access, logging out.");
        localStorage.removeItem("user"); // Remove user from localStorage
        fnStateLoggedOut(); // Update state to logged out
        return; // Exit the function
      }
      const createdBlog = await res.json();
      setBlogs(prev => [...prev, createdBlog]);
      setIsCreating(false);
      setNewBlog({ title: '', content: '', authorName: '', isPrivate: true });
    } catch (error) {
      console.error('Error creating blog:', error);
    }
  };



  async function fnHandleUpdateBlog(e: React.FormEvent) {
    e.preventDefault();
    if (!editingBlog) return;
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/${editingBlog.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${user?.token}` },
        credentials: 'include',
        body: JSON.stringify(editingBlog)
      });
      if (!res.ok) throw new Error('Failed to update blog');
      if (res.status === 401) {
        console.warn("Unauthorized access, logging out.");
        localStorage.removeItem("user"); // Remove user from localStorage
        fnStateLoggedOut(); // Update state to logged out
        return; // Exit the function
      }
      const updatedBlog = await res.json();
      setBlogs(prev => prev.map(blog => blog.id === updatedBlog.id ? updatedBlog : blog));
      setEditingBlog(null);
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };



  async function fnHandleDeleteBlog(id: number) {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/${id}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: { 'Authorization': `Bearer ${user?.token}` }
      });
      if (!res.ok) throw new Error('Failed to delete blog');
      if (res.status === 401) {
        console.warn("Unauthorized access, logging out.");
        localStorage.removeItem("user"); // Remove user from localStorage
        fnStateLoggedOut(); // Update state to logged out
        return; // Exit the function
      }
      setBlogs(prev => prev.filter(blog => blog.id !== id));
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };



  async function fnTogglePrivacy(blog: Blog) {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/${blog.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${user?.token}` },
        credentials: 'include',
        body: JSON.stringify({ ...blog, isPrivate: !blog.isPrivate })
      });
      if (!res.ok) throw new Error('Failed to update blog privacy');
      if (res.status === 401) {
        console.warn("Unauthorized access, logging out.");
        localStorage.removeItem("user"); // Remove user from localStorage
        fnStateLoggedOut(); // Update state to logged out
        return; // Exit the function
      }
      const updatedBlog = await res.json();
      setBlogs(prev => prev.map(b => b.id === updatedBlog.id ? updatedBlog : b));
    } catch (error) {
      console.error('Error updating blog privacy:', error);
    }
  };



  return (
    <div className="space-y-8">
      {/* Create New Blog Button or Login Button */}
      <div className="flex justify-center">
        {user ? (
          <button
            onClick={() => setIsCreating(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Create New Blog
          </button>
        ) : (
          <Link href="/login">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Login to Post
            </button>
          </Link>
        )}
      </div>

      {/* Create Blog Form */}
      {isCreating && (
        <form onSubmit={fnHandleCreateBlog} className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Create New Blog</h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Author Name"
              value={newBlog.authorName}
              onChange={(e) => setNewBlog({ ...newBlog, authorName: e.target.value })}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="text"
              placeholder="Title"
              value={newBlog.title}
              onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
              className="w-full p-2 border rounded"
              required
            />
            <textarea
              placeholder="Content (max 1000 characters)"
              value={newBlog.content}
              onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value.slice(0, 1000) })}
              className="w-full p-2 border rounded h-32"
              maxLength={1000}
              required
            />
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="isPrivate"
                checked={newBlog.isPrivate}
                onChange={(e) => setNewBlog({ ...newBlog, isPrivate: e.target.checked })}
              />
              <label htmlFor="isPrivate">Private Post</label>
            </div>
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={() => setIsCreating(false)}
                className="px-4 py-2 border rounded hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Create
              </button>
            </div>
          </div>
        </form>
      )}

      {/* Edit Blog Form */}
      {editingBlog && (
        <form onSubmit={fnHandleUpdateBlog} className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Edit Blog</h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Author Name"
              value={editingBlog.authorName}
              onChange={(e) => setEditingBlog({ ...editingBlog, authorName: e.target.value })}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="text"
              placeholder="Title"
              value={editingBlog.title}
              onChange={(e) => setEditingBlog({ ...editingBlog, title: e.target.value })}
              className="w-full p-2 border rounded"
              required
            />
            <textarea
              placeholder="Content (max 1000 characters)"
              value={editingBlog.content}
              onChange={(e) => setEditingBlog({ ...editingBlog, content: e.target.value.slice(0, 1000) })}
              className="w-full p-2 border rounded h-32"
              maxLength={1000}
              required
            />
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="editIsPrivate"
                checked={editingBlog.isPrivate}
                onChange={(e) => setEditingBlog({ ...editingBlog, isPrivate: e.target.checked })}
              />
              <label htmlFor="editIsPrivate">Private Post</label>
            </div>
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={() => setEditingBlog(null)}
                className="px-4 py-2 border rounded hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Update
              </button>
            </div>
          </div>
        </form>
      )}

      {/* Blog List */}
      <div className="space-y-6">
        {blogs.map((blog) => (
          <article key={blog.id} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
            <div className="text-gray-600 mb-4 whitespace-pre-wrap">{blog.content}</div>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>By {blog.authorName + " "}</span>
              <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                onClick={() => setEditingBlog(blog)}
                className="px-3 py-1 text-blue-500 hover:text-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => fnTogglePrivacy(blog)}
                className={`px-3 py-1 cursor-pointer ${
                  blog.isPrivate 
                    ? 'text-pink-500 hover:text-pink-600' 
                    : 'text-blue-500 hover:text-blue-600'
                }`}
              >
                {blog.isPrivate ? 'Make Public' : 'Is Public'}
              </button>
              <button
                onClick={() => fnHandleDeleteBlog(blog.id)}
                className="px-3 py-1 text-red-500 hover:text-red-600"
              >
                X
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
} 