import React, { useState } from 'react'

export default function Ex(props) {
    const [hook, resetHook] = useState(1)

    const color = (val) => {
        if (val == false) {

            return "red"
        }
        else {

            return "green"
        }
    }

    const temp = props.roomArr;
    const changeStatus = (i) => {
        temp[props.index].machineArr[i].status = !temp[props.index].machineArr[i].status
    }

    return (
        <div className='machines'>
            {props.arr.map((val, index) => {
                return <h1 className='h1' onClick={() => { resetHook(hook + 1); changeStatus(index) }} style={{ backgroundColor: color(val.status) }}>{val.name}</h1>

            })}

        </div>
    )
}
