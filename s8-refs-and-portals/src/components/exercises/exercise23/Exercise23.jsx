import Input from './Input';
import "./Exercise23.css"
import { useRef } from 'react';

export const userData = {
    name: '',
    email: '',
};

function Exercise23()
{
    const nameRef = useRef();
    const emailRef = useRef();

    function handleSaveData()
    {
        userData.name = nameRef.current.value
        userData.email = emailRef.current.value

        console.log("userData: ", userData);
    }

    return (
        <div id="exercise23">
            <Input type="text" label="Your Name" ref={nameRef} />
            <Input type="email" label="Your E-Mail" ref={emailRef} />
            <p id="actions">
                <button onClick={handleSaveData}>Save Data</button>
            </p>
        </div>
    );
}

export default Exercise23;