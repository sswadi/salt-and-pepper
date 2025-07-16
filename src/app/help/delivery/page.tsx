import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delivery Details | Salt & Pepper Wears",
  description:
    "Find shipping timelines, costs, and other delivery-related information here.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl space-y-6 px-5 py-10 leading-8 text-gray-800">
      <h1 className="mb-4 font-serif text-3xl font-semibold">
        Delivery Details
      </h1>
      <p>
        All orders are shipped from Bangalore, India. We currently deliver
        across India.
      </p>
      <p>
        Once your order is placed, please allow 2–4 business days for us to
        process and dispatch it. You&apos;ll receive a confirmation email with
        tracking details as soon as it ships.
      </p>
      <p>
        Delivery timelines depend on your location, but typically range from 3–7
        business days after dispatch.
      </p>
      <p>
        If you have any delivery issues or special instructions, feel free to
        write to us.
      </p>
    </main>
  );
}
