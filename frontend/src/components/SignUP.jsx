import { InputFields } from './InputFields.jsx';
import { GradientBG } from './GradientBG.jsx';
import user from '../assets/User.png';
import email from '../assets/email.png';
import pass from '../assets/pass.png';
import { useNavigate } from 'react-router-dom';
import { userSignup } from '../hooks/userSignup.jsx';
import { userFormInput } from '../hooks/userFormInput.jsx';
export function SignUp(){
    const navigate=useNavigate();
    const { signup, isLoading} = userSignup();
    const {inputs,changeHandler}=userFormInput({email:"", password:"", username:""})
    
    const handleSignUp = async () => {
        try {
            console.log("Inputs before signup:", inputs);
            const userData = await signup(inputs.email, inputs.password, inputs.username);
            console.log('User data after signup:', JSON.stringify(userData));
            navigate('/login'); // Redirect to login page after successful signup
        } catch (error) {
            console.error('Sign Up failed:', error);
        }
    };
    
    return(
        <div className="grid justify-items-center items-center h-screen overflow-hidden">
            <div className="bg-[#020617] flex h-screen w-screen">
                <GradientBG/>
                <div className="h-screen w-1/2 flex flex-col ml-10">
                    <h1 className="text-6xl text-white font-extrabold font-poppins mt-28 ml-12">Sign Up</h1>
                    <hr className="color-slate-200 w-3/4 ml-12 mt-4"/>
                    <h2 className="font-poppins font-normal text-2xl text-white ml-12 mt-10" >Username</h2>
                    <InputFields image={user} text="Enter Your Username" type="text" value={inputs.username} name="username" onChange={changeHandler}/>
                    <h2 className="font-poppins font-normal text-2xl text-white ml-12 mt-10" >E-mail</h2>
                    <InputFields image={email} text="Enter Your E-mail" type="email" value={inputs.email} name="email" onChange={changeHandler}/>
                    <h2 className="font-poppins font-normal text-2xl text-white ml-12 mt-10">Password</h2>
                    <InputFields image={pass} text="Enter Your Password" type="password"  value={inputs.password} name="password" onChange={changeHandler}/>
                    <p className='text-sm text-white font-poppins ml-12 mt-2'>If you already have an account, <span className=' cursor-pointer underline text-blue-500' onClick={()=>navigate("/login")}>Login</span > here</p>
                    <div className="flex ml-64 mt-8">
                        {isLoading?(<button className="bg-gradient-to-r from-[#221aa6] to-[#f028ba] rounded-xl text-white text-2xl w-1/3 pt-2 pb-2" onClick={handleSignUp}>SIGNING</button>):(<button className="bg-gradient-to-r from-[#221aa6] to-[#f028ba] rounded-xl text-white text-2xl w-1/3 pt-2 pb-2" onClick={handleSignUp}>SIGNUP</button>)}
                    </div>  
                </div>
            </div>
        </div>
    )
};
