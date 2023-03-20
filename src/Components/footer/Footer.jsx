import React from 'react'
import "./style/footer.css"

export default function Footer() {
  return (
    <footer className='footer'>
        <div className="footerContent" id='content'>
            <div className="items">
                <div className="item">
                    <img src={require("../../img/LOGO.png")} alt="" />
                    <ul>
                        <li><a href={"#"}>Smart business</a></li>
                        <li><a href={"#"}>Community</a></li>
                    </ul>
                </div>
                <div className="item">
                    <h1>Resources</h1>
                    <ul>
                        <li><a href="#">Start Business</a></li>
                        <li><a href="#">Digital Marketing</a></li>
                        <li><a href="#">Course Creation</a></li>
                        <li><a href="#">Business Accelerator</a></li>
                    </ul>
                </div>
                <div className="item">
                    <h1>Mission</h1>
                    <ul>
                        <li><a href="#">About Digital Analyst</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Become a Partner</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="item">
                    <h1>Contact</h1>
                    <ul>
                        <li><a href="#">041-774073</a></li>
                        <li><a href="#">hello@digitalanalyst.org</a></li>
                        <li><a href="#">Contact Form</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}
