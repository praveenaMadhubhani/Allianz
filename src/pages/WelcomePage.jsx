import bgImage from "../assets/bgimage.png";
import { ButtonSuccess } from "../components/shared/Button";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate()

    const handleSignUp = () => { 
        navigate('/login')
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

                </div>

                <div className="flex flex-col mx-auto justify-center items-center h-full">
                    <div className="h-auto w-full sm:w-[450px] px-10 pt-20 py-32 bg-white bg-opacity-20 rounded-[30px] flex-col mx-auto">
                        <h1 className="text-white text-center text-[50px] font-bold font-montserrat">
                            Welcome
                        </h1>
                        <h1 className="text-white text-center text-[50px] font-bold font-montserrat">to</h1>
                        <h1 className="text-white text-center text-[50px] font-bold font-montserrat">
                            Virtual
                        </h1>
                        <h1 className="text-white text-center text-[50px] font-bold font-montserrat">
                            Assessor
                        </h1>
                        <div className=" mt-10 flex  flex-col items-center">
                            <ButtonSuccess onClick={handleSignUp}>
                                Sign Up
                            </ButtonSuccess>
                        </div>
                    </div>
                </div>

            </div>



        </div>




    );
};

export default WelcomePage;
