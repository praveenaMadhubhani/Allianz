import React from 'react'
import { ButtonSuccess } from '../components/shared/Button'
import { useNavigate } from "react-router-dom";


function DamageDetails() {
  const navigate = useNavigate()

    const texts = [
        { value: '1', text: 'Front and Rear Bumpers'},
        { value: '2', text: 'Hood and Truck Lid'},       

    ];

    const handleNext = () => {
       
        navigate('/payable')
      }

      const handleBack = () => {
       
        navigate('/damage-area')
      }
    return (
        <div className="bg-[#061a3b] w-full h-full sm:h-screen py-2 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-0 w-full h-full">
                <div className="flex flex-col mx-auto justify-center items-center h-full">
                    <div>
                        <h1 className="text-[55px] font-bold text-white text-left font-montserrat">
                            <span className="underline underline-offset-[20px]">Your</span>{" "}
                            Vehicle
                        </h1>
                        <h1 className="text-white text-[28px] text-left font-montserrat mt-4">
                            Its Precious, Thats Why Allian
                        </h1>
                    </div>
                </div>

                <div className="flex flex-col mx-auto justify-center items-center h-full px-2">
                    <div className="h-auto w-full sm:w-[450px] px-10 pt-20 pb-10 bg-white bg-opacity-20 rounded-[30px] flex-col mx-auto ">
                        <h1 className="text-white text-center text-[40px] font-bold font-montserrat">
                            Damage Details
                        </h1>
                        <div className='bg-[#182052] mt-5 rounded-[40px] px-10 py-12 h-[30vh] sm:h-[20vh] mx-2 '>
                            <ul className='space-y-4 list-disc text-white'>
                                {texts.map((text, index) => (
                                    <li key={index} className='text-white font-bold text-lg'>
                                        {text.text} 
                                    </li>
                                ))}
                            </ul>
                        </div>


                        <div className=" mt-6 flex flex-col items-center">
                            <ButtonSuccess onClick={handleNext}>Next</ButtonSuccess>
                        </div>
                        <div className=" mt-6 flex flex-col items-center">
                            <ButtonSuccess onClick={handleBack}>Back</ButtonSuccess>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DamageDetails
