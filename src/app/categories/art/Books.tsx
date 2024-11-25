"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

type BookType = {
  key: string;
  title: string;
  author_name?: string[];
  cover_i?: string;
};
type Error = {
  message: string;
};

const BOOKS_URL = "https://openlibrary.org/search.json?q=art";

function Books() {
  const [books, setBooks] = useState<BookType[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`${BOOKS_URL}`);
        if (!response.ok) throw new Error("Error fetching data");
        const data = await response.json();
        setBooks(data.docs || []);
      } catch (error: any) {
        setError({ message: error.message });
      }
    };
    fetchBooks();
  }, []);
  
  return (
    <div className="my-4">
      {error && <p className="text-red-500">{error.message}</p>}
      {books.length === 0 ? (
        <p>Loading books...</p>
      ) : (
        <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-2 ">
          {books.map((book) => (
            <div key={book.key} className="p-4 bg-white rounded shadow">
              {book.cover_i ? (
                <Image
                  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                  alt={`Cover of ${book.title}`}
                  className="mb-2 rounded w-[200px] h-[200px]"
                />
              ) : (
                <div className="h-40 w-full bg-gray-200 flex items-center justify-center">
                  <span>No Cover Available</span>
                </div>
              )}
              <h4 className="text-lg font-bold">{book.title}</h4>
              {book.author_name && <p>Author: {book.author_name.join(", ")}</p>}
            </div>
          ))}
        </div>
      )}

    </div>
  );
}

export default Books;
