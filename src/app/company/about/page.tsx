import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Salt & Pepper Wears",
  description:
    "Discover the heart behind Salt & Pepper Wears – a thoughtfully curated thrift store celebrating timeless style and conscious living.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl space-y-10 px-5 py-10 leading-8 text-gray-800">
      <div className="mx-auto text-center">
        <h2 className="py-5 font-serif text-3xl font-semibold">
          About Salt & Pepper Wears
        </h2>
      </div>

      <p>
        Salt & Pepper Wears is more than just a thrift shop — it&apos;s a
        celebration of style with soul. We believe fashion should tell stories,
        not just follow trends. Our collections are carefully handpicked to
        bring you pieces that are timeless, elegant, and full of character.
      </p>

      <p>
        Born from a love for slow fashion and the charm of vintage finds, Salt &
        Pepper Wears was created to offer a more mindful way to shop. Each item
        you&apos;ll find here has a past, a presence, and the potential to be
        loved again — because good design and quality never go out of style.
      </p>

      <p>
        We&apos;re passionate about curating wardrobe staples and hidden gems
        that reflect a certain warmth — the kind that only comes from clothing
        that&apos;s lived a little. Whether you&apos;re a seasoned thrifter or
        someone taking their first step into conscious fashion, we&apos;re here
        to make the experience delightful, inspiring, and personal.
      </p>

      <p>
        Our hope is to create a community that values thoughtful choices,
        creative expression, and sustainability — all while looking effortlessly
        good. Thank you for being a part of our story. We&apos;re just getting
        started.
      </p>
    </main>
  );
}
