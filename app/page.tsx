import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden bg-lightbg dark:bg-darkbg">
      <div className="mt-24 flex min-h-screen flex-col items-center justify-center md:mt-0 md:flex-row">
        <div className="sm:[350px] dark:darkbg mr-0 flex flex-col justify-center gap-4 bg-lightbg bg-opacity-5 px-6 backdrop-blur-sm dark:bg-darkbg dark:bg-opacity-5  md:h-auto md:p-12 xl:w-[720px]">
          <h1 className="font-head text-3xl text-lighttitle dark:text-darktitle md:text-4xl xl:text-6xl">
            Wayfarers Space
          </h1>
          <p className="md:text-md font-serif text-base text-lighttext dark:text-darktext xl:text-xl">
            We are a community of unschoolers, dropouts, and exits creating an
            alternative and better environment for ourselves, one that the
            school was supposed to provide, but didn&rsquo;t. We aim to support
            each other in getting educated in the most adventurous and audacious
            way possible by undertaking the most ambitious goals.
          </p>
          <div className="flex flex-row gap-4">
            <Link
              href="/apply"
              className="md:text-md w-fit cursor-pointer rounded-full border-2 border-transparent bg-black bg-opacity-[14%] px-4 py-1 font-serif text-base text-lightheading hover:border-black hover:border-opacity-[14%] hover:bg-transparent hover:text-lighttext dark:bg-white dark:bg-opacity-[14%] dark:text-darkheading dark:hover:border-opacity-[14%] dark:hover:bg-transparent dark:hover:text-darktext md:px-10 xl:px-12 xl:text-xl"
            >
              Apply to Join
            </Link>
            <Link
              href="/discord"
              className="md:text-md w-fit cursor-pointer rounded-full border-2 border-black border-opacity-[14%] px-4 py-1 font-serif text-base text-lighttext hover:border-transparent hover:bg-black hover:bg-opacity-[14%] hover:text-lightheading dark:border-white dark:border-opacity-[14%] dark:text-darktext dark:hover:border-opacity-[14%] dark:hover:bg-white dark:hover:bg-opacity-[14%] hover:dark:text-darkheading md:px-10 xl:px-12 xl:text-xl"
            >
              Join Discord
            </Link>
          </div>
        </div>
        <div className="hidden w-[300px] dark:block md:mt-0 md:w-[450px] xl:w-[600px]">
          <Image
            src="/images/landing-dark.png"
            priority
            alt="Landing"
            width={978}
            height={814}
          />
        </div>
        <div className="block w-[300px] dark:hidden md:mt-0 md:w-[450px] xl:w-[600px]">
          <Image
            src="/images/landing-light.png"
            priority
            alt="Landing"
            width={978}
            height={814}
          />
        </div>
      </div>
      <div className="mx-6 flex max-w-3xl flex-col items-center gap-12 py-16 sm:mx-12 md:mx-6 xl:mx-0">
        <div className="relative flex-col items-center justify-center gap-1">
          <h1 className="font-head text-xl  text-lightheading dark:text-darkheading md:text-2xl">
            Rethinking Education: Building a New Path from First Principles
          </h1>
          <p className="font-serif text-lg text-lighttext dark:text-darktext md:text-xl">
            After years of frustrations - we are trying to build something
            better for ourselves. And we want to find better ways to educate
            ourselves, learn about the world, and create things of massive
            value.
          </p>
        </div>
        <div className="relative flex-col items-center justify-center gap-1">
          <h1 className="font-head text-xl  text-lightheading dark:text-darkheading md:text-2xl">
            Key Principles for Progress
          </h1>
          <p className="font-serif text-lg text-lighttext dark:text-darktext md:text-xl">
            Definite optimism. Systemic understanding of the world is crucial.
            Crazy ideas are the ideas. Fallibilism. Techno-progress and thinking
            about the future. Don&rsquo;t be where majority of society is at.
            Mediocrity is alluring. Winning is underrated. Creating value is
            paramount.
          </p>
        </div>
        <div className="relative flex-col items-center justify-center gap-1">
          <h1 className="font-head text-xl  text-lightheading dark:text-darkheading md:text-2xl">
            Our Lab of Dreams — Beyond Boundaries & Classrooms
          </h1>
          <p className="font-serif text-lg text-lighttext dark:text-darktext md:text-xl">
            Our plan is to eventually build a physical lab dedicated to
            learning, experimenting, and creating. The thought of having a place
            where we can collaborate in creating original things with
            like-minded individuals fills us with immense excitement.
          </p>
        </div>
        <div className="relative flex-col items-center justify-center gap-1">
          <h1 className="font-head text-xl  text-lightheading dark:text-darkheading md:text-2xl">
            Why we are doing this
          </h1>
          <p className="font-serif text-lg text-lighttext dark:text-darktext md:text-xl">
            As we&rsquo;re not following the formal path of education, we want
            to create an environment where like minded people can come together
            to discuss and learn about important things together. We are being
            very aware and mindful of the things that (few) universities do
            provide like network benefits, credibility to stand apart and a room
            full of smart people. So we aim to tackle these points in a new and
            original way, as it should be in the age of the internet.
          </p>
        </div>
        <div className="relative flex-col items-center justify-center gap-1">
          <h1 className="font-head text-xl  text-lightheading dark:text-darkheading md:text-2xl">
            About us
          </h1>
          <p className="font-serif text-lg text-lighttext dark:text-darktext md:text-xl">
            We&rsquo;re a group of friends from India. In the past we&rsquo;ve
            built software, community and worked at startups.
          </p>
        </div>
        <div className="relative flex-col items-center justify-center gap-1">
          <h1 className="font-head text-xl  text-lightheading dark:text-darkheading md:text-2xl">
            Join the movement
          </h1>
          <p className="font-serif text-lg text-lighttext dark:text-darktext md:text-xl">
            We are in the initial stages of building a community and would love
            for you to join the early group to shape the way we move forward.
          </p>
        </div>
      </div>
    </main>
  );
}
