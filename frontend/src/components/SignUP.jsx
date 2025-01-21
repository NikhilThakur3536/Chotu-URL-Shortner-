import { InputFields } from './InputFields.jsx';
import user from '../assets/User.png';
import email from '../assets/email.png';
import pass from '../assets/pass.png';
import { useNavigate } from 'react-router-dom';
import { useSignup } from '../hooks/userSignup.jsx';
import { userFormInput } from '../hooks/userFormInput.jsx';
import { LeftBgSection } from './LeftBgSection.jsx';

export function SignUp() {
    const navigate = useNavigate();
    const { signup, isLoading } = useSignup();
    const { inputs, changeHandler } = userFormInput({ email: "", password: "", username: "" });

    const handleSignUp = async () => {
        try {
            console.log("Inputs before signup:", inputs);
            const userData = await signup(inputs.email, inputs.password, inputs.username);
            // console.log('User data after signup:', JSON.stringify(userData));
            navigate('/login'); // Redirect to login page after successful signup
        } catch (error) {
            console.error('Sign Up failed:', error);
        }
    };

    return (
        <div className="grid justify-items-center items-center h-screen overflow-hidden">
            {/* Background */}
            <div className="bg-[#020617] flex h-screen w-screen relative">
                <LeftBgSection/>
                {/* <div className='flex justify-center items-center content-center'>
                    <div className=' absolute left-52 blur-md transform translate-y-[20%] h-96 w-96 rounded-full bg-purple-300 z-0'></div>
                    <div className='absolute left-0 pl-8 pb-4'>
                        <img src={BgAnalytics}/>
                    </div>
                    <div className=' absolute z-10 pl-8 pb-4 left-0'>
                        <img src={BgUrl} /> 
                    </div>
                </div> */}
                
                {/* Gradient Animated Background */}
                {/* <div className="absolute top-0 right-0 h-full w-1/2 z-0 ">
                    <GradientAnimatedBg />
                </div>
                 */}
                {/* Signup Form */}
                <div className="absolute z-10 h-screen w-1/2 flex flex-col ml-10 right-0">
                    <h1 className="text-6xl text-yellow-200 font-extrabold font-poppins mt-28 ml-12">Sign Up</h1>
                    <hr className="color-slate-200 w-3/4 ml-12 mt-4" />
                    <h2 className="font-poppins font-normal text-2xl text-white ml-12 mt-10">Username</h2>
                    <InputFields image={user} text="Enter Your Username" type="text" value={inputs.username} name="username" onChange={changeHandler} />
                    <h2 className="font-poppins font-normal text-2xl text-white ml-12 mt-10">E-mail</h2>
                    <InputFields image={email} text="Enter Your E-mail" type="email" value={inputs.email} name="email" onChange={changeHandler} />
                    <h2 className="font-poppins font-normal text-2xl text-white ml-12 mt-10">Password</h2>
                    <InputFields image={pass} text="Enter Your Password" type="password" value={inputs.password} name="password" onChange={changeHandler} />
                    <p className='text-sm text-white font-poppins ml-12 mt-2'>
                        If you already have an account, 
                        <span className='cursor-pointer underline text-blue-500' onClick={() => navigate("/login")}>Login</span> here
                    </p>
                    <div className="flex ml-64 mt-8">
                        {isLoading ? (
                            <button className="bg-blue-800  rounded-xl text-white text-2xl w-1/3 pt-2 pb-2 hover:bg-gradient-to-r from-[#221aa6] to-[#f028ba]" onClick={handleSignUp}>
                                SIGNING
                            </button>
                        ) : (
                            <button className="bg-blue-800  rounded-xl text-white text-2xl w-1/3 pt-2 pb-2 hover:bg-gradient-to-r from-[#221aa6] to-[#f028ba]" onClick={handleSignUp}>
                                SIGNUP
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
