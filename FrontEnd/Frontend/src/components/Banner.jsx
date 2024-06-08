import React from "react";
import banner from "../../public/Banner.png";
function Banner() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-7">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-5">
            <h1 className="text-2xl md:text-4xl font-bold">
              <span className="text-pink-500">ନମସ୍ନାର</span>, welcoming you to the ODIA book repository{" "}
              
            </h1>
            <p className="text-sm md:text-xl">
            ଓଡ଼ିଆ ପୁସ୍ତକ ଅର୍ଡରିଂ ୱେବସାଇଟ୍ ମାଧ୍ୟମରେ ଆପଣ ଉପନ୍ୟାସ, କବିତା, ଏବଂ ଅନ୍ୟାନ୍ୟ ଓଡ଼ିଆ ସାହିତ୍ୟକୁ ସହଜରେ କିଣିପାରିବେ। ଗୁଣସ୍ତର ଓ ତ୍ୱରିତ ବିତରଣ।
            </p>
            <label className="input input-bordered flex items-center gap-2 dark:border-white-1 dark:text-slate-950">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow dark:text-black" placeholder="Email" />
            </label>
          </div>
          <button className="btn mt-6 btn-secondary dark:bg-pink-500 dark:border-none  dark:text-white dark:hover:bg-pink-800 dark:hover:text-white">Get Started</button>
        </div>
        <div className=" order-1 w-full mt-20 md:w-1/2">
          <img
            src={banner}
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
