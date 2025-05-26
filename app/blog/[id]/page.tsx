async function fnGetSingleBlogById(id: string) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/public/${id}`, {
          cache: "no-store",
        });
    
        if(!res.ok) {
          throw new Error("Failed to fetch a blog")
        }
    
        // parsing or converting the response into a javascript object
        return res.json();
    
      } catch (error) {
        console.log(error)
      }
}

export default async function BlogDetails({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const { id } = resolvedParams;
    const blog = await fnGetSingleBlogById(id);

    return (
        <>
        {blog? (
        <main className="min-h-screen p-4 max-w-4xl mx-auto flex flex-col items-center">
            <h1 className="text-3xl font-bold justify-center text-center mb-8">{blog.title}</h1>
            <div className="text-gray-600 mb-4 w-full">
                {blog.content.split("\n\n").map((para: string, index: number) => (
                    <p key={index} className="mb-4">
                    {para.split(/(https?:\/\/[^\s]+)/g).map((part, i) =>
                        part.match(/^https?:\/\//) ? (
                        <a
                            key={i}
                            href={part}
                            className="text-blue-600 underline break-words"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {part}
                        </a>
                        ) : (
                        <span key={i}>{part}</span>
                        )
                    )}
                    </p>
                ))}
            </div>
            <div className="flex justify-between items-center text-sm text-gray-500">
                <span>By {blog.authorName}&nbsp;</span>
                <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
            </div>
        </main>
        ) : (
            <div className="text-center text-gray-500 py-8">
                <p>Loading the blog...</p>
            </div>
        )}
        </>
        
    )
}
