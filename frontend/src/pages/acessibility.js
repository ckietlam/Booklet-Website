import React from 'react';

function Accessibility() {
  return (
    <main className="py-16 px-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800">Accessibility</h2>
        <p className="mt-4 text-gray-600">
          We strive to make our website accessible to all users, including those with disabilities. This page outlines the measures we take to ensure our site is usable for everyone.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6">1. Keyboard Navigation</h3>
        <p className="mt-4 text-gray-600">
          Our website supports full keyboard navigation, allowing users to access all interactive elements using only the keyboard. We ensure that all content and functionality can be accessed without the need for a mouse.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6">2. Screen Reader Compatibility</h3>
        <p className="mt-4 text-gray-600">
          Our website is compatible with popular screen readers, providing text descriptions for images and other non-text elements. We ensure that our content is clear and easy to navigate for visually impaired users.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6">3. Color Contrast</h3>
        <p className="mt-4 text-gray-600">
          We use high contrast colors to make text and interactive elements easier to read for users with visual impairments. We prioritize clarity and readability in our design.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6">4. Accessible Forms</h3>
        <p className="mt-4 text-gray-600">
          Our forms are designed with accessibility in mind, including clear labels, error messages, and easy-to-understand instructions. We ensure that all form fields are fully navigable using a keyboard and that users can interact with them easily.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6">5. Ongoing Improvements</h3>
        <p className="mt-4 text-gray-600">
          We continuously monitor and improve our website’s accessibility. If you encounter any issues, please let us know so we can address them.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6">6. Contact Us</h3>
        <p className="mt-4 text-gray-600">
        If you have any questions or feedback regarding our accessibility measures, please contact us at{' '}
        <a href="mailto:booklet@workemail.com" className="text-blue-500">
            booklet@workemail.com
        </a>.
        </p>

      </div>
    </main>
  );
}

export default Accessibility;
