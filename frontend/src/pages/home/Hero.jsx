import React from "react";

function Hero() {
  return (
    <div>
      <section className="relative bg-[url(https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen  lg:items-center lg:px-8">
          <div className="max-w-xl text-center">
            <h1 className="text-3xl font-extrabold text-teal-400 sm:text-5xl">
              Let's Earn More
              <strong className="block font-extrabold text-yellow-400">
                Farm To Table
              </strong>
            </h1>
            <p className="mt-10 text-white">
              Sell your harvest directly and earn more profit without
              intermediaries. Connect directly with consumers who value fresh,
              locally grown produce. Set competitive prices, increase your
              profit margins, and showcase the quality of your harvest. Choose
              from various sales options and join a community of like-minded
              farmers. Take control of your farm's success today!
            </p>

            <div className="mt-8 flex flex-wrap gap-4  text-center">
              <a
                href="oder"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
