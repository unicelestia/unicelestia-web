export interface MyButtonsProps {
  title: string
  bgColor?: "primaryOrange" | "primaryBlue"
  btnStyles?: string
}

export default function MyButtons(data: MyButtonsProps) {
  return (
    <button
      className={`px-6 md:px-8 rounded-lg py-3  w-fit text-white  font-semibold text-base md:text-lg bg-${data.bgColor} ${data.btnStyles}
      `}
    >
      {data.title}
    </button>
  )
}
