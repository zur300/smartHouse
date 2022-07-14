import React, { useState } from 'react'
import Ex from './Ex';
import Machine from './Machine';
import './ProjectStyle.css'



export default function AddMachine(props) {


    const [flag, setFlag] = useState(false);



    const checkFlag = () => {
        if (flag == true) {
            return <Machine setFlag={setFlag} setRoomArr={props.setRoomArr} roomArr={props.roomArr} index={props.index} type={props.type} />
        }
    }

    const machineList = () => {



        return <Ex index={props.index} setRoomArr={props.setRoomArr} roomArr={props.roomArr} arr={props.roomArr[props.index].machineArr} />

    }


    return (
        <div className='addMachineDiv'>
            <p> {props.name} :שם החדר </p>
            <p>{props.type} :סוג החדר</p>




            <button onClick={() => { setFlag(true) }}>הוסף מוצר</button>
            <div><br /></div>
            {checkFlag()}
            {machineList()}
        </div>
    )
}
