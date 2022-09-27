import React from 'react'
import sv from '../icon/icon.svg';
import {CNavbar,CContainer,CNavbarBrand} from "@coreui/react"
function head() {
  return (
    <div>
    <header >
    <CNavbar colorScheme="light" className="bg-light">
<CContainer fluid>
  <CNavbarBrand href="/">Navbar</CNavbarBrand>
  <CNavbarBrand >
  <img src={sv} alt="Globe" style={{marginRight:"1vw"}}></img>
  <strong>esri</strong>
  </CNavbarBrand>
</CContainer>
</CNavbar>
    </header>
    
    </div>
  )
}

export default head