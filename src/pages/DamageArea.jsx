import React from 'react'
import { ButtonSuccess } from '../components/shared/Button'
import { useState } from 'react';
import { MdAddPhotoAlternate, MdAddAPhoto } from "react-icons/md";
import { useNavigate } from "react-router-dom";


function DamageArea() {
    const [selectedImages, setSelectedImages] = useState([]);
    const navigate = useNavigate()


    const handleImageChange = (event) => {
        setSelectedImages([...selectedImages, ...event.target.files]);
    };

    const handleUpload = () => {
        console.log(selectedImages)
    }

    const handleCameraChange = () => {

    }

    const handleNext = () => {
        navigate('/damage-details')
    }

    return (
        <div className="bg-[#061a3b] w-full h-full sm:h-screen py-2">
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
                            Damage Area
                        </h1>
                        <div className='flex justify-between sm:mx-20 mt-10'>
                            <div className='flex flex-col items-center '>
                               
                                <label
                                    htmlFor="fileInput"
                                    className="w-16 h-16 bg-[#D9D9D9] text-center flex justify-center items-center cursor-pointer"
                                >
                                    <MdAddAPhoto size="2x" />
                                    <input
                                        id="fileInput"
                                        type="file"
                                        capture="environment"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={handleCameraChange}
                                    />
                                </label>
                                <h1 className='text-[18px] font-montserrat text-white font-bold mt-4'>Capture</h1>
                                <h1 className='text-[18px] font-montserrat text-white font-bold'>Image</h1>

                            </div>
                            <div className='flex flex-col items-center '>

                                <label
                                    htmlFor="filepc"
                                    className="w-16 h-16 bg-[#D9D9D9] text-center flex justify-center items-center cursor-pointer"
                                >
                                    <MdAddPhotoAlternate size="2x" />
                                    <input
                                        id="filepc"
                                        type="file"
                                        className="hidden"
                                        onChange={handleImageChange}
                                    />
                                </label>
                                
                                <h1 className='text-[18px] font-montserrat text-white font-bold mt-4'>Upload_From
                                </h1>
                                <h1 className='text-[18px] font-montserrat text-white font-bold'>Device</h1>
                            </div>
                        </div>

                        <div className='flex gap-2'>
                            {selectedImages.slice(0,4).map((image, index) => (
                                <img key={index} src={URL.createObjectURL(image)} alt={`Uploaded ${index}`} className='w-14 h-14 sm:w-20 sm:h-20 object-cover' />
                            ))}
                        </div>


                        <div className=" mt-6 flex flex-col items-center">
                            <ButtonSuccess onClick={handleUpload}>Upload Photo</ButtonSuccess>
                        </div>
                        <div className=" mt-6 flex flex-col items-center">
                            <ButtonSuccess>Vertual Assesor</ButtonSuccess>
                        </div>
                        <div className=" mt-6 flex flex-col items-center">
                            <ButtonSuccess onClick={handleNext}>Next</ButtonSuccess>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DamageArea
