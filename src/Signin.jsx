
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

export default function Signin() {
    const [pass, setPass] = useState('');
    const nev = useNavigate();

    const validPass = () => {
        if (pass == '12345') {
            nev('/page3')
        }
    }

    return (
        <div>

            <input onChange={(e) => { setPass(e.target.value) }} type='text' />
            <button onClick={validPass}>Enter</button>


        </div>
    )
}
