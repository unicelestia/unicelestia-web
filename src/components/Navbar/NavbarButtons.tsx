import Link from "next/link"

export const NavbarButtons = () => {
  return (
    <>
      <Link href={"tel:+918923165656"}>
        <button className="flex items-center justify-center space-x-2 rounded-md border-2 border-primaryOrange px-6 md:px-4 py-2 md:py-1 font-medium text-primaryOrange transition hover:bg-primaryOrange hover:text-white">
          <span> Call Now </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path
                fillRule="evenodd"
                d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
      </Link>
      <Link href="https://wa.link/xvi9ss" target="_blank">
        <button className="flex items-center justify-center space-x-2 rounded-md border-2 border-primaryBlue px-6 md:px-4 py-2 md:py-1 font-medium text-primaryBlue transition hover:bg-primaryBlue hover:text-white">
          <span> Whatsapp </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path
                fillRule="evenodd"
                d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
      </Link>
    </>
  )
}
