import React from 'react'
import { emailname } from '../firstpage/Box'
import Head from '../firstpage/head';
import err from "../icon/mail.svg";
import "./Sec.css"
import {CForm,CFormLabel,CButton, CFormText} from "@coreui/react"
import { useNavigate } from 'react-router-dom';
function Sec() {
console.log(emailname);
const navigate = useNavigate();
const navig = () =>{
      navigate("/Third");
}
  return (
    <div>
    <Head />
    <div className='Boxcont'>
    <div className='box'>
    <CForm className='boxin'  onSubmit={navig}>
    <img src={err} alt="error email"></img>
    <CFormLabel  className="tex" htmlFor="exampleFormControlInput1">
    Your email has not been verified
    </CFormLabel>
    <CFormText className='text-dark'>Send a verification email to {emailname} </CFormText>
    <div className="d-grid gap-2">
    <CButton className="butt" type="submit"  color="info" size='lg' variant="ghost">
    Send Verification Email</CButton>
    </div>
    <a href="/">Skip for Now  &gt; </a>

  </CForm>
    </div>
    
    
    </div>
    
    </div>
  )
}

export default Sec