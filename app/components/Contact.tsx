const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full flex justify-center items-center flex-col gap-4 mb-20"
    >
      <h2 className="text-center font-bold text-xl md:text-2xl text-dark dark:text-light ">
        Contact
      </h2>
      <p className="text-lightblue m-auto inline-block text-center font-medium text-sm md:text-base">
        LOVE TO HEAR FROM YOU
      </p>
      <a
        href="mailto:lguzman.58erb@outlook.com"
        className="linkbutton"
      >
        <p className="text-sm md:text-base font-semibold">Send Message</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          className="h-4 w-4 xs:h-5 xs:w-5"
          viewBox="0 0 24 24"
        >
          <mask id="a" x="0" y="0" maskUnits="userSpaceOnUse">
            <path fill="#D9D9D9" d="M0 0h24v24H0z" />
          </mask>
          <g mask="url(#a)">
            <path
              fill="#fff"
              d="M20 6H4v12h9v2H4c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V6c0-.55.2-1.02.59-1.41C2.98 4.19 3.45 4 4 4h16c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v7h-2V6Zm-.82 14H16a.97.97 0 0 1-.71-.29A.97.97 0 0 1 15 19c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h3.18l-.9-.9a.92.92 0 0 1-.3-.7 1 1 0 0 1 .32-.7c.2-.18.43-.28.7-.29.27 0 .5.09.7.29l2.6 2.6a.96.96 0 0 1 0 1.4l-2.6 2.6a.98.98 0 0 1-.69.29.93.93 0 0 1-.71-.29.95.95 0 0 1-.28-.7c0-.28.1-.52.28-.7l.88-.9ZM4 6v12-5 .07V6Zm8 5 8-5v2l-7.47 4.68a1 1 0 0 1-1.05 0L4 8V6l8 5Z"
            />
          </g>
        </svg>
      </a>
    </div>
  );
};

export default Contact;
