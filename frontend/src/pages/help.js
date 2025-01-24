import React from 'react';

function Help() {
  return (
    <main className="py-16 px-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800">Help</h2>
        <p className="mt-4 text-gray-600">
          If you have any questions or need assistance, this page provides useful information to guide you. Our support team is also available to help with any issues you may encounter.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6">1. Frequently Asked Questions</h3>
        <p className="mt-4 text-gray-600">
          We have compiled a list of frequently asked questions (FAQs) that may provide answers to your queries. Please check this section for quick answers to common issues.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6">2. How to Contact Support</h3>
        <p className="mt-4 text-gray-600">
          If you need personalized assistance, you can contact our support team directly. We are available through email, phone, or our online chat system. Please reach out to us via [your contact email] or [phone number].
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6">3. Troubleshooting</h3>
        <p className="mt-4 text-gray-600">
          If you are facing technical issues, we offer troubleshooting guides for common problems. Check the troubleshooting section on our website for detailed instructions.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6">4. Service Outages</h3>
        <p className="mt-4 text-gray-600">
          If you experience a service outage, please check our status page for updates. We work hard to maintain the stability of our services, but if any disruptions occur, we will provide real-time updates on the status.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6">5. Feedback</h3>
        <p className="mt-4 text-gray-600">
          We appreciate your feedback! If you have suggestions on how we can improve our services or website, please let us know. Your input is valuable to us.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6">6. Contact Us</h3>
        <p className="mt-4 text-gray-600">
            For further assistance, please reach out to our customer support team. You can contact us at{' '}
        <a href="mailto:booklet@workemail.com" className="text-blue-500">
            booklet@workemail.com
        </a>.
        </p>

      </div>
    </main>
  );
}

export default Help;
