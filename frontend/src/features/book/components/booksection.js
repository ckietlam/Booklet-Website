import React from "react";

const BookCategory = ({ title, books }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-10">
          {books.map((book, index) => (
            <div key={index} className="flex flex-col items-center w-40 shrink-0">
              <img src={book.image} alt={book.title} className="w-40 h-60 object-cover rounded-lg shadow-lg" />
              <h3 className="text-sm font-semibold mt-2">{book.title}</h3>
              <p className="text-xs text-gray-500">{book.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const BookSection = () => {
  const bookCategories = [
    {
      title: "Trending Now",
      books: [
        {
          title: "Dune",
          author: "Frank Herbert",
          image: "https://images-na.ssl-images-amazon.com/images/I/91%2B1rYKnGkL.jpg",
        },
        {
          title: "The 48 Laws of Power",
          author: "Robert Greene",
          image: "https://images-na.ssl-images-amazon.com/images/I/71u6n6p5ECL.jpg",
        },
        {
          title: "Influence: The Psychology of Persuasion",
          author: "Robert B. Cialdini",
          image: "https://images-na.ssl-images-amazon.com/images/I/81Zg%2B9D%2B2UL.jpg",
        },
        {
          title: "The Alchemist",
          author: "Paulo Coelho",
          image: "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg",
        },
        {
          title: "1984",
          author: "George Orwell",
          image: "https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL.jpg",
        },
      ],
    },
    {
      title: "Fiction",
      books: [
        {
          title: "Brave New World",
          author: "Aldous Huxley",
          image: "https://images-na.ssl-images-amazon.com/images/I/81r07rNAB8L.jpg",
        },
        {
          title: "The Catcher in the Rye",
          author: "J.D. Salinger",
          image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg",
        },
        {
          title: "To Kill a Mockingbird",
          author: "Harper Lee",
          image: "https://images-na.ssl-images-amazon.com/images/I/81OxW1-W7UL.jpg",
        },
        {
          title: "The Great Gatsby",
          author: "F. Scott Fitzgerald",
          image: "https://images-na.ssl-images-amazon.com/images/I/71V2A5MMxVL.jpg",
        },
        {
          title: "Moby-Dick",
          author: "Herman Melville",
          image: "https://images-na.ssl-images-amazon.com/images/I/81pyqaEIzZL.jpg",
        },
      ],
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
