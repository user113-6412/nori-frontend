'use client'
import Link from 'next/link';
import { useAuthContext } from '../authHooks/useAuthContext';

interface Blog {
  id: number;
  title: string;
  content: string;
  authorName: string;
  createdAt: string;
}

interface PublicBlogsProps {
  initialBlogs: Blog[];
}

export default function PublicBlogs({ initialBlogs }: PublicBlogsProps) {
  const {user} = useAuthContext();
  if (!initialBlogs.length) {
    return (
      <div className="text-center text-gray-500 py-8">
        No public posts yet. Be the first to share your thoughts!
      </div>
    );
  }

  return (
    <>
      {!user && (
        <div className="space-y-6">
          {initialBlogs.map((blog) => (
            <article key={blog.id} className="bg-white rounded-lg shadow-md p-6 py-3">
              <Link href={`/blog/${blog.id}`}>
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.content}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>By {blog.authorName}</span>
                  <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      )}


    </>
  );
} 