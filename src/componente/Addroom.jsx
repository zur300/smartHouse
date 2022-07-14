import React, { useState } from 'react'
import './ProjectStyle.css'
import { Link } from 'react-router-dom';

export default function Addroom(props) {


    const [type, setType] = useState('');
    const [name, setName] = useState('');
    const [color, setColor] = useState('');


    let flag = true;
    const validation = () => {

        if (type == '' || name == '') {

            alert('error');
            flag = false;

        }
    }

    const checkIfToAddRoom = () => {
        if (flag == true) {
            props.addToRoomArr(type, name, color)
        };

        flag = true;
    }



    return (
        <div >
            <p>addroom</p>
            <select onClick={(elm) => { setType(elm.target.value) }} >
                <option value={''}>select room type</option>
                <option>bedroom</option>
                <option>bath/bathroom</option>
                <option>kitchen</option>

            </select><br /><br />
            <input onChange={(elm) => { setName(elm.target.value) }} type="text" placeholder='שם החדר'></input><br /><br />
            <input onChange={(elm) => { setColor(elm.target.value) }} type="text" placeholder='צבע' /><br /><br />
            <Link to='/'><button onClick={() => { validation(); checkIfToAddRoom() }}>צור</button></Link>
        </div>
    )
}
