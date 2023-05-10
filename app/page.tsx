import Link from "next/link";
export default function Home() {
  return (
    <main className=" mx-auto min-h-screen w-[90vw] max-w-2xl  py-16 md:w-[70vw] lg:w-[60vw] ">
      <div className="container flex flex-col gap-2 pb-8">
        <h1 className="mt-0 font-head text-2xl font-bold leading-tight text-black md:text-3xl">
          Let&rsquo;s build computers? Or rockets? Or games? together
        </h1>
        <figure className=" text-black">
          <blockquote className="font-serif text-sm font-[425] italic leading-tight md:text-base">
            “Study hard what interests you the most in the most undisciplined,
            irreverent and original manner possible.”
            <figcaption className="text-xs not-italic md:text-sm">
              &mdash; Richard Feynman
            </figcaption>
          </blockquote>
        </figure>
      </div>

      <div className="flex flex-col gap-4 font-serif text-base font-[425] text-black md:text-lg">
        <ul className="list-inside list-disc">
          <li>
            A friendly community where we could learn, build and figure things
            out together.
          </li>
          <li>
            Working together to explore the best ways to educate ourselves.
          </li>
          <li>
            And to build towards a different way for those who don&rsquo;t
            really like schools or universities.
          </li>
          <li>Not yet another (dead) discord server.</li>
          <li>
            Figuring out to create a physical lab to make our (crazy) ideas a
            reality.
          </li>
        </ul>

        <p>
          Hey! We were thinking about how cool it would be to have a small
          community, a group of friends who could work together on ideas, create
          awesome things and support each in getting educated in the most
          adventurous (and audacious) way possible.
        </p>
        <p>
          Like learning how to build a computer from scratch{" "}
          <a target="_blank" href="https://github.com/geohot/fromthetransistor">
            (from the transistor)
          </a>
          , studying history together{" "}
          <a
            target="_blank"
            href="https://en.wikipedia.org/wiki/The_Story_of_Civilization"
          >
            (Story of our Civilization)
          </a>
          , exploring unknown depths of the universe{" "}
          <a target="_blank" href="https://theoreticalminimum.com/">
            (Leonard Susskind)
          </a>{" "}
          or creating a new business?
        </p>
        <p>
          We don&rsquo;t want this to be yet another &lsquo;dead&rdquo; discord
          server. We want this group to be really active, engaging &mdash; like
          a classroom of friends would be. Anyone, including you, is invited,
          you don&lsquo;t need to be technical. We just want you to be very
          excited about life, about creating value, and wanting the best fun
          possible.
        </p>
        <p>
          We want this community to feel like a &lsquo;home&rsquo; for you - if
          you can&rsquo;t seem to find one in all the mess and noise around us
          and act as a foundation for those (like us) finding their own exciting
          path. We really do believe that great things happen when we people
          come together. We&rsquo;d love to help you, even if in a very tiny
          way, to achieve your goals somehow. To help you achieve your dream
          maybe, like friends do.
        </p>
        <p>
          There are two parts to this &mdash; the first one being the short-term
          goal of creating a place where we can all come together &ndash; bounce
          off ideas, learn new things, critique each other, create meaningful
          things, and expand our{" "}
          <a target="_blank" href="https://en.wikipedia.org/wiki/Antifragility">
            (antifragile)
          </a>{" "}
          understanding. All in the name of hopefully building a career and life
          we can be proud of.
        </p>
        <p>
          We don&rsquo;t really like school, colleges and are opting out to
          pursue our own game of understanding the world. So we want this to be
          a collective effort to support each other to navigate the
          uncertainties that inevitably come because of that &mdash; be it how
          to find meaningful jobs, start a company, build a network, find
          like-minded individuals or deep dive into any bold endeavor.
        </p>
        <p>
          The second element of the community is to work progressively towards
          finding, exploring (and implementing) better ways of educating
          ourselves than what schools or colleges offer.
        </p>
      </div>

      <div className="flex w-full flex-row justify-between pt-8 font-head font-semibold">
        <Link
          href="/year-zero"
          className="hover:no-italic text-black no-underline hover:text-black hover:no-underline"
        >
          <button className="rounded-sm border-2 border-black bg-white px-8 py-1 text-lg hover:bg-gray-200">
            {" "}
            Year Zero{" "}
          </button>
        </Link>
        <Link
          href="/apply"
          className="hover:no-italic text-black no-underline hover:text-black hover:no-underline"
        >
          <button className="rounded-sm border-2 border-black bg-white px-8 py-1 text-lg hover:bg-gray-200">
            {" "}
            Apply{" "}
          </button>
        </Link>
        <Link
          href="/faq"
          className="hover:no-italic text-black no-underline hover:text-black hover:no-underline"
        >
          <button className="rounded-sm border-2 border-black bg-white px-8 py-1 text-lg hover:bg-gray-200">
            {" "}
            FAQ{" "}
          </button>
        </Link>
        <Link
          href="/discord"
          className="hover:no-italic text-black no-underline hover:text-black hover:no-underline"
        >
          <button className="rounded-sm border-2 border-black bg-white px-8 py-1 text-lg hover:bg-gray-200">
            {" "}
            Discord{" "}
          </button>
        </Link>
        <Link
          href="/twitter"
          className="hover:no-italic text-black no-underline hover:text-black hover:no-underline"
        >
          <button className="rounded-sm border-2 border-black bg-white px-8 py-1 text-lg hover:bg-gray-200">
            {" "}
            Twitter{" "}
          </button>
        </Link>
      </div>
    </main>
  );
}
