"use client"
import { products } from "@/lib/constant"
import { MessageSquare, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Product({ productName }: { productName: string }) {
  const product = products.find((prod) => prod.link === `/${productName}`)

  if (!product) {
    return (
      <section className="bg-white dark:bg-gray-900 h-[calc(100vh-64px)] flex justify-center items-center">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-8 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
              Opps!
            </h1>
            <p className="mb-6 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              Product Not Found
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              {`Sorry, we can't find that product. You'll find lots to explore on the
            home page.`}{" "}
            </p>
            <Link
              href="/#products"
              className="inline-flex bg-primaryOrange text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
            >
              See All Products
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <div className="bg-white w-full">
      <div
        id="products"
        className="flex gap-2 items-center w-full justify-center mt-2 rounded-3xl   p-2 md:py-12 flex-col"
      >
        <h2 className=" text-4xl md:text-6xl text-center font-bold ">
          Product Details
        </h2>
        <p className="max-w-[500px] text-center">
          Overview of active components, dosage recommendations, and potential
          side effects.
        </p>
      </div>
      <div className="pt-6 w-full mt-4 border-t-2 rounded-t-3xl">
        <nav aria-label="Breadcrumb">
          <ol className="mx-auto flex w-full  justify-center items-center space-x-2 px-4 sm:px-6  lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <Link
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </Link>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="w-full flex justify-center flex-col items-center bg-gray-100 py-12 rounded-3xl mt-20">
          <Image
            alt={product.name}
            src={product.images}
            width={800}
            height={800}
            //responsive
          />
          <Image
            alt={product.name}
            src={product.productImg}
            className="px-12"
            width={700}
            height={600}
            //responsive
          />
        </div>

        <div className="mx-auto mt-28 sm:max-w-[60%] px-2">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mt-10">
            {product.name}
          </h1>
          {/* Description and details */}
          <div className="mt-10">
            <h3 className="text-lg font-bold text-gray-900">Description:</h3>
            <p className="text-gray-900">{product.description}</p>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-bold text-gray-900">
              Key Ingredients:
            </h3>
            <div className="w-full py-8 flex justify-center flex-col items-center relative bg-gray-100 px-10 py-12 rounded-3xl mt-10">
              <Image
                src={product.compImage}
                alt={product.name}
                height={800}
                className="rounded-3xl"
                width={600}
              />
            </div>
            {/* <ul role="list" className="list-disc space-y-2 pl-4 mt-10">
              {product.ingredients.map((ingredients) => (
                <li key={ingredients} className="text-gray-400">
                  <span className="text-gray-600">{ingredients}</span>
                </li>
              ))}
            </ul> */}
          </div>
          <div className="mt-10">
            <h3 className="font-bold text-lg text-gray-900">Indications:</h3>
            <ul role="list" className="list-disc space-y-2 pl-4">
              {product.indications.map((indications, i) => (
                <li key={i} className="text-gray-400">
                  <span className="text-gray-600">{indications}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10">
            <h3 className="font-bold text-lg text-gray-900">Dosage:</h3>
            <ul role="list" className="list-disc space-y-2 pl-4">
              {product.dosage.map((dosage, i) => (
                <li key={i} className="text-gray-400">
                  <span className="text-gray-600">
                    {" "}
                    <span className="font-bold">{dosage.age}:</span>{" "}
                    {dosage.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mt-10">
              Side Effects:
            </h3>
            <p className="text-gray-900">{product.sideEffect}</p>
          </div>

          <div className="mt-10">
            <h3 className="font-bold text-lg text-gray-900">Precautions:</h3>
            <ul role="list" className="list-disc space-y-2 pl-4">
              {product.precautions.map((precautions, i) => (
                <li key={i} className="text-gray-400">
                  <span className="text-gray-600">{precautions}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10">
            <p className="text-gray-600">
              <span className="font-bold text-black">Storage: </span>
              Store in a cool, dry place away from direct sunlight. Keep out of
              reach of children.
            </p>
          </div>
          <div className="mt-10">
            <h2 className="text-lg font-bold  text-gray-900">Conclusion:</h2>
            <p className="text-gray-600">{product.conclusion}</p>
          </div>
          <div className="flex gap-6 md:flex-row flex-col flex-wrap justify-center items-center mt-10 ">
            <Link href="tel:+918923165656" className="w-full md:w-[40%]">
              <button className="flex items-center w-full justify-center space-x-2 rounded-md border-2 border-primaryOrange px-2 py-4 font-medium transition bg-primaryOrange text-white">
                <span>
                  <Phone size={20} strokeWidth={1.5} />
                </span>
                <span> Request a Quote </span>
              </button>
            </Link>

            <Link
              href="mailto:ucpharmaltd@gmail"
              target="_blank"
              className="w-full md:w-[40%]"
            >
              <button className="flex items-center w-full justify-center space-x-2 rounded-md border-2 border-green-500 px-2 py-4 font-medium transition bg-green-500 text-white">
                <span>
                  <MessageSquare size={20} strokeWidth={1.5} />
                </span>
                <span>WhatsApp</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
