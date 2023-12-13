import Link from "next/link";

const Footer = () => {
  return (
    <footer className="max-w-screen z-50 flex h-full min-h-full flex-col items-center justify-start gap-12 overflow-x-hidden bg-darkdark md:mx-0 md:justify-evenly">
      <div className="relative z-50 flex w-full max-w-3xl flex-col justify-start gap-y-8 border-t-2 border-t-darkhighlight bg-darkdark px-6 py-16 md:flex-row md:justify-between md:gap-0 md:px-0  md:py-12">
        <div className="flex flex-col">
          <span className="flex flex-col font-serif text-xl text-darkheading2 md:text-2xl">
            Wayfarers Space
          </span>
          <div className="flex flex-row items-center gap-4 py-2">
            <Link
              href="/x"
              className="font-serif text-lg text-darkheading2  hover:opacity-70 md:text-xl"
            >
              <svg
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                className="h-4 w-4 md:h-auto md:w-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9027 8.65473L19.3482 0H17.5838L11.119 7.51478L5.95547 0H0L7.8082 11.3637L0 20.4395H1.76443L8.59152 12.5036L14.0445 20.4395H20L11.9023 8.65473H11.9027ZM9.48608 11.4638L8.69495 10.3322L2.40018 1.32824H5.11025L10.1902 8.59475L10.9813 9.72632L17.5847 19.1717H14.8746L9.48608 11.4642V11.4638Z"
                  fill="#8C8C8C"
                />
              </svg>
            </Link>
            <Link
              href="/discord"
              className="font-serif text-lg text-darkheading2 hover:opacity-70 md:text-xl"
            >
              <svg
                height="21"
                viewBox="0 0 21 16"
                className="h-5 w-5 md:h-auto md:w-auto"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5015 1.77537C16.2068 1.16964 14.8226 0.729424 13.3753 0.47876C13.1976 0.800102 12.9899 1.23231 12.8468 1.57614C11.3083 1.34477 9.78402 1.34477 8.27387 1.57614C8.13073 1.23231 7.91837 0.800102 7.73904 0.47876C6.29024 0.729424 4.90437 1.17126 3.60973 1.77858C0.998439 5.72458 0.290561 9.57257 0.644501 13.3659C2.37645 14.6593 4.05491 15.445 5.70505 15.9591C6.11248 15.3984 6.47585 14.8023 6.78888 14.1741C6.1927 13.9476 5.62168 13.668 5.08213 13.3434C5.22527 13.2374 5.36528 13.1265 5.50055 13.0125C8.7914 14.5517 12.367 14.5517 15.6185 13.0125C15.7554 13.1265 15.8954 13.2374 16.0369 13.3434C15.4958 13.6696 14.9232 13.9491 14.327 14.1757C14.6401 14.8023 15.0019 15.4 15.4109 15.9607C17.0626 15.4466 18.7426 14.6609 20.4746 13.3659C20.8899 8.96846 19.7651 5.15581 17.5015 1.77537ZM7.23722 11.033C6.24934 11.033 5.4392 10.1108 5.4392 8.98774C5.4392 7.86467 6.23204 6.94083 7.23722 6.94083C8.24242 6.94083 9.05254 7.86305 9.03524 8.98774C9.0368 10.1108 8.24242 11.033 7.23722 11.033ZM13.8819 11.033C12.894 11.033 12.0838 10.1108 12.0838 8.98774C12.0838 7.86467 12.8766 6.94083 13.8819 6.94083C14.887 6.94083 15.6972 7.86305 15.6799 8.98774C15.6799 10.1108 14.887 11.033 13.8819 11.033Z"
                  fill="#8C8C8C"
                />
              </svg>
            </Link>
            <Link
              href="/github"
              className="font-serif text-lg text-darkheading2 hover:opacity-70 md:text-xl"
            >
              <svg
                height="21"
                aria-hidden="true"
                viewBox="0 0 16 16"
                className="h-4 w-4 md:h-auto md:w-auto"
                version="1.1"
                data-view-component="true"
              >
                <path
                  d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
                  fill="#8C8C8C"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-serif text-xl text-darkheading2 md:text-2xl">
            Navigate
          </span>
          <Link
            href="/"
            className="font-serif text-lg text-darktext hover:text-opacity-70 md:text-xl"
          >
            Home
          </Link>
          <Link
            href="/apply"
            className="font-serif text-lg text-darktext hover:text-opacity-70 md:text-xl"
          >
            Apply
          </Link>
          <Link
            href="/year-zero"
            className="font-serif text-lg text-darktext hover:text-opacity-70 md:text-xl"
          >
            Year Zero
          </Link>
          <Link
            href="/manifesto"
            className="font-serif text-lg text-darktext hover:text-opacity-70 md:text-xl"
          >
            Manifesto (Archived)
          </Link>
        </div>
        <div className="flex flex-col">
          <span className="font-serif text-xl text-darkheading2 md:text-2xl">
            Contact
          </span>
          <Link
            href="mailto:hi@wayfarers.space"
            className="font-serif text-lg text-darktext hover:text-opacity-70 md:text-xl"
          >
            hi@wayfarers.space
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
