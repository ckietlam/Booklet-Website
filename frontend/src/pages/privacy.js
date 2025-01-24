import React from 'react';

function Privacy() {
  return (
    <main className="py-16 px-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800">Privacy Policy</h2>
        <p className="mt-4 text-gray-600">
          We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and share your personal data.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6">1. Information We Collect</h3>
        <p className="mt-4 text-gray-600">
          We collect personal information that you provide to us directly, such as your name, email address, and any other details you provide when signing up for an account.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6">2. How We Use Your Information</h3>
        <p className="mt-4 text-gray-600">
          We use your personal information to provide and improve our services, communicate with you, and process your requests. We may also use your data for marketing purposes with your consent.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6">3. How We Protect Your Data</h3>
        <p className="mt-4 text-gray-600">
          We implement reasonable security measures to protect your personal information from unauthorized access, alteration, or destruction.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6">4. Sharing Your Information</h3>
        <p className="mt-4 text-gray-600">
          We do not share your personal information with third parties except when necessary to provide our services or as required by law.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6">5. Changes to This Policy</h3>
        <p className="mt-4 text-gray-600">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we encourage you to review it periodically.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6">6. Contact Us</h3>
        <p className="mt-4 text-gray-600">
        If you have any questions or concerns about our Privacy Policy, please contact us at{' '}
        <a href="mailto:booklet@workemail.com" className="text-blue-500">
            booklet@workemail.com
        </a>.
        </p>

      </div>
    </main>
  );
}

export default Privacy;
