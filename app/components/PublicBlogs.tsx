
import Link from 'next/link';


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
  
  
  return (
      <div className="max-w-7xl mx-auto px-2 py-2">
        <h1 className="text-3xl font-bold text-center mt-4 mb-8">Nori Blog</h1>
        
          
          {!initialBlogs.length ? (
            <div className="text-center text-gray-500 py-8">
              No public posts yet. Be the first to share your thoughts!
            </div>
          ) : (
            <div className="grid gap-4 sm:gap-6">
              {initialBlogs.map((blog) => (
                <article key={blog.id} className="bg-gray-200 border border-gray-400 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
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

          {/* Button to board */}
          <div className="flex mt-4 justify-center">
            <Link href="/board" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200 text-sm sm:text-base">
              Go to My Board to Post
            </Link>
          </div>
          
        
      </div>
  );
} 