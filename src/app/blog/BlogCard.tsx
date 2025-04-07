import React, { useState, useEffect } from "react";
import Image from "next/image";

type BlogType = {
  key: string;
  title: string;
  author: string;
  description: string;
  urlToImage: string;
  publishedAt: string;
  url: string;
  source: {
    name: string;
  };
};
type Error = {
  message: string;
};

function BlogCard() {
  const [posts, setPosts] = useState<BlogType[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const PAGE_SIZE = 6;
  const NEWS_URL = `https://newsapi.org/v2/everything?q=learning&from=2025-03-06&sortBy=publishedAt&pageSize=${PAGE_SIZE}&page=${currentPage}&apiKey=9bb1ce4f63d74db08d7433bd4bfd17a5`;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${NEWS_URL}`);
        if (!response.ok) throw new Error("Error fetching data");
        const data = await response.json();
        setPosts(data.articles || []);
        setTotalResults(data.totalResults || 0);
      } catch (error: any) {
        setError({ message: error.message });
      }
    };
    fetchPosts();
  }, [currentPage]);

  const totalPages = Math.ceil(totalResults / PAGE_SIZE);

  if (error) {
    return <div className="text-red-600">Error: {error.message}</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-[#fefefe] rounded-lg overflow-hidden shadow-md border-2"
          >
            {post.urlToImage && (
              <Image
                src={post.urlToImage}
                alt={post.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
                unoptimized
              />
            )}
            <div className="p-6 space-y-2">
              <p className="text-sm text-gray-600">
                {post.author || post.source.name} ·{" "}
                {new Date(post.publishedAt).toLocaleDateString()}
              </p>
              <h3 className="text-lg font-semibold text-gray-900 flex items-center justify-between">
                {post.title}
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl"
                >
                  ↗
                </a>
              </h3>
              <p className="text-sm text-gray-700">{post.description}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-sm border border-gray-300 rounded-full px-3 py-1">
                  {post.source.name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {posts.length > 0 && (
        <div className="flex justify-center items-center gap-4 my-4 pt-6">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Previous
          </button>

          <p className="text-gray-700">
            Page {currentPage} of {totalPages}
          </p>

          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage >= totalPages}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default BlogCard;
