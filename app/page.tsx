// pasting starts here
import Image from "next/image";
import {ArrowDownRight } from "lucide-react";
export default function Home() {
  return (
    <main className="mx-auto min-h-screen items-center bg-darkdark">
      <div className="flex h-screen flex-col md:flex-row items-center justify-center">
        <div className="flex h-screen justify-center md:h-auto mr-0 md:-mr-44 md:w-[720px] flex-col gap-4 bg-darkdark backdrop-blur-sm bg-opacity-5 p-6 md:p-12">
          <h1 className="font-head text-4xl md:text-6xl text-white">Wayfarers Space</h1>
          <p className="font-serif text-base md:text-xl text-darktext">
            We are a community of autodidacts and dropouts creating an
            alternative and better environment for ourselves, one that the
            conventional route lacks. We aim to support each other in getting
            educated in the most adventurous and audacious way possible by
            undertaking the most ambitious goals.
          </p>
        </div>
        <div className="-mt-40 md:mt-0 w-[300px] md:w-[600px]">
          <Image
            src="/images/landing.png"
            alt="Landing"
            width={978}
            height={814}
          />
        </div>
      </div>
    </main>
  );
}
