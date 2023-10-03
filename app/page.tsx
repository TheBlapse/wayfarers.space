"use client";
// pasting starts here
import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen overflow-x-hidden items-center bg-darkdark">
      <div className="flex h-screen flex-col md:flex-row items-center justify-center">
        <div className="flex justify-center md:h-auto mr-0 md:-mr-44 sm:[350px] xl:w-[720px] flex-col gap-4 bg-darkdark backdrop-blur-sm bg-opacity-5 px-6 md:p-12">
          <h1 className="font-head text-3xl md:text-4xl xl:text-6xl text-darkheading">
            Wayfarers Space
          </h1>
          <p className="font-serif text-base md:text-md xl:text-xl text-darktext">
            We are a community of autodidacts and dropouts creating an
            alternative and better environment for ourselves, one that the
            conventional school should have provided, but didn&rsquo;t. And we
            aim to support each other in getting educated in the most
            adventurous and audacious way possible by undertaking the most
            ambitious goals.
          </p>
        </div>
        <div className="md:mt-0 w-[300px] md:w-[450px] xl:w-[600px]">
          <Image
            src="/images/landing.png"
            alt="Landing"
            width={978}
            height={814}
          />
        </div>
      </div>
      <div className="mx-6 sm:mx-12 md:mx-6 xl:mx-0 flex max-w-3xl gap-12 flex-col items-center py-16">
        <div className="relative gap-1 flex-col items-center justify-center">
          <h1 className="font-head italic text-xl md:text-2xl text-darkheading2">
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
          <h1 className="font-head italic text-xl md:text-2xl text-darkheading2">
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
          <h1 className="font-head italic text-xl md:text-2xl text-darkheading2">
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
          <h1 className="font-head italic text-xl md:text-2xl text-darkheading2">
            Why we are doing this
          </h1>
          <p className="font-serif text-lg md:text-xl text-darktext">
            As we&rsquo;re not following the formal path of education, we want
            to create an environment where like minded people can come together
            to discuss and learn about important things together.
          </p>
        </div>
        <div className="relative gap-1 flex-col items-center justify-center">
          <h1 className="font-head italic text-xl md:text-2xl text-darkheading2">
            About us
          </h1>
          <p className="font-serif text-lg md:text-xl text-darktext">
            We&rsquo;re a group of friends from India. In the past we&rsquo;ve
            built software, community and worked at startups.
          </p>
        </div>
        <div className="relative gap-1 flex-col items-center justify-center">
          <h1 className="font-head italic text-xl md:text-2xl text-darkheading2">
            Join the movement
          </h1>
          <p className="font-serif text-lg md:text-xl text-darktext">
            We are in the initial stages of building a community and would love
            for you to join the early group to shape the way we move forward.
          </p>
        </div>
      </div>
    </main>
  );
}
