import { ArrowDownRight, Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen overflow-x-hidden items-center justify-center bg-darkdark">
      <div className="max-w-5xl w-full flex h-screen flex-col items-start justify-center p-6 sm:px-12 md:pl-12 xl:pl-0 gap-y-8">
        <div className="flex justify-center md:h-auto sm:[350px] md:w-[600px] xl:w-[800px] flex-col gap-4 bg-darkdark backdrop-blur-sm bg-opacity-5 ">
          <h1 className="font-head text-4xl md:text-6xl xl:text-7xl text-darkheading">
            Year Zero{" "}
            <span className="italic text-darkheading2 text-2xl md:text-3xl xl:text-4xl">
              &mdash; get back to the future
            </span>
          </h1>
          <p className="font-serif text-md md:text-lg xl:text-xl text-darktext">
            An annual round table for autodidacts, and dropouts organized by
            wayfarers space to come together to discuss how to make the future
            look like the future and understand the world audaciously by
            undertaking a path different than that of traditional route of
            schools.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-md md:text-lg xl:text-xl">
          <h2 className=" text-darkheading2 font-head">
            Join us for our first round table event.
          </h2>
          <div className="flex flex-col gap-2 font-serif text-darktext ">
            <div className="flex flex-row gap-2 items-center">
              <span className="bg-darkhighlight p-[0.6rem] rounded-sm">
                <Calendar color="#8C8C8C" size="16" />
              </span>
              Early next year
            </div>
            <div className="flex flex-row gap-2 items-center">
              <span className="bg-darkhighlight p-[0.6rem] rounded-sm">
                <MapPin color="#8C8C8C" size="16" />
              </span>
              Bangalore, India
            </div>
            <Link href="/discord" className="flex flex-row gap-2 items-center">
              <span className="bg-darkhighlight p-[0.6rem] rounded-sm">
                <svg
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5535 1.03729C12.5178 0.552705 11.4104 0.200531 10.2526 0C10.1104 0.257074 9.94429 0.602844 9.82976 0.877902C8.599 0.692812 7.37956 0.692812 6.17144 0.877902C6.05693 0.602844 5.88704 0.257074 5.74357 0C4.58454 0.200531 3.47584 0.553999 2.44013 1.03985C0.351095 4.19666 -0.215207 7.27505 0.0679444 10.3097C1.4535 11.3444 2.79627 11.973 4.11638 12.3843C4.44233 11.9357 4.73302 11.4588 4.98345 10.9563C4.5065 10.775 4.04969 10.5514 3.61805 10.2917C3.73256 10.2069 3.84457 10.1182 3.95279 10.027C6.58546 11.2583 9.44593 11.2583 12.0472 10.027C12.1566 10.1182 12.2686 10.2069 12.3819 10.2917C11.949 10.5527 11.4909 10.7763 11.014 10.9576C11.2644 11.4588 11.5538 11.937 11.881 12.3856C13.2024 11.9743 14.5464 11.3457 15.932 10.3097C16.2642 6.79176 15.3644 3.74164 13.5535 1.03729ZM5.34212 8.44343C4.55181 8.44343 3.9037 7.70563 3.9037 6.80718C3.9037 5.90873 4.53797 5.16966 5.34212 5.16966C6.14628 5.16966 6.79437 5.90743 6.78053 6.80718C6.78178 7.70563 6.14628 8.44343 5.34212 8.44343ZM10.6578 8.44343C9.86752 8.44343 9.21941 7.70563 9.21941 6.80718C9.21941 5.90873 9.85366 5.16966 10.6578 5.16966C11.462 5.16966 12.1101 5.90743 12.0962 6.80718C12.0962 7.70563 11.462 8.44343 10.6578 8.44343Z"
                    fill="#8C8C8C"
                  />
                </svg>
              </span>
              Join <span className="underline hover:opacity-70">Discord</span>{" "}
              for updates
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full flex min-h-screen flex-col items-center justify-center gap-y-8 px-6 sm:px-24 md:px-12 xl:px-0 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex relative w-full md:w-1/2 gap-3 p-6 text-left items-start rounded-md flex-col bg-darkhighlight border border-transparent hover:border hover:border-darktext">
            <h2 className="font-head text-darkheading2 text-2xl md:text-3xl">
              What is the event
            </h2>
            <p className="font-serif text-darktext text-lg md:text-xl">
              An event for those who prefer not to spend their time replacing
              thoughts of the future with classroom seats. Discussing how to
              make the future look like the future and meet new interesting
              people.
            </p>
          </div>
          <div className="flex relative w-full md:w-1/2 gap-3 p-6 text-left items-start rounded-md flex-col bg-darkhighlight border border-transparent hover:border hover:border-darktext">
            <h2 className="font-head text-darkheading2 text-2xl md:text-3xl">
              What is &ldquo;Year Zero&rdquo;
            </h2>
            <p className="font-serif text-darktext text-lg md:text-xl">
              Year Zero is an idea put into practice by Pol Pot in Cambodia,
              that all culture and traditions within a society must be
              completely destroyed or discarded, and a new revolutionary culture
              must replace it, starting from scratch.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex relative w-full md:w-1/2 gap-3 p-6 text-left items-start rounded-md flex-col bg-darkhighlight border border-transparent hover:border hover:border-darktext ">
            <h2 className="font-head text-darkheading2 text-2xl md:text-3xl">
              Who are we
            </h2>
            <p className="font-serif text-darktext text-lg md:text-xl">
              We are unschoolers, dropouts and autodidacts passionate about
              technology and the world. We have people working in deep learning,
              hardware, biotech, software and design.
            </p>
          </div>
          <div className="flex relative w-full md:w-1/2 gap-3 p-6 text-left items-start rounded-md flex-col bg-darkhighlight  border border-transparent hover:border hover:border-darktext">
            <h2 className="font-head text-darkheading2 text-2xl md:text-3xl">
              Our long term goals
            </h2>
            <p className="font-serif text-darktext text-lg md:text-xl">
              Build a better environment for learning and progress than
              traditional school systems by building labs around the world and
              make Year Zero the-go event for discussing how to build the
              future.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

const LearnMore = ({ link }: { link: string }) => {
  return (
    <div className="flex flex-row gap-2 items-center">
      <span className="bg-darkhighlight p-[0.6rem] rounded-sm">
        <ArrowDownRight color="#8C8C8C" size="16" />
      </span>
      <Link href={link} className="flex flex-row gap-2 items-center">
        Learn more
      </Link>
    </div>
  );
};
