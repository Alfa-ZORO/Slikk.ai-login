import React from 'react'
import './login.css'
import TickSvg from '../../assets/images/Hapto-icon.svg'
import Form from '../form/Form'
import Navabar from '../navbar/Navabar'

const Login = () => {
    return (
        <div>
            <Navabar />
            <div className='container'>
                <div className="halfCircle">
                    <div className='images'>
                        <img className='contentImage' src={TickSvg} alt="" />
                    </div>
                    <div className="dotsContent">
                        {Array.from({ length: 8 }, (_, rowIndex) => (
                            <div className="row" key={rowIndex}>
                                {Array.from({ length: 15 }, (_, colIndex) => (
                                    <div className='circle'key={colIndex} />
                                ))}
                            </div>
                        ))}
                    </div>
                    <Form />
                </div>
            </div>
        </div>
        // <div className='container'>

        //     <div className="halfCircle">
        //         <Form />
        //         <div className='images'>
        //             <img className='contentImage' src={TickSvg} alt="" />
        //         </div>
        //         <div className="dotsContent">
        //             {Array.from({ length: 8 }, (_, rowIndex) => (
        //                 <div className="row" key={rowIndex}>
        //                     {Array.from({ length: 15 }, (_, colIndex) => (
        //                         <div className='circle' />
        //                     ))}
        //                 </div>
        //             ))}
        //         </div>
        //     </div>

        // </div>
    )
}

export default Login