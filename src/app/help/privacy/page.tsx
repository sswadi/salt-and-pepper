import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Salt & Pepper Wears",
  description:
    "We care about your privacy and are committed to protecting your data.",
};
export default function Page() {
  return (
    <main className="mx-auto max-w-3xl space-y-6 px-5 py-10 leading-8 text-gray-800">
      <h1 className="mb-4 font-serif text-3xl font-semibold">Privacy Policy</h1>
      <p>
        Your trust means the world to us. Here’s how we handle your personal
        information:
      </p>
      <ul className="list-inside list-disc space-y-2">
        <li>
          We only collect the data necessary to process your order and improve
          your experience.
        </li>
        <li>
          Your information is never sold or shared with third parties for
          advertising.
        </li>
        <li>
          We use secure payment gateways and trusted platforms to keep your data
          safe.
        </li>
      </ul>
      <p>
        If you ever want to delete your data or ask questions about how
        it&apos;s used, email us at:{" "}
        <a
          href="mailto:saltnpepperwears@gmail.com"
          className="text-blue-600 underline"
        >
          saltnpepperwears@gmail.com
        </a>
      </p>
    </main>
  );
}
