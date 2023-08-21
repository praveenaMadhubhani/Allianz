import React from 'react'
import { ButtonSuccess } from '../components/shared/Button'
import TextInput from '../components/shared/TextInput'
import DropDown from '../components/shared/DropDown'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";


function Payable() {
    const options = [
        { value: '1', label: '25000' },
        { value: '2', label: '30000' },
        { value: '3', label: '35000' },
        { value: '4', label: '40000' },

    ];

    const [selectedValue, setSelectedValue] = useState('');
    const [total, setTotal] = useState('');
    const [damageAmount, setDamageAmount] = useState('');
    const [damagePercentage, setDamagePercentage] = useState('');
    const navigate = useNavigate()



    const handleDropdownChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleBack =  () => {
        navigate('/damage-details')
    }

    return (
        <div className="bg-[#061a3b] w-full h-full sm:h-screen py-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-0  w-full h-full">
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
                    <div className='flex flex-col sm:flex-row gap-10 mt-20'>
                        <ButtonSuccess onClick={handleBack}>Back</ButtonSuccess>
                        <ButtonSuccess>Next</ButtonSuccess>
                    </div>
                </div>

                <div className="flex flex-col mx-auto justify-center items-center h-full px-2">
                    <div className="h-auto w-full sm:w-[450px] px-10 py-20 bg-white bg-opacity-20 rounded-[30px] flex-col mx-auto space-y-4 ">

                        <TextInput  label="Damge Type Precentage" onChange={(e)=>setDamagePercentage(e.target.value)} readOnly/>
                        <TextInput  label="Amount For Damage" onChange={(e)=>setDamageAmount(e.target.value)} readOnly/>
                        <TextInput  label="Total Cost" onChange={(e)=>setTotal(e.target.value)} readOnly/>

                        <div>
                            <label className={`text-[18px] ml-4 font-bold font-montserrat text-white`}>
                                Garage Price List
                            </label>
                            <div className="mt-[8px] w-full  rounded-full bg-gray-50 bg-opacity-50 px-10 py-2">
                            <DropDown includeDefault={true} options={options} onChange={handleDropdownChange} value={selectedValue} />
                        </div>
                        </div>
                        

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payable
