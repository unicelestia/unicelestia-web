import Image from "next/image"
import Link from "next/link"

interface MedicineBoxProps {
  tag: string
  tabName: string
  formula: string
  imgUrl: string
  link: string
}

export default function MedicineBox({
  tag,
  tabName,
  formula,
  imgUrl,
  link
}: MedicineBoxProps) {
  return (
    <div
      className={`w-full h-fit md:h-[450px] bg-gray-100 border-2 flex flex-col md:flex-row overflow-hidden rounded-xl`}
    >
      <div className=" w-full d:w-1/2 h-full  p-6 md:p-12 flex flex-col justify-center gap-3">
        <p
          className={` border-2 border-primaryOrange rounded-full w-fit px-3 py-1 text-sm text-primaryOrange  font-bold font-sans`}
        >
          {tag}
        </p>
        <h2 className="text-xl md:text-3xl text-black">{formula}</h2>
        <p className="text-xl font-semibold md:text-2xl">{tabName}</p>
        <div className="flex gap-2 flex-col md:flex-row">
          <Link href={link}>
            <button className="flex items-center justify-center space-x-2 rounded-md border-2 border-primaryBlue px-4 py-2 font-medium  transition w-fit bg-primaryBlue hover:bg-transparent text-white hover:text-primaryBlue">
              <span> Read More </span>
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

          <Link href={"tel:+918923165656"}>
            <button className="flex w-fit items-center justify-center space-x-2 max-w-1/2 rounded-md border-2 border-primaryOrange px-4 py-2 font-medium hover:text-primaryOrange transition bg-primaryOrange text-white hover:bg-transparent">
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
        </div>
      </div>
      <div className=" w-full md:w-1/2 h-full flex justify-center items-center  relative">
        <Image
          src={imgUrl}
          width={400}
          height={400}
          alt="tablets"
        />
      </div>
    </div>
  )
}
