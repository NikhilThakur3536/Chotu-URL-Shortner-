import { useState } from "react";

export function userFormInput(initialValues){
    const [inputs,setInputs]= useState(initialValues);
      function changeHandler(e){
        const {name,value}=e.target;
        setInputs((prev)=>({...prev,[name]:value}));
    }
    return {inputs,changeHandler,setInputs};
}