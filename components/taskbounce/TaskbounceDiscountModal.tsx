"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";

export type TaskbounceDiscountModalHandle = {
  open: () => void;
};

export const TaskbounceDiscountModal =
  forwardRef<TaskbounceDiscountModalHandle>((_, ref) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useImperativeHandle(ref, () => ({
      open: () => {
        dialogRef.current?.showModal();
      },
    }));

    return (
      <dialog
        ref={dialogRef}
        className="backdrop:bg-black/30 p-0 max-w-md w-full rounded-xl"
      >
        <form
          method="POST"
          action="https://formspree.io/f/xzzrokgo"
          className="bg-white p-6 rounded-lg shadow-lg space-y-4"
        >
          <h2 className="text-xl font-bold text-gray-800">
            Claim Your Free 5 Hours
          </h2>

          <label className="block text-sm font-medium text-gray-700">
            Name
            <input
              type="text"
              name="name"
              required
              className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-[#26A69A] focus:ring-[#26A69A]"
            />
          </label>

          <label className="block text-sm font-medium text-gray-700">
            Email
            <input
              type="email"
              name="email"
              required
              className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-[#26A69A] focus:ring-[#26A69A]"
            />
          </label>

          <label className="block text-sm font-medium text-gray-700">
            Tell us what you need help with
            <textarea
              name="message"
              rows={4}
              required
              className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-[#26A69A] focus:ring-[#26A69A]"
            ></textarea>
          </label>

          <div className="flex items-center justify-between mt-4">
            <button
              type="submit"
              className="bg-[#26A69A] hover:bg-[#1E8A7E] text-white py-2 px-4 rounded"
            >
              Submit
            </button>
            <button
              type="button"
              className="text-sm text-gray-500 hover:text-gray-700"
              onClick={() => dialogRef.current?.close()}
            >
              Cancel
            </button>
          </div>
        </form>
      </dialog>
    );
  });

TaskbounceDiscountModal.displayName = "TaskbounceDiscountModal";
