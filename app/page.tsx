"use client";
// pasting starts here
import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen overflow-x-hidden items-center bg-darkdark">
      <div className="flex h-screen flex-col md:flex-row items-center justify-center">
        <div className="flex justify-center md:h-auto mr-0 md:-mr-44 md:w-[720px] flex-col gap-4 bg-darkdark backdrop-blur-sm bg-opacity-5 px-6 md:p-12">
          <h1 className="font-head text-4xl md:text-6xl text-white">
            Wayfarers Space
          </h1>
          <p className="font-serif text-base md:text-xl text-darktext">
            We are a community of autodidacts and dropouts creating an
            alternative and better environment for ourselves, one that the
            conventional school should have provided, but didn&rsquo;t. And we
            aim to support each other in getting educated in the most
            adventurous and audacious way possible by undertaking the most
            ambitious goals.
          </p>
        </div>
        <div className="md:mt-0 w-[300px] md:w-[600px]">
          <Image
            src="/images/landing.png"
            alt="Landing"
            width={978}
            height={814}
          />
        </div>
      </div>
      <div className="mx-6 md:mx-0 flex max-w-3xl gap-12 flex-col items-center py-16">
        <div className="relative gap-1 flex-col items-center justify-center">
          <h1 className="font-head italic text-xl md:text-2xl text-darkheading">
            Rethinking Education: Building a New Path from First Principles
          </h1>
          <p className="font-serif text-lg md:text-xl text-darktext">
            After years of frustrations - we are trying to build something
            better for ourselves. And we want to find better ways to educate
            ourselves, learn about the world, and create things of massive
            value.
          </p>
        </div>
        <div className="relative gap-1 flex-col items-center justify-center">
          <h1 className="font-head italic text-xl md:text-2xl text-darkheading">
            Key Principles for Progress
          </h1>
          <p className="font-serif text-lg md:text-xl text-darktext">
            Definite optimism. Systemic understanding of the world is crucial.
            Crazy ideas are the ideas. Fallibilism. Techno-progress and thinking
            about the future. Don&rsquo;t be where majority of society is at.
            Mediocrity is alluring. Winning is underrated. Creating value is
            paramount.
          </p>
        </div>
        <div className="relative gap-1 flex-col items-center justify-center">
          <h1 className="font-head italic text-xl md:text-2xl text-darkheading">
            Our Lab of Dreams — Beyond Boundaries & Classrooms
          </h1>
          <p className="font-serif text-lg md:text-xl text-darktext">
            Our plan is to eventually build a physical lab dedicated to
            learning, experimenting, and creating. The thought of having a place
            where we can collaborate in creating original things with
            like-minded individuals fills us with immense excitement.
          </p>
        </div>
        <div className="relative gap-1 flex-col items-center justify-center">
          <h1 className="font-head italic text-xl md:text-2xl text-darkheading">
            Why we are doing this
          </h1>
          <p className="font-serif text-lg md:text-xl text-darktext">
            As we&rsquo;re not following the formal path of education, we want
            to create an environment where like minded people can come together
            to discuss and learn about important things together.
          </p>
        </div>
        <div className="relative gap-1 flex-col items-center justify-center">
          <h1 className="font-head italic text-xl md:text-2xl text-darkheading">
            About us
          </h1>
          <p className="font-serif text-lg md:text-xl text-darktext">
            We&rsquo;re a group of friends from India. In the past we&rsquo;ve
            built software, community and worked at companies.
          </p>
        </div>
        <div className="relative gap-1 flex-col items-center justify-center">
          <h1 className="font-head italic text-xl md:text-2xl text-darkheading">
            Join the movement
          </h1>
          <p className="font-serif text-lg md:text-xl text-darktext">
            We are in the initial stages of building a community and would love
            for you to join the early group to shape the way we move forward.
          </p>
        </div>
      </div>
      <footer className="mx-6 md:mx-0 flex max-w-3xl gap-12 flex-col items-center justify-evenly my-16 py-8 border-t-2 border-t-darkhighlight w-full">
        <div className="relative px-6 gap-y-8 md:gap-0 md:px-0 w-full flex flex-col md:flex-row justify-between">
          <div className="flex flex-col">
            <span className="flex flex-col text-darkheading font-serif text-2xl">
              Wayfarers Space
            </span>
            <div className="flex flex-row gap-4 py-4 items-center">
              <Link href="/x" className="text-darktext font-serif text-2xl">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9027 8.65473L19.3482 0H17.5838L11.119 7.51478L5.95547 0H0L7.8082 11.3637L0 20.4395H1.76443L8.59152 12.5036L14.0445 20.4395H20L11.9023 8.65473H11.9027ZM9.48608 11.4638L8.69495 10.3322L2.40018 1.32824H5.11025L10.1902 8.59475L10.9813 9.72632L17.5847 19.1717H14.8746L9.48608 11.4642V11.4638Z"
                    fill="#656565"
                  />
                </svg>
              </Link>
              <Link
                href="/discord"
                className="text-darktext font-serif text-2xl"
              >
                <svg
                  width="21"
                  height="16"
                  viewBox="0 0 21 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5015 1.77537C16.2068 1.16964 14.8226 0.729424 13.3753 0.47876C13.1976 0.800102 12.9899 1.23231 12.8468 1.57614C11.3083 1.34477 9.78402 1.34477 8.27387 1.57614C8.13073 1.23231 7.91837 0.800102 7.73904 0.47876C6.29024 0.729424 4.90437 1.17126 3.60973 1.77858C0.998439 5.72458 0.290561 9.57257 0.644501 13.3659C2.37645 14.6593 4.05491 15.445 5.70505 15.9591C6.11248 15.3984 6.47585 14.8023 6.78888 14.1741C6.1927 13.9476 5.62168 13.668 5.08213 13.3434C5.22527 13.2374 5.36528 13.1265 5.50055 13.0125C8.7914 14.5517 12.367 14.5517 15.6185 13.0125C15.7554 13.1265 15.8954 13.2374 16.0369 13.3434C15.4958 13.6696 14.9232 13.9491 14.327 14.1757C14.6401 14.8023 15.0019 15.4 15.4109 15.9607C17.0626 15.4466 18.7426 14.6609 20.4746 13.3659C20.8899 8.96846 19.7651 5.15581 17.5015 1.77537ZM7.23722 11.033C6.24934 11.033 5.4392 10.1108 5.4392 8.98774C5.4392 7.86467 6.23204 6.94083 7.23722 6.94083C8.24242 6.94083 9.05254 7.86305 9.03524 8.98774C9.0368 10.1108 8.24242 11.033 7.23722 11.033ZM13.8819 11.033C12.894 11.033 12.0838 10.1108 12.0838 8.98774C12.0838 7.86467 12.8766 6.94083 13.8819 6.94083C14.887 6.94083 15.6972 7.86305 15.6799 8.98774C15.6799 10.1108 14.887 11.033 13.8819 11.033Z"
                    fill="#656565"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-darkheading font-serif text-2xl">
              Navigate
            </span>
            <Link href="/" className="text-darktext font-serif text-2xl">
              Home
            </Link>
            <Link href="/apply" className="text-darktext font-serif text-2xl">
              Apply
            </Link>
            <Link
              href="/year-zero"
              className="text-darktext font-serif text-2xl"
            >
              Year Zero (TBA)
            </Link>
            <Link
              href="/manifesto"
              className="text-darktext font-serif text-2xl"
            >
              Manifesto (Archived)
            </Link>
          </div>
          <div className="flex flex-col">
            <span className="text-darkheading font-serif text-2xl">
              Contact
            </span>
            <Link
              href="mailto:badal@degreeless.engineer"
              className="text-darktext font-serif text-2xl"
            >
              badal@degreeless.engineer
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
