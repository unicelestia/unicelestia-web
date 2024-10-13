import { HeroSection } from "@/components/HeroSection"
import MedicineBox from "@/components/MedicineBox"
import { InfiniteSlider } from "@/components/Scroll"
import { medicineBoxData } from "@/lib/constant"
import { Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <InfiniteSlider />
      {/* Medicine Box Section */}
      <div
        id="products"
        className="flex gap-2 items-center w-full justify-center mt-28 flex-col"
      >
        <h2 className=" text-4xl md:text-6xl text-center font-bold ">
          Our Products
        </h2>
        <p className="max-w-[500px] text-center">
          At the heart of our mission lies a diverse range of innovative
          products designed to enhance your everyday life.
        </p>
      </div>
      <div className="flex flex-col gap-8 mt-20 px-4 md:px-20 ">
        {medicineBoxData.map((data, i) => {
          return (
            <MedicineBox
              key={i}
              formula={data.formula}
              imgUrl={data.imgUrl}
              tabName={data.tabName}
              tag={data.tag}
              link={data.link}
            />
          )
        })}
      </div>

      <div className="w-full mx-auto py-20 my-20  bg-primaryBlue text-white px-4 bg-gradient-to-b from-primaryBlue to-primaryBlueHover">
        <div className="flex mx-auto flex-col w-full lg:w-1/2 justify-center items-center gap-6">
          <div>
            <h2 className="font-semibold text-2xl md:text-5xl text-center">
              Get the Best Price on
            </h2>
            <h2 className="font-semibold text-2xl md:text-5xl text-center">
              Our Products!
            </h2>
          </div>
          <p className="text-center max-w-[650px]">
            {`Are you looking for competitive pricing on top-quality pharmaceutical products? We’re here to help! Reach out today to request personalized pricing tailored to your needs. Don't miss out on the best deals available!`}
          </p>
          <div className="flex gap-6 flex-wrap justify-center items-center">
            <Link href="tel:+918923165656">
              <button className="flex items-center justify-center space-x-2 rounded-md border-2 border-primaryOrange px-4 py-2 font-medium transition bg-primaryOrange text-white">
                <span>
                  <Phone size={20} strokeWidth={1.5} />
                </span>
                <span> Request a Quote </span>
              </button>
            </Link>

            <Link href="mailto:ucpharmaltd@gmail" target="_blank">
              <button className="flex items-center justify-center space-x-2 rounded-md border-2 border-green-500 px-4 py-2 font-medium transition bg-green-500 hover:text-white">
                <span>
                  <Mail size={20} strokeWidth={1.5} />
                </span>
                <span> Email Us </span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      
    </div>
  )
}
