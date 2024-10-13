import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
        <div className="max-w-sm mx-auto md:mx-0 text-center md:text-left">
          <div className="mb-6 flex h-12 items-center justify-center md:justify-between space-x-2">
            <Image
              alt="logo"
              src={"/images/full-logo.png"}
              width={150}
              height={20}
            />
          </div>
          <div className="text-gray-500">
            Dedicated to advancing healthcare through the development of
            innovative and high-quality pharmaceutical products.
          </div>
        </div>
        <div className="text-center md:text-left">
          <div className="mt-4 mb-2 font-medium xl:mb-4">Address</div>
          <div className="text-gray-500">
            26/4 Tilpat, Amarnagar <br />
            Faridabad, <br />
            Haryana 121003, IN
          </div>
          <div className="mt-4 mb-2 font-medium xl:mb-4">Email</div>
          <div className="text-gray-500">
            <Link href={"mailto:ucpharmaltd@gmail.com"}>
              ucpharmaltd@gmail.com
            </Link>
          </div>
        </div>
        <div className="text-center md:text-left">
          <div className="mt-4 mb-2 font-medium xl:mb-4">Products</div>
          <nav aria-label="Footer Navigation" className="text-gray-500">
            <ul className="space-y-3">
              <li>
                <Link
                  className="hover:text-blue-600 hover:underline"
                  href="/products/medicine-name"
                >
                  Rostro-DSR
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-blue-600 hover:underline"
                  href="/products/medicine-name"
                >
                  Mirazef-S
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-blue-600 hover:underline"
                  href="/products/medicine-name"
                >
                  Tedflam SP
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-blue-600 hover:underline"
                  href="/products/medicine-name"
                >
                  ATP Gold Tablet
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-blue-600 hover:underline"
                  href="/products/medicine-name"
                >
                  ATP Gold Syrup
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="text-center md:text-left">
          <div className="mt-4 mb-2 font-medium xl:mb-4">Request for price</div>
          <div className="flex flex-col">
            <div className="mb-4 flex gap-4 flex-wrap justify-center md:justify-start">
              <Link href={"tel:+918923165656"}>
                <button className="flex items-center justify-center space-x-2 rounded-md border-2 border-primaryOrange px-4 py-2 font-medium text-primaryOrange transition hover:bg-primaryOrange hover:text-white">
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
              <Link href={"https://wa.link/xvi9ss"}>
                <button className="flex items-center justify-center space-x-2 rounded-md border-2 border-primaryBlue px-4 py-2 font-medium text-primaryBlue transition hover:bg-primaryBlue hover:text-white">
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
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:flex-row sm:justify-between sm:text-left">
          <div className="">© 2024 Unicelestia | All Rights Reserved</div>
          <div className="">
            <Link href="#">Privacy Policy </Link>
            <span>|</span>
            <Link href="#"> Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
