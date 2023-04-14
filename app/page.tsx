import Link from "next/link";
export default function Home() {
  return (
    <main className="my-8">
      <div className="container  mx-auto w-[90vw] md:w-[70vw] lg:w-[60vw] max-w-2xl bg-[FAFAFA]">
        <h1 className=" font-semibold leading-tight text-2xl md:text-4xl mt-0 pb-2 border-b-2 border-b-[808080]">
          Wayfarers&apos; Space
        </h1>
        <p className="pt-2 text-base md:text-lg">
          The home for people embarking on the non-traditional path.
          <br />
          We&apos;ve already exited the system, and we&apos;re looking for
          friends.
          <br />
          We simply want to build a community of friends who share our itch for
          understanding the world and creating value. Our goal is to create a
          network of students who learn and build together.
          <br />
          At Wayfarers.Space, we approach education from a different
          perspective. We see life as a playground, where everyone is playing
          their own game. There are no right or wrong games, for there is no
          right or wrong. We encourage everyone to find their own game and
          pursue it with curiosity and passion.
          <br />
          We have an itch to understand the world, how it functions, what
          secrets we can find, and hoping to create value and solve the biggest
          problems out there.
          <br />A network of students, learning and building stuff together
          &mdash; Using Balaji&apos;s Network State approach, We plan to build
          an Online network first, and physical second, but not never.
          Preferably with time, Network communities would gravitate towards
          being more physical, and we can finally do everything we want, from
          building rockets to computers.
        </p>
        <div className="pt-2">
          <ul className="list-disc list-inside font-semibold ">
            <li className="text-opacity-100 hover:italic">
              <Link href="https://twitter.com/WayfarersSpace/status/1641860389582299146">
                Year Zero &mdash; The Manifesto (Work in Progress)
              </Link>
            </li>
            <li className="text-opacity-100 hover:italic">
              <Link href="https://twitter.com/WayfarersSpace">Twitter</Link>
            </li>
            <li className="text-opacity-100 hover:italic">
              <Link href="https://discord.gg/Red4DJZphV">Discord</Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
