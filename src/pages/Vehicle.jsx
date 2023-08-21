import { ButtonSuccess } from "../components/shared/Button";
import DropDown from "../components/shared/DropDown";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Vehicle = () => {
    const options = [
        { value: 'Honda Civic', label: 'Honda Civic' },
        { value: 'Toyota Aqua', label: 'Toyota Aqua' },
        { value: 'Honda Vezel', label: 'Honda Vezel' },
        { value: 'suzuki Swift', label: 'suzuki Swift' },
        { value: 'Honda Every', label: 'Honda Every' },
        { value: 'Honda Alto', label: 'Honda Alto' },

    ];

    const [selectedValue, setSelectedValue] = useState('');
  const navigate = useNavigate()


    const handleDropdownChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const hadleNext = () => {
  console.log(selectedValue)
  navigate('/vehicle-details')

    }

    return (
        <div className="bg-[#061a3b] w-full h-full sm:h-screen py-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full">
                <div className="flex flex-col mx-auto justify-center items-center h-full">
                    <div>
                    {selectedValue? (
                        <h1 className="text-[55px] font-bold text-white text-left font-montserrat">
                        {selectedValue}
                    </h1>
                        ) : (
                    <h1 className="text-[55px] font-bold text-white text-left font-montserrat">
                            <span className="underline underline-offset-[20px]">Your</span>{" "}
                            Vehicle
                        </h1>
                        )}
                        
                        <h1 className="text-white text-[28px] text-left font-montserrat mt-4">
                            Its Precious, Thats Why Allian
                        </h1>
                    </div>
                </div>

                <div className="flex flex-col mx-auto justify-center items-center h-full px-2">
                    <div className="h-auto w-full sm:w-[450px] px-10 pt-20 py-32 bg-white bg-opacity-20 rounded-[30px] flex-col mx-auto ">
                        <h1 className="text-white text-center text-[40px] font-bold font-montserrat">
                            Vehicle
                        </h1>
                        <h1 className="text-white text-[23px] font-bold font-montserrat ml-4 mt-8">
                            SELECT VEHICLE
                        </h1>
                        <div className="mt-5 w-full  rounded-full bg-gray-50 bg-opacity-50 px-10 py-2">
                            <DropDown includeDefault={true} options={options} onChange={handleDropdownChange} value={selectedValue}/>
                        </div>
                        <div className=" mt-10 flex flex-col items-center">
                            <ButtonSuccess onClick={hadleNext}>Next</ButtonSuccess>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Vehicle;