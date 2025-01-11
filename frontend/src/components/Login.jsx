import pass from '../assets/pass.png';
import email from '../assets/email.png'
import { InputFields } from './InputFields';
import { GradientBG } from './GradientBG';
import { useNavigate } from 'react-router-dom';
import { userFormInput } from '../hooks/userFormInput';
import { userLogin } from '../hooks/userLogin';
export function Login(){
    const navigate=useNavigate();
    const {login}= userLogin();
    const {inputs,changeHandler}= userFormInput({email:"", password:""})
    
    
    const handleLogin= async()=>{
        try{
            console.log(inputs);
            const token= await login(inputs.email,inputs.password)
            console.log(token);
            localStorage.setItem("token", token);
            if (token) {
                localStorage.setItem("token", token);
                navigate('/home');
              } else {
                console.error('No token received');
              }
            navigate('/home');
        }catch(error){
            console.error('Login failed:');
        }
    }


    return(
        <div className=" grid justify-items-center items-center h-screen overflow-hidden">
            <div className=" bg-[#020617] flex h-screen w-screen ">
                <GradientBG/>
                <div  className=" h-screen w-1/2 flex flex-col ml-10">
                    <h1 className='text-6xl text-white font-extrabold font-poppins mt-28 ml-12 '>Log In</h1> 
                    <hr className='color-slate-200 w-3/4 ml-12 mt-4'></hr>   
                    <h2 className='font-poppins font-normal text-2xl text-white ml-12  mt-10'>E-mail</h2>
                    <InputFields image={email} text={"Enter Your E-mail"} name={"email"} type="email" value={inputs.email} onChange={changeHandler}/>
                    <h2 className='font-poppins font-normal text-2xl text-white ml-12 mt-10' >Password</h2>
                    <InputFields image={pass} text={"Enter Your Password"}  onChange={changeHandler} name={"password"} value={inputs.password} type="password"/>
                    <p>New user, <span className='cursor-pointer underline text-blue-500' onClick={()=>navigate("/signup")}>SignUp</span>here.</p>
                    <div className='flex ml-64 mt-12'>
                    <button className='bg-gradient-to-r from-[#221aa6] to-[#f028ba] rounded-xl text-white text-2xl w-1/3 pt-2 pb-2' onClick={handleLogin}>LOG IN</button>
                    </div>
                </div>

            </div>
           
        </div>
)}