import Image from "next/image";
import fs from "fs";
function getLastUpdatedDate(): string {
  const fileStats = fs.statSync(__filename);
  const lastUpdated = fileStats.mtime.toDateString();
  return lastUpdated;
}

export default function page() {
  return (
    <main className="align-center flex min-h-screen flex-col content-center items-center gap-4 py-8">
      <div className="self-start pl-8 font-mono font-semibold md:pl-16">
        Last Updated: {getLastUpdatedDate()}
      </div>
      <div className=" mx-auto flex w-[90vw] max-w-2xl flex-col gap-3 font-serif text-lg font-[460] md:w-[75vw] lg:w-[60vw] ">
        <p>
          Imagine tomorrow that you opened your eyes and found yourself in a
          playground. You need clarification. You see other people around,
          playing on swings, talking, and roaming.
        </p>
        <p>
          You roam around, still trying to understand why you are here. You talk
          to people and make some friends.
        </p>
      </div>
      <Image
        src="/images/year-zero/one.jpeg"
        width="512"
        height="256"
        alt="one"
        className={`rounded-sm bg-gray-500`}
      />
      <div className=" mx-auto flex w-[90vw] max-w-2xl flex-col gap-3 font-serif text-lg font-[460] md:w-[75vw] lg:w-[60vw] ">
        <p>
          For example, you find many people who urge you and force you to come
          and join them on their swings. You see, their game is unattractive,
          and they seem bothered by this fact. Weird.
        </p>
        <p>
          No one has an interesting answer when you ask why we are in this
          playground. Also, many people think they are doing something
          meaningful while playing on their swings. Lol, why? Is there another
          word for this playground we have been talking about?
        </p>
        <p>
          It&rsquo;s called <span className="font-[600]">life.</span>
        </p>
      </div>
      <Image
        src="/images/year-zero/two.png"
        width="512"
        height="256"
        alt="two"
        className={`rounded-sm bg-gray-500`}
      />
      <div className=" mx-auto flex w-[90vw] max-w-2xl flex-col gap-3 font-serif text-lg font-[460] md:w-[75vw] lg:w-[60vw] ">
        <p>
          Life is a playground, and we are all playing. Whatever you are doing
          isn&rsquo;t any more important than what someone else is. It is all a
          made-up game.
        </p>
        <p>
          Once you internalize, you realize how powerful this is. And
          what&rsquo;s equanimity? Once you know that this is indeed a
          playground, living on this planet is like a day that allows you to
          find things significant to you. You can find something that
          you&rsquo;d still do if you were in a playground because you are in
          one. Do not be bothered by the people urging you to come on their
          swings for some reason. Even create your own. (understanding these can
          make a student&rsquo;s life more accessible and exciting. No anxiety
          and pressure. Just curiosity).
        </p>
        <p>
          Another thing, after waking up in the playground, you&rsquo;ll realize
          the only curious thing is to understand it. What is it? How does it
          work? How can I improve it better (because what else can you do)? The
          most powerful thing a child can understand.
        </p>
        <p>
          We will talk about a particular way of thinking, which includes
          touching on philosophical elements of life and exploring paths of
          concrete, practical ideas. Only by asking the most challenging
          questions about how we think can we fundamentally find and solve the
          biggest problems in education.
        </p>
        <p>
          We will talk about a particular way of thinking, which includes
          touching on philosophical elements of life and exploring paths of
          concrete, practical ideas. Only by asking the most challenging
          questions about how we think can we fundamentally find and solve the
          biggest problems in education.
        </p>
        <p>
          Programs built from these principles, as Albert Camus would put it,
          genuinely accepting the absurdity of life, will allow kids, and even
          adults, to find their game. So here we are, not children, but children
          still. Trying to find the pleasure we&rsquo;d like to have in this
          playground. Understand it, and make it better.
        </p>
        <p>
          In an uncertain world where we don&rsquo;t know what will happen
          tomorrow, let us not worry and work towards a brighter tomorrow;
          let&rsquo;s work towards an even brighter today.
        </p>
        <p>
          It&rsquo;s important to acknowledge that our current understanding and
          imagination of what constitutes the &lsduo;perfect&rsduo; education
          system may be limited by our present knowledge and experiences. Just
          as people in the 16th century could not have imagined motor cars as a
          means of transportation, we may not be able to fully envision the best
          education system yet to be discovered or invented.
        </p>
        <p>
          Waiting for the perfect solution will only delay progress and hinder
          our ability to take action toward bettering education. Therefore, we
          should focus on implementing practical ideas that can positively
          impact the short term while keeping our long-term goals in mind.
        </p>
        <p>
          So what should be our approach? Sheer experimentation, pursuing
          exciting ideas from first principles, being humble, embracing
          technologies, referring to history, and studying nuances of
          large-scale systems.
        </p>
        <p>
          Back then, when there was no internet, when the best people were found
          in a university, getting a degree from it was considered a prestige,
          and people with those degrees were considered the most knowledgeable
          by society. But time has passed, everything has evolved, and we now
          have the internet &mdash; knowledge at our fingertips; everything has
          changed, but not this system, yet many people can&rsquo;t live without
          that paper, which has become a commodity. Why is that?
        </p>
        <p>
          Employers think if one has survived all these years to get this piece
          of paper, he will do whatever they say. People need to understand what
          it is worth? When they know the time has passed. It is not the honor
          of knowledge but obedience. Credentialing helps people to filter
          people out quickly.
        </p>
      </div>
      <a
        href="https://twitter.com/naval/status/912220382450524160"
        target="_blank"
      >
        <Image
          src="/images/year-zero/three.png"
          width="512"
          height="256"
          alt="two"
          className={`rounded-sm border-2 border-gray-800 bg-gray-500`}
        />
      </a>
      <div className=" mx-auto flex w-[90vw] max-w-2xl flex-col gap-3 font-serif text-lg font-[460] md:w-[75vw] lg:w-[60vw] ">
        <p>
          Now <span className="font-semibold">IMAGINE.</span>
        </p>
        <p>
          Your kids are waking up. They go (because they want) to where they
          feel welcomed and like home. It is a place for them to find what they
          like and satisfy their curiosity.
        </p>
        <p>
          Some are building rockets, and some are computers. Some play and make
          games. Some are creating the following best content on the internet.
          Some are directing movies, and some are studying physics. Some are
          going to finish their quarter-long research project. Why?
        </p>
      </div>
      <Image
        src="/images/year-zero/four.png"
        width="512"
        height="256"
        alt="two"
        className={`rounded-sm bg-gray-500`}
      />
      <div className=" mx-auto flex w-[90vw] max-w-2xl flex-col gap-3 font-serif text-lg font-[460] md:w-[75vw] lg:w-[60vw] ">
        <p>
          Just because &mdash; The perks of living, Not trying to climb any
          ladders of life, but working really hard because they&rsquo;re having
          fun.
        </p>
        <p>
          Without talking more about what is wrong, what is not working, and
          what needs to get fixed, we present you with some words of{" "}
          <a target="_blank" href="https://kapilguptamd.com">
            Kapil Gupta
          </a>{" "}
          &mdash;
        </p>
        <blockquote className="pl-6 opacity-90">
          &ldquo;I do not condemn a man for having a job. I chastise him for
          believing that this is all he is worth. There are glorious talents
          that are unique only to You. Nature does not make carbon copies. And
          schools and societies insist upon nothing but carbon copies. One day
          you will die. And when you are in your final days, how will you feel
          when you realize that you spent your life as a &ldquo;worker?&rdquo;
          How will you feel when you realize that you have wasted your entire
          life never having explored the talents that were meant only for You?
          You are fortunate. For there is still time. What will you do with it?
          Nature created you as an original. Originals are invested with
          glorious talents. Discover the talent within yourself that nature has
          been waiting for you to show to the world. You are a creator. And you
          always have been. Give yourself permission to create. For if you do
          not, the world will take advantage of you being ignorant of this fact.
          And it will put you to &ldquo;work!&rdquo;&rdquo;
        </blockquote>
        <p>
          So, you have to decide what life you want to live? Do you want to obey
          orders, do the work, and live life like everyone around you? Or you
          want to explore, learn and find answers to satisfy your curiosity.
        </p>
        <p>
          You can help only those who need help. You can fix the system for
          those who know it&rsquo;s not working. The approach is similar here.
          This will help those who need help. Convincing everybody is not
          feasible and is never going to happen.
        </p>
        <p>
          Why do we exit? Because the government and society will not adopt our
          ideas. Leaving the only option &mdash; exit. One day, the incumbent
          education system will destroy itself. As @Dwarkesh_sp said, the
          government will still pour money even if you build a better education
          system, so let them do it; let&rsquo;s not try to correct them.
          Let&rsquo;s cave our own path.
        </p>
      </div>
      <iframe
        src="https://www.youtube.com/embed/cxHwM5Mu2ps"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="flex h-[60vh] w-[90vw] max-w-2xl flex-shrink md:w-[75vw] lg:w-[60vw]"
        allowFullScreen
      ></iframe>
      <div className=" mx-auto flex w-[90vw] max-w-2xl flex-col gap-3 font-serif text-lg font-[460] md:w-[75vw] lg:w-[60vw] ">
        <p>
          When you don&rsquo;t have any options left, you need to exit. As
          Balaji says, &ldquo;Exit Enables alternatives. Alternatives enable
          reform.&rdquo; We all were fed up with the system. So we simply chose
          to exit.
        </p>
      </div>
      <a
        href="https://twitter.com/balajis/status/1433439209478504448"
        target="_blank"
      >
        <Image
          src="/images/year-zero/five.png"
          width="664"
          height="256"
          alt="two"
          className={`rounded-sm border-2 border-gray-800 bg-gray-500`}
        />
      </a>

      <div className=" mx-auto flex w-[90vw] max-w-2xl flex-col gap-3 font-serif text-lg font-[460] md:w-[75vw] lg:w-[60vw] ">
        <p>
          If you are still reading this, you are the one we are looking for in
          our community. As George Hotz says, “You won&rsquo;t exit, but you can
          do it. I am not saying you should, but it&rsquo;s good to be aware
          that you can, it&rsquo;s a choice you have!”
        </p>
      </div>
      <iframe
        src="https://www.youtube.com/embed/FJJQBJlnPGE"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="flex h-[60vh] w-[90vw] max-w-2xl flex-shrink md:w-[75vw] lg:w-[60vw]"
        allowFullScreen
      ></iframe>
      <div className=" mx-auto flex w-[90vw] max-w-2xl flex-col gap-3 font-serif text-lg font-[460] md:w-[75vw] lg:w-[60vw] ">
        <p>
          Here&lsquo;s what we will be doing instead, and we invite you to join
          us on the journey.
        </p>
        <p>Here is a clip of Derek Sivers &ndash;</p>
      </div>
      <iframe
        src="https://www.youtube.com/embed/fW8amMCVAJQ"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="flex h-[60vh] w-[90vw] max-w-2xl flex-shrink md:w-[75vw] lg:w-[60vw]"
        allowFullScreen
      ></iframe>
      <div className=" mx-auto flex w-[90vw] max-w-2xl flex-col gap-3 font-serif text-lg font-[460] md:w-[75vw] lg:w-[60vw] ">
        <p>
          Our approach to this movement is similar. Peter Thiel says there is a
          vast &lsquo;transition function&rsquo; for society to adapt to new &
          better things &mdash; especially for systems deeply ingrained in the
          core of society.
        </p>
        <p>
          So to make this movement mainstream &mdash; we need to start with
          those who are already aware of the down comings of the education
          system &mdash; and already want to be helped.
        </p>
        <p>
          These are highly passionate individuals who want to stand out, follow
          untraditional ways, and create new paths for their life.
        </p>
        <p>
          We start by making a community of such people &mdash; they may not be
          in huge numbers, but they are the ones that will act like catalysts
          for the movement to pick up (as shown in the clip) &mdash; and pave
          the way for society to start getting aware of the new path. In the
          end, this is a people game. You can think of a pure sweet idea, but it
          will only work with such passionate people.
        </p>
        <p>
          The community raises awareness in various ways, showcasing the
          achievements of people who didn&rsquo;t follow this so-called
          traditional path and guest sessions every week with those who have yet
          to do it.
        </p>
        <p>
          There is also the feeling of being &ldquo;at home&rdquo; with the
          community. We are humans; we are wired to feel connected towards
          certain groups of people - traditionally, people have been doing that
          with college communities. So here we want to create an environment
          where everyone understands they are not alone &mdash; and we&rsquo;re
          undertaking all challenging problems together.
        </p>
        <p>
          But we must ensure that it is not another dead community &mdash; where
          95% don&rsquo;t even remember joining such a server. How? Here we take
          inspiration from Balaji&rsquo;s idea of a Network State. We must align
          the community towards a shared goal - possibly around achieving small
          (but crucial) goals to improve the educational system. Or deeply
          engraving learning pedagogy with the aspect of community-building and
          learning together. For example, group projects for learning.
        </p>
        <p>
          It will not be the standard model of company building and then user
          consuming, but making users part of this journey of solving problems
          and building (especially the ones who join the movement early).
        </p>
        <p className="text-xl font-semibold">But why not make a rocket?</p>
        <p>
          12 years of schooling, 4 years undergraduate, 2 years graduate. And in
          most cases - not one shred of creativity aims to improve the world. We
          must take bold (and very exciting) steps to ensure students are
          prolific.
        </p>
        <p>
          Learning AI? Why not build your own implementation of the
          text-to-image model? Why not try to improve it? Learning CS? Why not
          contribute to LLVM or make new architectures of compilers?
        </p>
        <p>
          Learning music? Why not try to make new-gen music and compete with
          Rick Rubin?
        </p>
        <p>
          It&lsquo;s hard, yes &mdash; sometimes, maybe even not possible. But
          embarking on such a project and committing to it will yield a much
          greater learning curve than reading books and thinking, you know,
          stuff.
        </p>
        <p>
          At last, <span className="font-semibold">IMAGINE.</span>
        </p>
        <p>
          Next week, your kids are excited to come home from school, to start
          working with some other friends, and to build the new multiplayer game
          they all have been working on. Some friends are really trying to learn
          how to make their computer, From transistors to the browser.
        </p>
        <p>
          Won&rsquo;t your kids love this? We can only have some people trying
          to learn how to build computers by their own choice. Your kids may
          want something else? Becoming the next Mr Beast, who knows? Some would
          like to understand how a satellite works or how a movie is directed.
        </p>
        <p>Can&rsquo;t we do this from next week?</p>
        <p>
          Meet together, learn and build? We will develop a set of guiding
          principles and a manifesto. And just invite kids like us to come and
          join us. Let&rsquo;s encourage kids to start something like this on
          their own.
        </p>
        <p>
          We understand there are a lot of unknown unknowns. But that&rsquo;s
          how we do it, not by starting with the best education system, but by
          starting today.
        </p>
        <p>
          The world is flat; it really is. There is nowhere to get to, we are
          here, and this is our playground. Can we build this? Let&rsquo;s not
          dream about tomorrow and start today. Let&rsquo;s try.
        </p>
      </div>
    </main>
  );
}
