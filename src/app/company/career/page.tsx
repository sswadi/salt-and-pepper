import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Salt & Pepper Wears",
  description:
    "We're not hiring just yet — but we're dreaming, building, and staying open to what's next.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl space-y-10 px-5 py-10 leading-7">
      <div className="mx-auto text-center">
        <h2 className="py-5 font-serif text-3xl font-semibold text-gray-800">
          Careers
        </h2>
        <p className="text-gray-700">
          We&apos;re a small team with big dreams — and while we&apos;re not
          hiring at the moment, we&apos;re always building, learning, and
          imagining what&apos;s next.
        </p>
        <p className="text-gray-700">
          If you&apos;re someone who loves slow fashion, thoughtful design, and
          bringing fresh ideas to life, feel free to say hi at
          saltnpepperwears@gmail.com. We&apos;d love to keep you in mind for the
          future.
        </p>
        <p className="text-gray-600 italic">
          In the meantime, thanks for stopping by — and cheering us on as we
          grow.
        </p>
      </div>
    </main>
  );
}
