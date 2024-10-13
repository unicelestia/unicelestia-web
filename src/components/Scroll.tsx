import { Pill, PillBottle, Syringe, Tablets } from "lucide-react"

const LOGOS = [
  <Pill key={"1"} width={26} height={26} className="text-gray-400" />,
  <h1 key={2} className="font-bold text-2xl text-gray-400">
    UNICELESTIA
  </h1>,
  <Syringe key={"1"} width={26} height={26} className="text-gray-400" />,
  <h1 key={2} className="font-bold text-2xl text-gray-400">
    UNICELESTIA
  </h1>,
  <Tablets key={"1"} width={26} height={26} className="text-gray-400" />,
  <h1 key={2} className="font-bold text-2xl text-gray-400">
    UNICELESTIA
  </h1>,
  <PillBottle key={"1"} width={26} height={26} className="text-gray-400" />,
  <h1 key={2} className="font-bold text-2xl text-gray-400">
    UNICELESTIA
  </h1>,
  <Pill key={"1"} width={26} height={26} className="text-gray-400" />,
  <h1 key={2} className="font-bold text-2xl text-gray-400">
    UNICELESTIA
  </h1>,
  <Syringe key={"1"} width={26} height={26} className="text-gray-400" />,
  <h1 key={2} className="font-bold text-2xl text-gray-400">
    UNICELESTIA
  </h1>,
  <Tablets key={"1"} width={26} height={26} className="text-gray-400" />,
  <h1 key={2} className="font-bold text-2xl text-gray-400">
    UNICELESTIA
  </h1>,
  <PillBottle key={"1"} width={26} height={26} className="text-gray-400" />,
  <h1 key={2} className="font-bold text-2xl text-gray-400">
    UNICELESTIA
  </h1>
]

export const InfiniteSlider = () => {
  return (
    <div className="relative m-auto w-full overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
      <div className="animate-infinite-slider flex w-[calc(250px*10)] h-32 gap-24">
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-[125px] items-center justify-center text-gray-700"
            key={index}
          >
            {logo}
          </div>
        ))}
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-[125px] items-center justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  )
}
