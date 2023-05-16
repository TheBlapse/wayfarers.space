import Link from "next/link";
export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen flex-col items-center">
      <div className="mx-auto w-[90vw] max-w-2xl  py-14 md:w-[75vw] lg:w-[60vw]">
        <div className="container flex flex-col gap-2 pb-8">
          <h1 className="mt-0 font-head text-2xl font-bold leading-tight text-black md:text-3xl">
            computers? rockets? games? let&rsquo;s build together
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

        <div className="flex flex-col gap-4 font-serif text-base font-[460] text-black md:text-lg">
          <ul className="list-inside list-disc rounded-l-sm border-l-2 border-l-black pl-4">
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
            Welcome to Wayfarers&rsquo; Space! We were thinking about how cool
            it would be to have a small community, a group of friends who could
            work together on ideas, create awesome things and support each in
            getting educated in the most adventurous (and audacious) way
            possible.
          </p>
          <p>
            Like learning how to build a computer from scratch{" "}
            <a
              target="_blank"
              href="https://github.com/geohot/fromthetransistor"
            >
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
            We don&rsquo;t want this to be yet another &lsquo;dead&rsquo;
            discord server. We want this group to be really active, engaging
            &mdash; like a classroom of friends would be. Anyone, including you,
            is invited, you don&lsquo;t need to be technical. We just want you
            to be very excited about life, about creating value, and wanting the
            best fun possible.
          </p>
          <p>
            We want this community to feel like a &lsquo;home&rsquo; for you -
            if you can&rsquo;t seem to find one in all the mess and noise around
            us and act as a foundation for those (like us) finding their own
            exciting path. We&rsquo;d love to help you, even if in a very tiny
            way, to achieve your goals somehow. We really do believe that great
            things happen when we people come together.
          </p>
          <p>
            There are two parts to this &mdash; the first one being the
            short-term goal of creating a place where we can all come together
            &ndash; bounce off ideas, learn new things, critique each other,
            create meaningful things, and expand our{" "}
            <a
              target="_blank"
              href="https://en.wikipedia.org/wiki/Antifragility"
            >
              (anti-fragile)
            </a>{" "}
            understanding. All in the name of hopefully building a career and
            life we can be proud of.
          </p>
          <p>
            We don&rsquo;t really like school, colleges and are opting out to
            pursue our own game of understanding the world. So we want this to
            be a collective effort to support each other to navigate the
            uncertainties that inevitably come because of that &mdash; be it how
            to find meaningful jobs, start a company, build a network, find
            like-minded individuals or deep dive into any bold endeavor.
          </p>
          <p>
            The second element of the community is to work progressively towards
            finding, exploring (and implementing) better ways of educating
            ourselves than what schools or colleges offer.
          </p>
          <hr className="my-1 h-[0.5px] w-full place-self-center border-0 bg-black" />
          <p className="font-semibold">How is the community structured?</p>
          <ul className="list-inside list-disc">
            <li>
              Open discord server for anybody to join with limited channels and
              access. Folks can keep up with the latest happenings or ask
              questions they have.
            </li>
            <li>
              Inner community with full access - for which you will have to{" "}
              <a target="_blank" href="/apply">
                apply
              </a>
              . This is done to ensure that you share the values of the
              community and would be a right fit to participate and contribute.
            </li>
            <li>
              The criteria for selection is just that you are keen to learn,
              build meaningful things and bring a unique perspective to the
              community. If you feel you haven&rsquo;t done anything before -
              please don&rsquo;t feel hesitant to apply as long as you are
              excited about the community and want to contribute.
            </li>
            <li>
              There are many things yet to be figured out and explored. So right
              now our hope and aim is to find core people who can contribute in
              building and taking the community forward.
            </li>
          </ul>
        </div>

        <div className="flex w-full flex-col flex-wrap gap-4 pt-8 font-head font-semibold sm:justify-between md:flex-row ">
          <Link
            href="/year-zero"
            className="hover:no-italic text-black no-underline hover:text-[#fafafa] hover:no-underline"
          >
            <button className="rounded-sm border-2 border-black bg-[#fafafa] px-8 py-1 text-base hover:bg-black md:text-lg">
              {" "}
              Year Zero{" "}
            </button>
          </Link>
          <a
            target="_blank"
            href="/apply"
            className="hover:no-italic text-black no-underline hover:text-[#fafafa] hover:no-underline"
          >
            <button className="rounded-sm border-2 border-black bg-[#fafafa] px-8 py-1 text-base hover:bg-black  hover:text-[#fafafa] md:text-lg">
              {" "}
              Apply{" "}
            </button>
          </a>
          <Link
            href="/discord"
            className="hover:no-italic text-black no-underline hover:text-[#fafafa] hover:no-underline"
          >
            <button className="rounded-sm border-2 border-black bg-[#fafafa] px-8 py-1 text-base hover:bg-black  hover:text-[#fafafa] md:text-lg">
              {" "}
              Discord{" "}
            </button>
          </Link>
          <Link
            href="/twitter"
            className="hover:no-italic text-black no-underline hover:text-[#fafafa] hover:no-underline"
          >
            <button className="rounded-sm border-2 border-black bg-[#fafafa] px-8 py-1 text-base hover:bg-black  hover:text-[#fafafa] md:text-lg">
              {" "}
              Twitter{" "}
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
