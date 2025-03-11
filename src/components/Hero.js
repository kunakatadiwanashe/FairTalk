import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Primedia Highlights</h1>
      <div className="flex space-x-4 mb-8">
        <div className="bg-gray-800 p-4 flex-1">
          <Image 
            src="https://cdn.pixabay.com/photo/2022/08/15/15/18/radio-7388139_640.jpg" 
            alt="Primedia Cares logo" 
            className="w-full h-48 object-cover mb-4" 
            width={640} 
            height={480} 
          />
          <button className="bg-gray-700 text-white py-2 px-4 rounded">Learn more</button>
        </div>
        <div className="bg-gray-800 p-4 flex-1">
          <Image 
            src="https://cdn.pixabay.com/photo/2022/08/15/15/18/radio-7388139_640.jpg" 
            alt="The Arts Primedia+ banner" 
            className="w-full h-48 object-cover mb-4" 
            width={640} 
            height={480} 
          />
          <button className="bg-gray-700 text-white py-2 px-4 rounded">Learn more</button>
        </div>
      </div>
      <h2 className="text-lg font-bold mb-4">Just In On Primedia+</h2>
      <div className="flex space-x-4 overflow-x-auto">
        <div className="bg-gray-800 p-4 flex-none w-64">
          <Image 
            src="https://cdn.pixabay.com/photo/2022/08/15/15/18/radio-7388139_640.jpg" 
            alt="Protest image" 
            className="w-full h-24 object-cover mb-2" 
            width={640} 
            height={480} 
          />
          <p className="text-sm">11/03/2025, 11:06</p>
          <p className="text-sm font-bold">Workers unite for a &apos;people&apos;s budget&apos;: Unions plan mass protests ahead of delayed Budget Speech</p>
        </div>
        <div className="bg-gray-800 p-4 flex-none w-64">
          <Image 
            src="https://cdn.pixabay.com/photo/2022/08/15/15/18/radio-7388139_640.jpg" 
            alt="Nothemba Madumo on Jazz and Beyond" 
            className="w-full h-24 object-cover mb-2" 
            width={640} 
            height={480} 
          />
          <p className="text-sm">11/03/2025, 10:39</p>
          <p className="text-sm font-bold">PLAYLIST: Have a good time with Nothemba Madumo on &apos;Jazz and Beyond&apos;</p>
        </div>
        <div className="bg-gray-800 p-4 flex-none w-64">
          <Image 
            src="https://cdn.pixabay.com/photo/2022/08/15/15/18/radio-7388139_640.jpg" 
            alt="Jazz Festival logo" 
            className="w-full h-24 object-cover mb-2" 
            width={640} 
            height={480} 
          />
          <p className="text-sm">11/03/2025, 10:30</p>
          <p className="text-sm font-bold">Inaugural Namib Desert Jazz Festival and Jazz Cruise coming this month!</p>
        </div>
        <div className="bg-gray-800 p-4 flex-none w-64">
          <Image 
            src="https://cdn.pixabay.com/photo/2022/08/15/15/18/radio-7388139_640.jpg" 
            alt="Person holding stomach" 
            className="w-full h-24 object-cover mb-2" 
            width={640} 
            height={480} 
          />
          <p className="text-sm">11/03/2025, 09:49</p>
          <p className="text-sm font-bold">&apos;Gastro surge season&apos; coming at this time of year - Professor Mignon McCulloch</p>
        </div>
      </div>
    </div>
  )
}

export default Hero