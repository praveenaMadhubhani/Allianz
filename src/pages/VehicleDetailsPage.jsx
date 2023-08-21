import React from 'react'
import { ButtonDanger, ButtonSuccess } from '../components/shared/Button'
import TextInput from "../components/shared/TextInput";
import { useNavigate } from "react-router-dom";



function VehicleDetailsPage() {
    const navigate = useNavigate()

    const handlePrevious = () => {

        navigate('/vehicle')
    }

    const handleClaim = () => {

        navigate('/damage-area')
    }

    const handleHelp = () => {

        navigate('/help')
    }

    return (
        <div className="bg-[#061a3b] w-full h-full sm:h-screen py-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-0 w-full h-full">
                <div className="flex flex-col mx-auto justify-center items-center h-full ">
                    <div>
                        <h1 className="text-[55px] font-bold text-white text-left font-montserrat">
                            <span className="underline underline-offset-[20px]">Your</span>{" "}
                            Vehicle
                        </h1>
                        <h1 className="text-white text-[28px] text-left font-montserrat mt-4">
                            Its Precious, Thats Why Allian
                        </h1>
                    </div>
                    <div className='flex flex-col xl:flex-row gap-6 mt-20'>
                        <ButtonSuccess onClick={handlePrevious}>PREVIOUS</ButtonSuccess>
                        <ButtonSuccess onClick={handleClaim}>Claim</ButtonSuccess>
                        <ButtonDanger onClick={handleHelp}>Help</ButtonDanger>

                    </div>
                </div>

                <div className="flex flex-col mx-auto justify-center items-center h-full">
                    <div className='text-[40px] text-white font-montserrat font-bold '>Details</div>
                    <div className="h-auto w-full sm:w-[450px] px-10 py-8 bg-white bg-opacity-20 rounded-[30px] flex-col mx-auto space-y-4 mt-5">

                        <TextInput label="CUSTOMER NAME" readOnly />
                        <TextInput placeholder="-Insert your Email Address-" label="EMAIL ADDRESS" />
                        <TextInput label="INSURANCE NUMBER" readOnly/>
                        <TextInput label="INSURANCE PERIOD" readOnly/>
                        <TextInput label="ENGINE NUMBER" readOnly/>
                        <TextInput label="VEHICLE NUMBER" readOnly/>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default VehicleDetailsPage
