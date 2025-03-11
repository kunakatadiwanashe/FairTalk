import React from 'react'


const Banner = () => {
  return (
    <div>
      








      <div className="flex h-screen">






                    <main className="flex-1 p-4">
                        <div className="flex justify-start space-x-4 mb-8">
                            <button className="bg-gray-700 text-white px-4 py-2 rounded">All</button>
                            <button className="bg-gray-700 text-white px-4 py-2 rounded">Video</button>
                            <button className="bg-gray-700 text-white px-4 py-2 rounded">Audio</button>
                        </div>
                        <div className="flex space-x-4 overflow-x-auto mb-8">
                            <div className="w-64 h-96 bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2021/03/29/22/23/woman-6135442_640.jpg')" }}>
                                <div className="bg-black bg-opacity-50 p-4 rounded-lg">
                                    <div className="text-white text-lg font-bold">Live Coverage</div>
                                    <div className="text-white">Tuesday, 11th March 2025, 16:00 SAST</div>
                                </div>
                            </div>
                            <div className="w-64 h-96 bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2021/03/29/22/23/woman-6135442_640.jpg')" }}></div>
                            <div className="w-64 h-96 bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2021/03/29/22/23/woman-6135442_640.jpg')" }}></div>
                        </div>
                        <div>
                            <div className="text-white text-lg font-bold mb-4">Listen Live</div>
                            <div className="flex space-x-4 ">
                                <div className="w-64 h-75 bg-blue-800 rounded-lg p-4">
                                    <img src="https://cdn.pixabay.com/photo/2021/03/29/22/23/woman-6135442_640.jpg" alt="The Clement Manyathela Show" className="w-full h-40 object-cover rounded-lg mb-4 object-top" />
                                    <div className="text-white">The Clement Manyathela Show</div>
                                    <div className="text-red-600">702</div>
                                </div>
                                <div className="w-64 h-75 bg-pink-500 rounded-lg p-4">
                                    <img src="https://cdn.pixabay.com/photo/2021/03/29/22/23/woman-6135442_640.jpg" alt="Mo Flava on 947" className="w-full h-40 object-cover rounded-lg mb-4 object-top" />
                                    <div className="text-white">Mo Flava on 947</div>
                                    <div className="text-pink-500">947</div>
                                </div>
                                <div className="w-64 h-75 bg-gray-700 rounded-lg p-4">
                                    <img src="https://cdn.pixabay.com/photo/2021/03/29/22/23/woman-6135442_640.jpg" alt="Views and News with Clarence Ford" className="w-full h-40 object-cover rounded-lg mb-4 object-top" />
                                    <div className="text-white">Views and News with Clarence Ford</div>
                                    <div className="text-yellow-500">cape talk</div>
                                </div>
                                <div className="w-64 h-75 bg-red-600 rounded-lg p-4">
                                    <img src="https://cdn.pixabay.com/photo/2021/03/29/22/23/woman-6135442_640.jpg" alt="Mid-Mornings with Tracey Lange" className="w-full h-40 object-cover rounded-lg mb-4 object-top" />
                                    <div className="text-white">Mid-Mornings with Tracey Lange</div>
                                    <div className="text-red-600">kfm</div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
       












    </div>
  )
}

export default Banner
