import React from "react";

function Feature() {
  return (
    <div>
      <section class="bg-white dark:bg-white">
        <div class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-96 lg:flex-row lg:items-center my-12">
          <div class="w-full lg:w-full">
            <div class="lg:max-w-screen-full">
              <h1 class="text-3xl  text-gray-800 dark:text-black lg:text-4xl">
                Take Control
                <br />
              </h1>
              <h1 class="text-3xl  text-gray-800 dark:text-red-500 lg:text-4xl">
                Monitor Usage & Change Filters
              </h1>
              <br />
              <h1 class="text-3xl   text-gray-800 dark:text-black lg:text-4xl -mt-6">
                No Technician Needed
              </h1>
              <p className="mx-2 mt-6">
                We have crafted a product that addresses the real frustrations
                of a customer. The first step is to ensure there are zero
                service delays.
              </p>

              <div class="mt-8 space-y-5">
                <p class="flex items-center -mx-2 text-gray-700 dark:text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 mx-2 text-green-300"
                    fill="full"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <span class="mx-2 font-bold">
                    Smart Water Purifier With Self Servicing Capability
                  </span>
                </p>
                <p className="mx-2">
                  Say goodbye to the hassle of scheduling a technician for
                  purifier maintenance with our self-replacing filters.
                </p>

                <p class="flex items-center -mx-2 text-gray-700 dark:text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 mx-2 text-green-300"
                    fill="full"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <span class="mx-2 font-bold">
                    Compensation For Service Delays
                  </span>
                </p>
                <p className="mx-2">
                  You are entitled to a compensation of 100 Rs/Day if service is
                  delayed for more than 24 hours.
                </p>
              </div>
            </div>

            <div class="w-full mt-8  rounded-md lg:max-w-screen-lg dark:border-gray-700 focus-within:border-blue-600 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-400 focus-within:ring-opacity-40">
              <form class="flex flex-col lg:flex-row justify-center items-center text-center">
                <button
                  type="button"
                  class="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-blue-500 rounded-full hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
                >
                  Next:Smart Water Conservation
                </button>
              </form>
            </div>
          </div>

          <div class="flex items-center justify-center w-full h-[600px] lg:w-1/2 my-64 pl-8">
            <img
              class="object-cover w-[1200px] h-[750px] mx-auto rounded-md lg:max-w-2xl"
              src="https://ik.imagekit.io/aq3ybtarw/landing/water-lg.webp?updatedAt=1684088939335"
              alt="glasses photo"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Feature;
