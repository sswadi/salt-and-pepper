import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Salt & Pepper Wears",
  description:
    "Please review our terms and conditions before placing your order.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl space-y-6 px-5 py-10 leading-8 text-gray-800">
      <h1 className="mb-4 font-serif text-3xl font-semibold">
        Terms & Conditions
      </h1>
      <p>
        By placing an order with Salt & Pepper Wears, you agree to the following
        terms:
      </p>
      <ul className="list-inside list-disc space-y-2">
        <li>
          All sales are final. Since our pieces are pre-loved and one-of-a-kind,
          we do not accept returns or exchanges.
        </li>
        <li>
          We take care to describe and photograph items accurately, but slight
          variations or imperfections may occur — and are part of the charm.
        </li>
        <li>
          Orders may be cancelled before dispatch in case of inventory errors or
          unforeseen issues. In such cases, a full refund will be issued.
        </li>
      </ul>
      <p>
        If you have any doubts before placing an order, don’t hesitate to reach
        out. We’re here to help.
      </p>
    </main>
  );
}
