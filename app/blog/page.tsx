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
    <main>
      <PublicBlogs initialBlogs={publicBlogs} />
    </main>
  );
}
