import React from 'react'

function Hero() {
  return (
    <div>
      <section className="dark:bg-blue-950 dark:text-gray-100">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            
			<img src="https://ik.imagekit.io/aq3ybtarw/landing/mobile-landing.webp?updatedAt=1680626119244" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-[600px]" />
		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-full lg:text-left">
			<h1 className="text-5xl font-bold leading-9 tracking-wider sm:text-6xl">Gauge Water Purifier
            <br/><span className="dark:text-red-400">Puts An End </span>
                <span className="dark:text-white">To RO Service</span>
                <br/>Pain
                <p className="mt-6 mb-8 text-lg sm:mb-12">Fully automatic water purifier provides the highest water savings while ensuring a <br/> seamless service experience.


				
			</p>
			</h1>

			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded-full dark:bg-blue-500 dark:text-white">Take a Product Tour</a>

			</div>
            <p className="mt-6 mb-8 text-lg sm:mb-12"><br/>Experience Convenience Like Never Before With Our Smart Water Purifier</p>

		</div>
	</div>
</section>
    </div>
  )
}

export default Hero
