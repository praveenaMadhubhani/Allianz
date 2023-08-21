import { useState } from "react";
import { ButtonSuccess, ButtonNormal } from "../components/shared/Button";
import { useNavigate } from "react-router-dom";


const VerificationPage = () => {
  const [numberOne, setNumberOne] = useState()
  const [numberTwo, setNumberTwo] = useState()
  const [numberThree, setNumberThree] = useState()
  const [numberFour, setNumberFour] = useState()
  const [numberFive, setNumberFive] = useState()
  const [numberSix, setNumberSix] = useState()
  const navigate = useNavigate()


  const handleSubmit = () => {
    console.log(numberOne, numberTwo, numberThree, numberFour, numberFive, numberSix)
    navigate('/vehicle')


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
        </div>

        <div className="flex flex-col mx-auto justify-center items-center h-full px-2">
          <div className="h-auto w-full sm:w-[450px] px-10 pt-20 py-32 bg-white bg-opacity-20 rounded-[30px] flex-col mx-auto">
            <h1 className="text-white text-center text-[40px] font-bold font-montserrat">
              Verification
            </h1>
            <h1 className="text-white text-[23px] font-bold font-montserrat ml-4 mt-8">
              Enter the OTP Number
            </h1>
            <div className="mt-5 w-full grid grid-cols-6 gap-2 rounded-full bg-gray-50 bg-opacity-50 px-10 py-2">
              <div>
                <input
                  type="text"
                  maxLength={1}
                  className="w-full h-10 text-2xl  bg-[#D9D9D9AB]  text-center "
                  onChange={(e) => setNumberOne(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  maxLength={1}
                  className="w-full h-10 text-2xl  bg-[#D9D9D9AB]  text-center "
                  onChange={(e) => setNumberTwo(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  maxLength={1}
                  className="w-full h-10 text-2xl  bg-[#D9D9D9AB]  text-center "
                  onChange={(e) => setNumberThree(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  maxLength={1}
                  className="w-full h-10 text-2xl  bg-[#D9D9D9AB]  text-center "
                  onChange={(e) => setNumberFour(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  maxLength={1}
                  className="w-full h-10 text-2xl  bg-[#D9D9D9AB]  text-center "
                  onChange={(e) => setNumberFive(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  maxLength={1}
                  className="w-full h-10 text-2xl  bg-[#D9D9D9AB]  text-center "
                  onChange={(e) => setNumberSix(e.target.value)}
                />
              </div>
            </div>
            <div className=" mt-10 flex flex-col items-center">
              <ButtonSuccess>Resend</ButtonSuccess>
            </div>
            <div className="mt-4 flex flex-col items-center">
              {numberOne === "" || numberTwo === "" || numberThree === "" || numberFour === "" || numberFive === "" || numberSix === "" ? (
                <ButtonNormal onClick={handleSubmit} disabled={true}>Submit</ButtonNormal>
              ) : (
                <ButtonSuccess onClick={handleSubmit} >Submit</ButtonSuccess>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default VerificationPage;