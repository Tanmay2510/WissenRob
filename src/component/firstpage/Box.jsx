import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom';

import "./Box.css";
import {CForm,CFormLabel,CFormInput,CButton} from "@coreui/react"
import newim from "../icon/mr.svg";
export var emailname="";
function Box() {
    const navigate = useNavigate();
    const [email,setemail] = useState("");
    const hangchange = (e) => {
        setemail(e.target.value);  
    }
    const handleSubmit = (e) =>{
        emailname=email;
        e.preventDefault();
        navigate("/Second");
    }
    console.log(email);
  return (
    <div className='Boxcont'>
    <div className='box'>
    <img src = {newim} alt="email"></img>
    <CForm className='boxin' onSubmit={handleSubmit}>
    <CFormLabel  className="tex" htmlFor="exampleFormControlInput1">
    Hey, user enter your email for verification :)
    </CFormLabel>
    <CFormInput type="email"  
    value={email} 
    onChange={hangchange}
    className="inppp"
    id="exampleFormControlInput1" 
    placeholder="name@example.com" 
    aria-describedby="exampleFormControlInputHelpInline" />
    <div className="d-grid gap-2">
    <CButton className="but" type="submit" color="info" size='lg' variant="ghost">Proceed</CButton>
</div>
  </CForm>
    </div>
    
    
    </div>
  )
}

export default Box