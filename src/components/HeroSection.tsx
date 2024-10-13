import React from "react"
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision"
import Link from "next/link"

export function HeroSection() {
  return (
    <BackgroundBeamsWithCollision className="justify-center flex flex-col py-10 md:py-4 md:h-[calc(100vh-64px)]">
      <section className="w-full" id="home">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <Link
            href="#products"
            className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm rounded-full bg-gray-50 hover:bg-gray-100 border-2"
            role="alert"
          >
            <span className="text-xs bg-primaryOrange rounded-full text-white px-4 py-1.5 mr-3">
              Unicelestia
            </span>{" "}
            <span className="text-xs md:text-sm font-medium">
              Discover Our Product
            </span>
            <svg
              className="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Your Trusted Partner in Delivering Pharmaceutical Excellence
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Ensuring the Highest Standards of Quality, Safety, and Efficacy in
            Every Product We Develop, Committed to Delivering Optimal Patient
            Outcomes Through Rigorous Testing and Comprehensive Support.
          </p>
          <div className="flex flex-col justify-center items-center mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link
              href={"tel:+918923165656"}
              target="_blank"
              className="w-full sm:w-fit"
            >
              <button className="flex w-full items-center justify-center space-x-2 sm:max-w-1/2 rounded-md border-2 border-primaryOrange px-4 py-2 font-medium hover:text-primaryOrange transition bg-primaryOrange text-white hover:bg-transparent">
                <span>Request for price</span>
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

            <Link
              href="https://wa.link/xvi9ss"
              target="_blank"
              className="w-full sm:w-fit"
            >
              <button className="flex w-full  items-center justify-center space-x-2 rounded-md border-2 border-primaryBlue px-4 py-2 font-medium  transition bg-primaryBlue hover:bg-transparent text-white hover:text-primaryBlue">
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
      </section>
    </BackgroundBeamsWithCollision>
  )
}
