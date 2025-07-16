import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Support | Salt & Pepper Wears",
  description:
    "Need help with an order or have a question? We're here for you.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl space-y-5 px-5 py-10 leading-8 text-gray-800">
      <h1 className="mb-4 font-serif text-3xl font-semibold">
        Customer Support
      </h1>
      <p>
        Got a question, concern, or just need a little help figuring things out?
        We&apos;re always happy to assist.
      </p>
      <p>
        While we&apos;re a small team, we do our best to respond to every email
        with care and clarity. Most messages are answered within 1–2 business
        days.
      </p>
      <p>
        Reach out to us anytime at:{" "}
        <p>
          📧 Email us:{" "}
          <a
            href="mailto:saltnpepperwears@gmail.com"
            className="text-blue-600 underline"
          >
            saltnpepperwears@gmail.com
          </a>
          <br />
          📍 Based in Bangalore, India
        </p>
      </p>
    </main>
  );
}
