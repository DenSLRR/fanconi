import React from 'react'
import './loader.css'
import logo from '../assets/fcfinal.png'






const Loader = () => {
  return (
    <div>
        <div className="loader">
            <div className="laoder__wrapper">
                <img src={logo} alt="logo" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle fill="#00ADDD" stroke="#00ADDD" stroke-width="7" r="15" cx="40" cy="100"><animate attributeName="opacity" calcMode="spline" dur="1.2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle><circle fill="#00ADDD" stroke="#00ADDD" stroke-width="7" r="15" cx="100" cy="100"><animate attributeName="opacity" calcMode="spline" dur="1.2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle><circle fill="#00ADDD" stroke="#00ADDD" stroke-width="7" r="15" cx="160" cy="100"><animate attributeName="opacity" calcMode="spline" dur="1.2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle></svg>
            </div>
        </div>
    </div>
        
    
  )
}

export default Loader