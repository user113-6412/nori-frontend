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
      <div className="text-center text-gray-500 py-8 px-4 sm:px-6">
        No public posts yet. Be the first to share your thoughts!
      </div>
    );
  }

  return (
    <>
      {!user && (
        <div className="grid gap-4 sm:gap-6 px-4 sm:px-6 md:px-8">
          {initialBlogs.map((blog) => (
            <article key={blog.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <Link href={`/blog/${blog.id}`} className="block p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800 line-clamp-2">{blog.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3">{blog.content}</p>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs sm:text-sm text-gray-500 space-y-1 sm:space-y-0">
                  <span className="font-medium">By {blog.authorName}</span>
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