import React from 'react'
import hone from '../assets/Help/helpOne.png'
import htwo from '../assets/Help/helpTwo.png'
import hthree from '../assets/Help/helpThree.png'
import hfour from '../assets/Help/helpFour.png'


function HelpPage() {
    return (
        <div className="bg-[#061a3b] w-full h-full sm:h-screen  p-[32px]">
            <div className="py-20 bg-white bg-opacity-20 rounded-[30px] w-full h-[95vh]  px-[150px] lg:px-[180px] xl:px-[220px] space-y-8 overflow-y-auto">

                <div className='grid grid-cols-1 gap-2 lg:gap-0 lg:grid-cols-3 '>
                    <div className=' w-full h-auto'>
                        <img
                            src={hone}
                            alt="hone"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className='col-span-2  lg:ml-40 flex items-center'>
                        <div >
                            <h1 className='text-[23px] font-bold'> 
                            Please enter the OTP number you received.
                            </h1>
                            <h1 className='text-[23px] font-bold'> 
                            If  you dose not received it, please touch resend button
                            </h1>
                        </div>
                        
                    </div>
                    
                </div>

                <div className='grid grid-cols-1 gap-2 lg:gap-0 lg:grid-cols-3 '>
                    <div className=' w-full h-auto'>
                        <img
                            src={htwo}
                            alt="hone"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className='col-span-2  lg:ml-40 flex items-center'>
                        <div >
                            <h1 className='text-[23px] font-bold'> 
                            Please select your vehicle from the list. 
                            </h1>
                        </div>
                        
                    </div>
                </div>

                <div className='grid grid-cols-1 gap-2 lg:gap-0 lg:grid-cols-3 '>
                    <div className=' w-full h-auto'>
                        <img
                            src={hthree}
                            alt="hone"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className='col-span-2  lg:ml-40 flex items-center'>
                        <div >
                            <h1 className='text-[23px] font-bold'> 
                            Please enter Your email address. 
                            </h1>
                            <h1 className='text-[23px] font-bold'> 
                            If there dosen’t apear other details please contact our call center
                            </h1>
                        </div>
                        
                    </div>
                </div>

                <div className='grid grid-cols-1 gap-2 lg:gap-0 lg:grid-cols-3 '>
                    <div className=' w-full h-auto'>
                        <img
                            src={hfour}
                            alt="hone"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className='col-span-2  lg:ml-40 flex items-center'>
                        <div >
                            <h1 className='text-[23px] font-bold'> 
                            Please enter four photos from each damage part. 
                            </h1>
                            <h1 className='text-[23px] font-bold'> 
                            for each damage you need to upload four photos
                            </h1>
                        </div>
                        
                    </div>
                </div>



            </div>
        </div>
    )
}

export default HelpPage
