import React from "react";
import Maincompany from "../../component/maincompany";

function Emptystate() {
    return (
        <div>
            <section>
                <Maincompany />
            </section>
            <section className='w-full p-8 bg-[#0F2C59]'>
              <div className="container mx-auto">
                <div className="">
                    <button className="bg-[#F9F7F7] font-poppins px-4 py-2 rounded mb-5 md:mb-0">Post Job</button>
                    <div className="flex items-center justify-center">
                        <img src="assets/emptystate.png" className="w-[5rem] h-[5rem] md:w-[15rem] md:h-[15rem]" alt="Profile" />
                    </div>
                </div>
                <div className="container mx-auto bg-white mt-5">
                  <div className="flex flex-col items-center gap-10">
                    <p className="text-xl text-bold mt-5 text-center md:text-left md:text-4xl">Kamu belum membuka lapangan pekerjaan Yuk buka sekarang!</p>
                    <div className="mb-5 text-center md:text-left">
                      <button className="bg-[#0F2C59] text-white font-poppins px-4 py-2 rounded">Post Job</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        </div>
    );
};

export default Emptystate;
