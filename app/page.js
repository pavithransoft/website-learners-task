"use client";

import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import top from "../assets/top.png";
import babycarriers from "../assets/babycarriers.png";
import babydiapers from "../assets/babydiapers.png";
import babyskincare from "../assets/babyskincare.png";
import bottlefeeding from "../assets/bottlefeeding.png";
import babymonitors from "../assets/babymonitors.png";
import babyteethers from "../assets/babyteethers.png";
import foodstainers from "../assets/foodstainers.png";
import kitchenknives from "../assets/kitchenknives.png";
import peelers from "../assets/peelers.png";
import { useState } from "react";

export default function Home() {
  const [subProduct, setSubProduct] = useState(false);
  const [subFind, setSubFind] = useState(false);
  const [subSearch, setSubSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="bg-background">
      <div className="sticky top-0 z-50 h-28 border-b backdrop-blur grid grid-cols-2 place-content-center bg-white">
        <span className="px-5 md:hidden relative">
          <AiOutlineMenu
            className="h-8 w-8 cursor-pointer justify-center"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </span>
        <h1 className="md:px-40 font-bold text-xl cursor-pointer">Logo</h1>
        <ul className="md:flex gap-10 font-medium justify-center hidden">
          <li className="cursor-pointer underline underline-offset-4 hover:underline hover:underline-offset-4">
            Home
          </li>
          <li className="cursor-pointer hover:underline hover:underline-offset-4">
            About Us
          </li>
          <li className="cursor-pointer hover:underline hover:underline-offset-4">
            Contact Us
          </li>
        </ul>
        {menuOpen && (
          <div className="absolute top-28 left-0 md:hidden h-96 w-72 border border-black bg-slate-200">
            <div className="bg-[#11B98F] p-5 text-white font-bold text-lg">
              Logo
            </div>
            <ul className="p-5 font-medium flex flex-col gap-3">
              <li className="cursor-pointer p-2 bg-white hover:text-white hover:bg-[#11B98F]">
                Home
              </li>
              <li className="cursor-pointer p-2 bg-white hover:text-white hover:bg-[#11B98F]">
                About Us
              </li>
              <li className="cursor-pointer p-2 bg-white hover:text-white hover:bg-[#11B98F]">
                Contact Us
              </li>
            </ul>
          </div>
        )}
      </div>
      <div
        className="bg-black h-96 opacity-90 relative"
        onClick={() => setMenuOpen(false)}
      >
        <Image
          src={top}
          width={500}
          height={500}
          alt="Baby Carriers"
          className="h-full w-full"
        />
        <div className="text-white text-3xl md:text-5xl font-semibold text-center absolute inset-x-0 inset-y-0 top-1/3">
          <h1>How to Create an Affiliate </h1>
          <h1 className="py-2">Marketing Website</h1>
        </div>
      </div>
      <section className="px-5 py-16 md:px-28 lg:px-32" onClick={() => setMenuOpen(false)}>
        <p className="text-xl text-[#2E3A5E]">
          Over the years, Affiliate marketing has become one of the most
          sought-after forms of making money online. More and more people are
          using affiliate marketing as a way to generate passive income over
          time.
        </p>
        <p className="text-xl text-[#2E3A5E] font-semibold pt-2 pb-5">
          Are you still thinking, Is affiliate marketing profitable?
        </p>
        <p className="text-xl text-[#2E3A5E] py-5">
          Around
          <span className="text-[#0DAA83] px-1">84% of content publishers</span>
          monetize their web traffic by leveraging affiliate marketing.
        </p>
        <p className="text-xl text-[#2E3A5E] pt-5 pb-20">
          Yeah! Affiliate marketing, when done correctly, is one of the best
          ways to earn revenue through your website. So, here is how you can
          create an affiliate marketing website on your own in 5 simple steps,
        </p>
        <p className="text-4xl font-semibold text-[#2E3A5E] pb-10">
          Steps at a Glance
        </p>
        <div className="rounded-t flex flex-col gap-5 pb-40">
          <div>
            <div
              className="bg-[#11B98F] h-16 rounded text-white font-medium flex justify-between items-center px-10 cursor-pointer"
              onClick={() => setSubProduct(!subProduct)}
            >
              <h1>Step 1 : Niche Products</h1>
              <IoIosArrowDown
                className={`${subProduct && "rotate-180"} duration-200`}
              />
            </div>
            <div
              className={`bg-slate-200 overflow-hidden ${
                subProduct ? "h-fit" : "h-0"
              }`}
            >
              <div className="px-5 md:px-16 py-5 lg:px-5 xl:px-16">
                <h1 className="font-bold text-lg py-8 border-b border-slate-300 text-[#2E3A5E]">
                  Baby Products
                </h1>
                <div className="py-16 grid lg:grid-cols-3 gap-10 lg:gap-5 xl:gap-10">
                  <div className="bg-white rounded-t-3xl rounded-b-3xl cursor-pointer shadow-md">
                    <Image
                      src={babycarriers}
                      width={500}
                      height={500}
                      alt="Baby Carriers"
                      className="rounded-t-3xl"
                    />
                    <h1 className="text-[#2E3A5E] text-xl font-bold p-6">
                      Baby Carriers
                    </h1>
                    <div className="text-[#8392A6] text-lg px-6 pb-10 rounded-b-3xl lg:text-base xl:text-lg">
                      Your little one was carried for 9 long months in the womb.
                      While that may sometimes have been a challenge for the
                      person doing...
                      <span className="font-semibold text-[#2E3A5E] px-2">
                        See More
                      </span>
                    </div>
                  </div>
                  <div className="bg-white rounded-t-3xl rounded-b-3xl cursor-pointer shadow-md">
                    <Image
                      src={babydiapers}
                      width={500}
                      height={500}
                      alt="Baby Diapers"
                      className="rounded-t-3xl"
                    />
                    <h1 className="text-[#2E3A5E] text-xl font-bold p-6">
                      Baby Diapers
                    </h1>
                    <div className="text-[#8392A6] text-lg px-6 pb-10 rounded-b-3xl lg:text-base xl:text-lg">
                      Diaper changing might seem complicated at first. But with
                      a little practice, you will find that keeping your baby
                      clean and dry is easy.
                    </div>
                  </div>
                  <div className="bg-white rounded-t-3xl rounded-b-3xl cursor-pointer shadow-md">
                    <Image
                      src={babyskincare}
                      width={500}
                      height={500}
                      alt="Baby Skin Care"
                      className="rounded-t-3xl"
                    />
                    <h1 className="text-[#2E3A5E] text-xl font-bold p-6">
                      Baby Skin Care
                    </h1>
                    <div className="text-[#8392A6] text-lg px-6 pb-10 rounded-b-3xl lg:text-base xl:text-lg">
                      Your new born skin is so sensitive. Do not worry - rashes
                      are common during babies first year. Learn how to keep
                      your babies skin...
                      <span className="font-semibold text-[#2E3A5E] px-2">
                        See More
                      </span>
                    </div>
                  </div>
                  <div className="bg-white rounded-t-3xl rounded-b-3xl cursor-pointer shadow-md">
                    <Image
                      src={bottlefeeding}
                      width={500}
                      height={500}
                      alt="Bottle Feeding"
                      className="rounded-t-3xl"
                    />
                    <h1 className="text-[#2E3A5E] text-xl font-bold p-6">
                      Bottle Feeding
                    </h1>
                    <div className="text-[#8392A6] text-lg px-6 pb-10 rounded-b-3xl lg:text-base xl:text-lg">
                      The practice of feeding an infant a substitute for breast
                      milk. Pediatricians generally advise exclusively
                      breastfeeding for all full-term, healthy infants for the
                      first 6 months of life.
                      <span className="font-semibold text-[#2E3A5E] px-2">
                        See More
                      </span>
                    </div>
                  </div>
                  <div className="bg-white rounded-t-3xl rounded-b-3xl cursor-pointer shadow-md">
                    <Image
                      src={babymonitors}
                      width={500}
                      height={500}
                      alt="Baby Monitors"
                      className="rounded-t-3xl"
                    />
                    <h1 className="text-[#2E3A5E] text-xl font-bold p-6">
                      Baby Monitors
                    </h1>
                    <div className="text-[#8392A6] text-lg px-6 pb-10 rounded-b-3xl lg:text-base xl:text-lg">
                      Electronic device consisting of a one-way radio or video
                      transmitter with a portable receiver for remotely
                      listening to or observing...
                      <span className="font-semibold text-[#2E3A5E] px-2">
                        See More
                      </span>
                    </div>
                  </div>
                  <div className="bg-white rounded-t-3xl rounded-b-3xl cursor-pointer shadow-md">
                    <Image
                      src={babyteethers}
                      width={500}
                      height={500}
                      alt="Baby Teethers"
                      className="rounded-t-3xl"
                    />
                    <h1 className="text-[#2E3A5E] text-xl font-bold p-6">
                      Baby Teethers
                    </h1>
                    <div className="text-[#8392A6] text-lg px-6 pb-10 rounded-b-3xl lg:text-base xl:text-lg">
                      A teether, teething toy, or chew toy is a device given to
                      teething infants. Most modern teethers are silicone, but
                      can also...
                      <span className="font-semibold text-[#2E3A5E] px-2">
                        See More
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-5 md:px-16 py-5 lg:px-5 xl:px-16">
                <h1 className="font-bold text-lg py-8 border-b border-slate-300">
                  Kitchen tools
                </h1>
                <div className="py-16 grid lg:grid-cols-3 gap-10 lg:gap-5 xl:gap-10">
                  <div className="bg-white rounded-t-3xl rounded-b-3xl cursor-pointer shadow-md">
                    <Image
                      src={foodstainers}
                      width={500}
                      height={500}
                      alt="Food Stainers"
                      className="rounded-t-3xl"
                    />
                    <h1 className="text-[#2E3A5E] text-xl font-bold p-6">
                      Food Stainers
                    </h1>
                    <div className="text-[#8392A6] text-lg px-6 pb-10 rounded-b-3xl lg:text-base xl:text-lg">
                      A kitchen device that is most used to strain liquids away
                      from other ingredients but also to ocassionally sift fine
                      ingredients...
                      <span className="font-semibold text-[#2E3A5E] px-2">
                        See More
                      </span>
                    </div>
                  </div>
                  <div className="bg-white rounded-t-3xl rounded-b-3xl cursor-pointer shadow-md">
                    <Image
                      src={kitchenknives}
                      width={500}
                      height={500}
                      alt="Kitchen Knives"
                      className="rounded-t-3xl"
                    />
                    <h1 className="text-[#2E3A5E] text-xl font-bold p-6">
                      Kitchen Knives
                    </h1>
                    <div className="text-[#8392A6] text-lg px-6 pb-10 rounded-b-3xl lg:text-base xl:text-lg">
                      A kitchen knife is any knife that is intended to be used
                      in food preparation. ... Kitchen knives can be made from
                      several different materials.
                    </div>
                  </div>
                  <div className="bg-white rounded-t-3xl rounded-b-3xl cursor-pointer shadow-md">
                    <Image
                      src={peelers}
                      width={500}
                      height={500}
                      alt="Peelers"
                      className="rounded-t-3xl"
                    />
                    <h1 className="text-[#2E3A5E] text-xl font-bold p-6">
                      Peelers
                    </h1>
                    <div className="text-[#8392A6] text-lg px-6 pb-10 rounded-b-3xl lg:text-base xl:text-lg">
                      A peeler is a kitchen tool consisting of a metal blade
                      with a slot with a sharp edge attached to a handle, used
                      to remove...
                      <span className="font-semibold text-[#2E3A5E] px-2">
                        See More
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[#11B98F] h-16 rounded text-white font-medium flex justify-between items-center px-10 cursor-pointer">
              <h1>Step 2 : Get Hosting & Domain</h1>
              <IoIosArrowDown />
            </div>
          </div>
          <div>
            <div
              className="bg-[#11B98F] h-16 rounded text-white font-medium flex justify-between items-center px-10 cursor-pointer"
              onClick={() => setSubFind(!subFind)}
            >
              <h1>Step 3 : Finding Keywords</h1>
              <IoIosArrowDown
                className={`${subFind && "rotate-180"} duration-200`}
              />
            </div>
            <div
              className={`bg-slate-200 overflow-hidden ${
                subFind ? "h-fit" : "h-0"
              }`}
            >
              <div className="px-5 py-5 md:px-5 lg:px-10 xl:px-16">
                <h1 className="font-bold text-lg py-8 text-[#2E3A5E]">
                  Tools to find keywords
                </h1>
                <div className="py-6">
                  <button className="px-8 py-3 rounded-lg bg-[#12AA84] text-white font-semibold shadow">
                    #1 Tool
                  </button>
                  <span className="text-[#2E3A5E] px-10 font-medium">
                    Keyword.io
                  </span>
                </div>
                <div className="lg:flex gap-16 pb-16 md:gap-0 lg:gap-5 xl:gap-16">
                  <div className="py-6 grid grid-cols-2 place-items-center">
                    <button className="px-8 py-3 rounded-lg bg-white border border-[#12AA84] text-[#12AA84] font-semibold shadow">
                      #2 Tool
                    </button>
                    <span className="text-[#2E3A5E] px-10 font-medium md:px-5 lg:px-10 whitespace-pre">
                      Keyword Sheeter
                    </span>
                  </div>
                  <div className="py-6 grid grid-cols-2 place-items-center">
                    <button className="px-8 py-3 rounded-lg bg-white border border-[#12AA84] text-[#12AA84] font-semibold shadow">
                      #2 Tool
                    </button>
                    <span className="text-[#2E3A5E] px-10 font-medium md:px-5 lg:px-10 whitespace-pre">
                      Keyword Sheeter
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className="bg-[#11B98F] h-16 rounded text-white font-medium flex justify-between items-center px-10 cursor-pointer"
              onClick={() => setSubSearch(!subSearch)}
            >
              <h1>Step 4 : Find Number of Searches</h1>
              <IoIosArrowDown
                className={`${subSearch && "rotate-180"} duration-200`}
              />
            </div>
            <div
              className={`bg-slate-200 overflow-hidden ${
                subSearch ? "h-fit" : "h-0"
              }`}
            >
              <div className="px-5 py-5 md:px-5 lg:px-10 xl:px-16">
                <h1 className="font-bold text-lg py-8 text-[#2E3A5E]">
                  Tools to get Search Volume
                </h1>
                <div className="py-6">
                  <button className="px-8 py-3 rounded-lg bg-[#12AA84] text-white font-semibold shadow">
                    #1 Tool
                  </button>
                  <span className="text-[#2E3A5E] px-10 font-medium">
                    SemScoop
                  </span>
                </div>
                <div className="lg:flex gap-16 pb-16 md:gap-0 lg:gap-5 xl:gap-16">
                  <div className="py-6 grid grid-cols-2 place-items-center">
                    <button className="px-8 py-3 rounded-lg bg-white border border-[#12AA84] text-[#12AA84] font-semibold shadow">
                      #2 Tool
                    </button>
                    <span className="text-[#2E3A5E] px-10 font-medium md:px-5 lg:px-10">
                      LinkGraph
                    </span>
                  </div>
                  <div className="py-6 grid grid-cols-2 place-items-center">
                    <button className="px-8 py-3 rounded-lg bg-white border border-[#12AA84] text-[#12AA84] font-semibold shadow">
                      #2 Tool
                    </button>
                    <span className="text-[#2E3A5E] px-10 font-medium md:px-5 lg:px-10">
                      SearchVolume.io
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
