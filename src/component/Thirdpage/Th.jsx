import React from 'react'
import plane from "../icon/plane.svg"
import {CForm,CFormLabel,CFormInput,CButton,CFormText} from "@coreui/react"
import "./Th.css"
import Head from '../firstpage/head'
function Th() {
  return (
    <div>
    <Head />
    <div className='Boxcont'>
    <div className='box'>
    <img src = {plane} alt="email"></img>
    <CForm className='boxin' >
    <CFormLabel  className="tex" htmlFor="exampleFormControlInput1">
    An email has been sent to you
    </CFormLabel>
    <CFormText className='text-dark'>Check the email that's associated with your account for the verification code. </CFormText>
    <div className='inb'>
    <p> Verification Code</p>
    <CFormInput type="email"  
    id="exampleFormControlInput1" 
    placeholder="Code" 
    aria-describedby="exampleFormControlInputHelpInline" />
    <div className="d-grid gap-2">
    <CButton className="bu" type="submit" color="info" size='lg' variant="ghost">Verify</CButton>
    <a href="/Second">Send me another code  </a>
    </div>
    </div>
    <a href="/">Skip for Now  &gt; </a>
  </CForm>
    </div>
    </div>
    </div>
  )
}

export default Th