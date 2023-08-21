import { ButtonNormal, ButtonSuccess } from "../components/shared/Button";
import TextInput from "../components/shared/TextInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [inputError, setInputError] = useState(false)
  const [idNumber, setIdNumber] = useState('')
  const navigate = useNavigate()

  

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setIdNumber(newValue);
    

    if (newValue.length >= 10 && newValue.length <= 12) {
        setInputError(false);
    } else {
        setInputError(true);
    }
    
};

const handleSignin = () => {
  console.log(idNumber)
  navigate('/verification')
}

  return (
    <div className="bg-[#061a3b] w-full h-full sm:h-screen py-2">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-0 w-full h-full ">
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
          <div className=" w-full sm:w-[450px] px-10 pt-20 py-32 bg-white bg-opacity-20 rounded-[30px] flex-col mx-auto ">
            <h1 className="text-white text-center text-[40px] font-bold font-montserrat">
              Login
            </h1>
            <h1 className="text-white text-[25px] font-bold font-montserrat ml-4 mt-8">
              NIC Number
            </h1>
            <div className="mt-5">
              <TextInput max={5} placeholder="-Insert your NIC Number -" error={inputError} errorMessage="NIC number must be 10 or 12 characters"  onChange={handleInputChange} />
            </div>
            
            <div className="mt-2 flex flex-col items-center">
              {idNumber.length==10 || idNumber.length==12 ? (<ButtonSuccess onClick={handleSignin} >Sign In</ButtonSuccess>) : (<ButtonNormal onClick={handleSignin} disabled={true}>Sign In</ButtonNormal>)}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;
