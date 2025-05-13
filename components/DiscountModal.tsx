"use client";

interface DiscountModalProps {
  onClose: () => void;
}

export default function DiscountModal({ onClose }: DiscountModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <button
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-800"
          onClick={onClose} // This should trigger the modal close
          aria-label="Close"
        >
          ×
        </button>
        <h2 className="mb-4 text-xl font-semibold">Claim Your 20% Discount</h2>
        <form
          action="https://formspree.io/f/xanoljjb"
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full rounded border px-3 py-2 text-sm"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full rounded border px-3 py-2 text-sm"
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Tell us about your project"
            className="w-full rounded border px-3 py-2 text-sm"
          />
          <button
            type="submit"
            className="w-full rounded bg-gray-900 px-4 py-2 text-white hover:bg-gray-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
