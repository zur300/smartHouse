import React, { useState } from 'react'
import './ProjectStyle.css'

export default function Machine(props) {
    const [selectedMachine, setSelectedMachine] = useState({});
    const temp = props.roomArr;

    const setTemp = () => {

        temp[props.index].machineArr.push(selectedMachine);
    }

    let flag = true;

    const validation = () => {

        if (selectedMachine.name == 'דוד') {
            if (props.type == 'bath/bathroom') {
                flag = true;
            }
            else flag = false;
        }
        if (temp[props.index].machineArr.length == 5) {
            flag = false;
        }
        if (selectedMachine.name == 'מערכת סטריאו') {
            for (let i = 0; i < temp[props.index].machineArr.length; i++) {
                if (temp[props.index].machineArr[i].name == 'מערכת סטריאו') {
                    flag = false;
                }
            }

        }
        if (flag == false) {
            alert('error');
        }
        else {
            setTemp();
            props.setRoomArr([...temp]);
            props.setFlag(false);
        }

        flag = true;



    }

    return (
        <div className='machineDiv'>
            <select className='machineSelect' onClick={(elm) => { setSelectedMachine({ name: elm.target.value, status: false }) }} title='בחר מוצר'>
                <option>מזגן</option>
                <option>דוד</option>
                <option>מערכת סטריאו</option>
                <option>מנורה</option>
            </select><br />

            <button onClick={() => { validation() }}>הוסף</button>


        </div>
    )
}
