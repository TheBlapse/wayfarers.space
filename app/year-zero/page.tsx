import { ArrowDownRight, Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center overflow-x-hidden bg-lightbg dark:bg-darkbg">
      <div className="flex h-screen w-full max-w-5xl flex-col items-start justify-center gap-y-8 p-6 sm:px-12 md:pl-12 xl:pl-0">
        <div className="sm:[350px] flex flex-col justify-center gap-4 bg-lightbg bg-opacity-5 backdrop-blur-sm dark:bg-darkbg dark:bg-opacity-5 md:h-auto md:w-[600px] xl:w-[800px] ">
          <h1 className="font-head text-4xl text-lighttitle dark:text-darktitle md:text-6xl xl:text-7xl">
            Year Zero
            <span className="block text-2xl italic text-lightheading dark:text-darkheading md:inline-block md:text-3xl xl:text-4xl">
              &nbsp;&mdash; get back to the future
            </span>
          </h1>
          <p className="text-md font-serif text-lighttext dark:text-darktext md:text-lg xl:text-xl">
            An annual roundtable for autodidacts and dropouts organized by
            Wayfarers Space to come together to discuss how to make the future
            look like the future and understand the world audaciously by
            undertaking a path different than that of traditional route of
            schools.
          </p>
        </div>
        <div className="text-md flex flex-col gap-3 md:text-lg xl:text-xl">
          <h2 className=" font-head text-lightheading dark:text-darkheading">
            Join us for our first round table event.
          </h2>
          <div className="flex flex-col gap-2 font-serif text-lighttext dark:text-darktext ">
            <div className="flex flex-row items-center gap-2">
              <span className="rounded-lg bg-lighthighlight p-[0.6rem] dark:bg-darkhighlight">
                <Calendar color="#8C8C8C" size="16" />
              </span>
              To be announced
            </div>
            <div className="flex flex-row items-center gap-2">
              <span className="rounded-lg bg-lighthighlight p-[0.6rem] dark:bg-darkhighlight">
                <MapPin color="#8C8C8C" size="16" />
              </span>
              Bengaluru, India
            </div>
            <Link href="/discord" className="flex flex-row items-center gap-2">
              <span className="rounded-lg bg-lighthighlight p-[0.6rem] dark:bg-darkhighlight">
                <svg
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5535 1.03729C12.5178 0.552705 11.4104 0.200531 10.2526 0C10.1104 0.257074 9.94429 0.602844 9.82976 0.877902C8.599 0.692812 7.37956 0.692812 6.17144 0.877902C6.05693 0.602844 5.88704 0.257074 5.74357 0C4.58454 0.200531 3.47584 0.553999 2.44013 1.03985C0.351095 4.19666 -0.215207 7.27505 0.0679444 10.3097C1.4535 11.3444 2.79627 11.973 4.11638 12.3843C4.44233 11.9357 4.73302 11.4588 4.98345 10.9563C4.5065 10.775 4.04969 10.5514 3.61805 10.2917C3.73256 10.2069 3.84457 10.1182 3.95279 10.027C6.58546 11.2583 9.44593 11.2583 12.0472 10.027C12.1566 10.1182 12.2686 10.2069 12.3819 10.2917C11.949 10.5527 11.4909 10.7763 11.014 10.9576C11.2644 11.4588 11.5538 11.937 11.881 12.3856C13.2024 11.9743 14.5464 11.3457 15.932 10.3097C16.2642 6.79176 15.3644 3.74164 13.5535 1.03729ZM5.34212 8.44343C4.55181 8.44343 3.9037 7.70563 3.9037 6.80718C3.9037 5.90873 4.53797 5.16966 5.34212 5.16966C6.14628 5.16966 6.79437 5.90743 6.78053 6.80718C6.78178 7.70563 6.14628 8.44343 5.34212 8.44343ZM10.6578 8.44343C9.86752 8.44343 9.21941 7.70563 9.21941 6.80718C9.21941 5.90873 9.85366 5.16966 10.6578 5.16966C11.462 5.16966 12.1101 5.90743 12.0962 6.80718C12.0962 7.70563 11.462 8.44343 10.6578 8.44343Z"
                    className="fill-lighttext dark:fill-darktext"
                  />
                </svg>
              </span>
              Join{" "}
              <span className="underline hover:opacity-70 dark:hover:opacity-70">
                Discord
              </span>{" "}
              for updates
            </Link>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <Link
            href="https://tally.so/r/3xJWev"
            target="_blank"
            className="md:text-md w-full cursor-pointer rounded-full border-2 border-black border-opacity-[14%] px-12 py-1 font-serif text-base text-lighttext hover:border-transparent hover:bg-black hover:bg-opacity-[14%] hover:text-lightheading dark:border-white dark:border-opacity-[14%] dark:text-darktext dark:hover:border-opacity-[14%] dark:hover:bg-white dark:hover:bg-opacity-[14%] hover:dark:text-darkheading md:px-20 xl:px-24 xl:text-xl"
          >
            Submit your interest
          </Link>
        </div>
      </div>
      <div className="mx-6 flex max-w-3xl flex-col items-center gap-12 py-16 sm:mx-12 md:mx-6 xl:mx-0">
        <div className="relative flex-col items-center justify-center gap-1">
          <h1 className="font-head text-xl  text-lightheading dark:text-darkheading md:text-2xl">
            What is the event
          </h1>
          <p className="font-serif text-lg text-lighttext dark:text-darktext md:text-xl">
            &ldquo;Year Zero&rdquo; is a gathering designed to meet and discuss
            the future and the world. Here are a few things we plan to do:
          </p>
          <ul className="ml-4 mt-5 list-inside list-disc font-serif text-lg text-lighttext dark:text-darktext md:ml-5 md:text-xl">
            <li>
              Roundtable discussions with subject experts, founders, and
              interesting individuals around our theme of getting back to the
              future, touching on topics ranging from Qualia to Quantum physics.
            </li>
            <li>
              Dialogues about the future of Wayfarers Space, creating labs for a
              better environment, navigating unconventional paths, and building
              personal communities.
            </li>
            <li>
              Flâneuring — mindful strolling through cities, taking time to
              observe and absorb the surroundings without a specific destination
              in mind.
            </li>
            <li>A no-plan &ldquo;adventure&rdquo; retreat at the end.</li>
          </ul>
        </div>
        <div className="relative flex-col items-center justify-center gap-1">
          <h1 className="font-head text-xl  text-lightheading dark:text-darkheading md:text-2xl">
            What is &ldquo;Year Zero&rdquo;
          </h1>
          <p className="font-serif text-lg text-lighttext dark:text-darktext md:text-xl">
            Year Zero, as conceptualized for this event, is an initiative to
            start anew, rethinking our approach to education. For us, it signifies starting from scratch and thinking from first principles about educating oneself, while the theme is inspired from the contrarian concept of the great stagnation.
          </p>
        </div>
        <div className="relative flex-col items-center justify-center gap-1">
          <h1 className="font-head text-xl  text-lightheading dark:text-darkheading md:text-2xl">
            Who is this event for
          </h1>
          <p className="font-serif text-lg text-lighttext dark:text-darktext md:text-xl">
            This event is specifically designed for those carving their own path
            — the unschoolers, dropouts, and unconventionalists. Apply if this
            resonates with you.
          </p>
        </div>
        <div className="relative flex-col items-center justify-center gap-1">
          <h1 className="font-head text-xl  text-lightheading dark:text-darkheading md:text-2xl">
            Why we are doing this
          </h1>
          <ul className="ml-4 list-inside list-disc font-serif text-lg text-lighttext dark:text-darktext md:ml-5 md:text-xl">
            <li>
              To provide a social environment for like-minded individuals, full
              of optimism and intelligence.
            </li>
            <li>
              To kickstart the Wayfarers Space community in India and around the
              world, navigating this relatively new path together. Essentially,
              creating a “tribe” for those who plan to do bold things.
            </li>
            <li>
              To initiate a decade-long movement with Wayfarers Space for
              creating better environments, specifically building the
              technological future.
            </li>
            <li>
              To gain a deeper understanding of the world, enabling us to do
              interesting things.
            </li>
          </ul>
        </div>
        <div className="relative flex-col items-center justify-center gap-1">
          <h1 className="font-head text-xl  text-lightheading dark:text-darkheading md:text-2xl">
            About us
          </h1>
          <p className="font-serif text-lg text-lighttext dark:text-darktext md:text-xl">
            We are a group of young people from India, optimistic about
            technology and the world. Our team has people working in deep
            learning, hardware, genomics, software, and design.
          </p>
        </div>
        <div className="relative flex-col items-center justify-center gap-1">
          <h1 className="font-head text-xl  text-lightheading dark:text-darkheading md:text-2xl">
            Our long term goals
          </h1>
          <ul className="darktext-darktext ml-4 list-inside list-disc font-serif text-lg text-lighttext dark:text-darktext md:ml-5 md:text-xl">
            <li>
              To build a better environment for learning and progress than
              traditional school systems by establishing labs worldwide.
            </li>
            <li>
              To make &lsquo;Year Zero&rsquo; the go-to event for discussing how
              to get back to the future.
            </li>
          </ul>
        </div>
        <div className="relative flex-col items-center justify-center gap-1">
          <h1 className="font-head text-xl  text-lightheading dark:text-darkheading md:text-2xl">
            A note for you
          </h1>
          <p className="font-serif text-lg text-lighttext dark:text-darktext md:text-xl">
            There are still things to be figured out. There are still aspects to
            be figured out. You have the opportunity to join the team early,
            help us organize this, and be part of the movement from its
            beginning stages.
          </p>
        </div>
      </div>
    </main>
  );
}

const LearnMore = ({ link }: { link: string }) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <span className="rounded-sm bg-lighthighlight p-[0.6rem] dark:bg-darkhighlight">
        <ArrowDownRight color="#8C8C8C" size="16" />
      </span>
      <Link href={link} className="flex flex-row items-center gap-2">
        Learn more
      </Link>
    </div>
  );
};
