import React from 'react'
import "./style/subscribe.css"

export default function Subscribe() {
    return (
        <div className='subscribeContainer'>
            <div className="subscribeContent">
                <h1>Sign Up to Our Newsletter</h1>
                <h3>Yours could be one of them.</h3>
                <div className="subsinput">
                    <i className="fa-regular fa-envelope"></i>
                    <input type="text" placeholder='Enter Your Email' />
                    <a href={"/"} className="btn">Send</a>
                </div>
            </div>
        </div>
    )
}
