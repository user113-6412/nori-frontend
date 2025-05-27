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
  
  return (
    <section className="w-full min-h-screen">
      <div className="w-full max-w-4xl mx-auto px-1 sm:px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Nori Blog</h1>
        
        {!user && (
          <>
            {!initialBlogs.length ? (
              <div className="text-center text-gray-500 py-8">
                No public posts yet. Be the first to share your thoughts!
              </div>
            ) : (
              <div className="grid gap-4 sm:gap-6">
                {initialBlogs.map((blog) => (
                  <article key={blog.id} className="bg-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                    <Link href={`/blog/${blog.id}`} className="block p-2 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800 break-words">{blog.title}</h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-4 break-words break-all whitespace-pre-wrap">{blog.content}</p>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs sm:text-sm text-gray-500 space-y-1 sm:space-y-0">
                        <span className="font-medium break-words">By {blog.authorName}</span>
                        <span className="whitespace-nowrap">{new Date(blog.createdAt).toLocaleDateString()}</span>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
} 