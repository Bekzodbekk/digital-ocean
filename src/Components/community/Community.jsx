import React from 'react'
import "./style/community.css"

export default function Community() {
  return (
    <div className='communityContainer'>
        <div className="comContent" id='content'>
        <div className="communityimg">
            <img src={require("../../img/firstimg.png")} alt="firstimg" />
        </div>
        <div className="communityText">
            <h2 className='title'>community</h2>
            <h1 className='head'>Platform Dedicated To Promoting</h1>
            <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum sagittis ultrices  consectetur adipiscing elit. fringilla quisque pulvinar..</p>
            <div className="combtn">
                <a href={"#"}>What we do?</a>
            </div>
        </div>
        </div>
    </div>
  )
}
