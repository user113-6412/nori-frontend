import PrivateBlogs from "../components/PrivateBlogs";
import PublicBlogs from "../components/PublicBlogs";


async function fnGetPublicBlogs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/public`, {
    cache: 'no-store',
    
  });
  if (!res.ok) throw new Error('Failed to fetch public blogs');
  return res.json();
}

export default async function Blog() {
  const publicBlogs = await fnGetPublicBlogs();

  return (
    <main className="min-h-screen p-4 max-w-4xl mx-auto flex flex-col items-center">
      <h1 className="text-3xl font-bold justify-center text-center mb-8">Nori Blog</h1>
      
      {/* Public Blogs Section */}
      
        <section className="mb-12">
          <PublicBlogs initialBlogs={publicBlogs} /> {/* Pass public blogs as a prop to PublicBlogs component */}
        </section>

        <section className="mb-12">
          <PrivateBlogs />
        </section>
    
      
    </main>
  );
}
