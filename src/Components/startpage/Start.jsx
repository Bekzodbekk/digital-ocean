import React from 'react'
import "./style/start.css"

export default function Start() {
  return (
    <div className='startContainer'>
        <div className="startContent" id='content'>
            <div className="startText">
                <h3 className="title">Smart Business</h3>
                <h1 className="head">Connecting people is our <span>business</span></h1>
                <p className="paragraph">As a rule the organization settles on the inventive and media choices. Regularly it supplies supporting statistical.</p>

                <div className="startBtns">
                    <a className='background' href={"#"}>Get Started </a>
                    <a className='noBackground' href={"#"}>
                        <img src={require("../../img/play.png")} alt="play" />
                        Play Vedio
                    </a>
                </div>
            </div>
            <img className='team' src={require("../../img/teamImg.png")} alt="teamImg" />
        </div>
    </div>
  )
}
