import React from 'react'

export default function Education() {
  return (
    <div>
        <section id="education" className="py-20 px-6 md:px-20 text-center">
        <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-bold text-white mb-12 animate-fade-in-up">My Education</h2>
        <div  className=" max-w-3xl mx-auto space-y-8">
          {/* Existing BCA Entry */}
          <div className=" rounded-xl p-8 shadow-lg transition-all duration-300 border-1 hover:scale-[1.01] hover:bg transform">
            <div data-aos="fade-up" className="  flex flex-col md:flex-row justify-between items-center mb-4">
              <h3 data-aos="fade-up" className="text-3xl font-bold text-blue-600 mb-2 md:mb-0">Bachelor of Computer Applications (BCA)</h3>
              <p data-aos="fade-up" className="text-gray-400 text-lg"> 2021-2024</p>
            </div>
            <p  data-aos="fade-up" className="text-gray-300 text-xl mb-2">Mangalore University, Field Marshal K M Cariappa College</p>
            <p data-aos="fade-up" className="text-gray-400 text-lg">Specialization in Computer Science and Applications</p>
          </div>

          {/* New PUC Entry */}
          <div className="border-1 rounded-xl p-8 shadow-lg transition-all duration-300 hover:scale-[1.01]  transform">
            <div data-aos="fade-up" className="flex flex-col md:flex-row justify-between items-center mb-4">
              <h3 className="text-3xl font-bold text-blue-600 mb-2 md:mb-0  md:mx-auto">Pre Univercity College in GEBA (PUC)</h3>
              <p className="text-gray-400 text-lg">2019 - 2021</p>
            </div>
            <p data-aos="fade-up" className="text-gray-300 text-xl mb-2">Aruna P U College,Kodagu </p>
            <p  data-aos="fade-up" className="text-gray-400 text-lg">Pre University Course (Geography, Economics, Business Studies, Accountancy)</p>
          </div>
        </div>
      </section>
    </div>
  )
}
