import React, { useState } from "react";

const BookCategory = ({ title, books }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleBooks = 5; 

  const nextBook = () => {
    if (currentIndex < books.length - visibleBooks) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevBook = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="mb-8 relative w-full max-w-[1200px] mx-auto">
     
      <h2 className="text-xl font-bold font-lora mb-4">{title}</h2>

     
      <div className="flex items-center justify-center gap-4">
       
        <button
          onClick={prevBook}
          className={`transition ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:opacity-80"}`}
          disabled={currentIndex === 0}
        >
          <img src="/assets/icons/arrow-left.svg" alt="Previous" className="w-8 h-8" />
        </button>

       
        <div className="flex gap-4">
          {books.slice(currentIndex, currentIndex + visibleBooks).map((book, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-[15%] min-w-[180px] max-w-[240px] shrink-0"
            >
             
              <img
                src={book.image}
                alt={book.title}
                className="w-40 h-60 object-cover rounded-lg shadow-lg border-2 border-gray-400"
              />
              <h3 className="text-sm font-semibold font-lora mt-2 text-center">{book.title}</h3>
              <p className="text-xs text-gray-500 text-center font-lora">{book.author}</p>
            </div>
          ))}
        </div>

       
        <button
          onClick={nextBook}
          className={`transition ${currentIndex >= books.length - visibleBooks ? "opacity-50 cursor-not-allowed" : "hover:opacity-80"}`}
          disabled={currentIndex >= books.length - visibleBooks}
        >
          <img src="/assets/icons/arrow-right.svg" alt="Next" className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

const BookSection = () => {
  const bookCategories = [
    {
      title: "Trending Now",
      books: Array.from({ length: 10 }, (_, i) => ({
        title: `Book Name #${i + 1}`,
        author: `Author #${i + 1}`,
        image: "https://nnpdev.wustl.edu/img/BookCovers/genericBookCover.jpg",
      })),
    },
    {
      title: "Fiction",
      books: Array.from({ length: 10 }, (_, i) => ({
        title: `Book Name #${i + 11}`,
        author: `Author #${i + 11}`,
        image: "https://nnpdev.wustl.edu/img/BookCovers/genericBookCover.jpg",
      })),
    },
  ];

  return (
    <div className="p-4">
      {bookCategories.map((category, index) => (
        <BookCategory key={index} title={category.title} books={category.books} />
      ))}
    </div>
  );
};

export default BookSection;
