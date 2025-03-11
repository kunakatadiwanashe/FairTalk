import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Aside = () => {
  return (
    <aside className="bg-gray-900 p-10 w-[25vw] h-[100vh] fixed">
      <div className="text-white text-2xl font-bold mb-8">FairTalk+</div>
      <nav className="space-y-4 flex flex-col">
        <div className="text-gray-400">Explore</div>

        <Link href="#">
          <div className="w-[30%] h-[10%]">
            <Image
              src="https://res.cloudinary.com/dyikkz1ur/image/upload/v1741687702/kun/log2_hxurlv.png"
              alt="Logo 2"
              width={100}
              height={100}
            />
          </div>
        </Link>

        <Link href="#">
          <div className="w-[30%] h-[10%]">
            <Image
              src="https://res.cloudinary.com/dyikkz1ur/image/upload/v1741687702/kun/log1_korrfp.png"
              alt="Logo 1"
              width={100}
              height={100}
            />
          </div>
        </Link>

        <Link href="#" className="text-yellow-500">Talk News</Link>
        <Link href="#" className="text-gray-400">Search</Link>
        <Link href="#" className="text-gray-400">My Content</Link>
        <Link href="#" className="text-gray-400">Settings</Link>
      </nav>
    </aside>
  )
}

export default Aside