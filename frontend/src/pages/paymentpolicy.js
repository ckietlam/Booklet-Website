import React from 'react';

function PaymentPolicy() {
  return (
    <main className="py-16 px-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800">Payment Policy</h2>
        <p className="mt-4 text-gray-600">
          This Payment Policy outlines the accepted methods of payment for services offered on our website. It is important to review this policy before making any payments.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6">1. Accepted Payment Methods</h3>
        <p className="mt-4 text-gray-600">
          We accept payments via Zalo Pay. Please ensure that you have selected your preferred payment method during checkout.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6">2. Payment Processing</h3>
        <p className="mt-4 text-gray-600">
          Once the payment method is selected, you will be directed to the payment gateway to complete the transaction. After payment is confirmed, your order will be processed.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6">3. Refund Policy</h3>
        <p className="mt-4 text-gray-600">
          In the event of a payment error or unsuccessful transaction, please contact our customer support team. Refunds will be processed according to our refund policy.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6">4. Security of Payment Information</h3>
        <p className="mt-4 text-gray-600">
          We ensure the security of your payment information by using secure encryption technology during transactions. We do not store payment details on our servers.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6">5. Changes to Payment Policy</h3>
        <p className="mt-4 text-gray-600">
          We may update our Payment Policy periodically. Any updates will be posted on this page, and we encourage you to review it before making payments.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6">6. Contact Us</h3>
        <p className="mt-4 text-gray-600">
            For any payment-related inquiries or issues, please contact our customer support at{' '}
        <a href="mailto:booklet@workemail.com" className="text-blue-500">
            booklet@workemail.com
        </a>.
        </p>

      </div>
    </main>
  );
}

export default PaymentPolicy;
