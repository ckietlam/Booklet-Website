import React from 'react';
import BookSection from "../features/book/components/booksection";


function HomePage() {
  return (
      <main className="py-16 px-8">
        <div className="bg-white rounded-lg shadow-md p-6">
        <BookSection />
        </div>
      </main>      
  );
}

export default HomePage;
