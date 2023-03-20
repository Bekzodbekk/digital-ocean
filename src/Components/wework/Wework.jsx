import React from 'react'
import "./style/wework.css"
import { items } from '../export'

export default function Wework() {
  return (
    <div className='workContainer'>
        <div className="workContent" id='content'>
            <h1 className='head'>How We Work</h1>
            <div className="workitems">
                {
                    items.map((item, key) => (
                        <div key={key} className="workItem">
                            <img src={require(`../../img/${item.img}`)} alt="itemImg" />
                            <div className="itemText">
                                <h1 className='head'>{item.name}</h1>
                                <p className='paragraph'>{item.title}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
