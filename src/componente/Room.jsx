import React from 'react'
import { Link } from 'react-router-dom'

export default function Room(props) {
    return (
        <div>
            <Link to='/addmachine'> <div className='roomDiv' style={{ backgroundColor: props.color }} property={props.style} onClick={() => { props.openTheRightRoom(props.index) }}> {props.name}</div></Link>

        </div>
    )
}
