import React from 'react'
import './ProjectStyle.css'
import { Link } from 'react-router-dom'
import Room from './Room'

export default function Home(props) {
    return (
        <div>
            <p>Home</p>
            <div className='rooms'>


                {
                    props.roomArr.map((val, index) => {
                        return <Room openTheRightRoom={props.openTheRightRoom} type={val.type} name={val.name} color={val.color} index={index} />
                    })
                }
            </div><br />
            <Link to='/addroom'><button className='btn'>+</button></Link>
        </div>
    )
}
