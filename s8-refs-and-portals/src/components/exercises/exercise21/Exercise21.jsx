import { useRef } from 'react'
import './Exercise21.css'

export default function Exercise21()
{
    const fileRef = useRef();
    return (
        <div id="exercise">
            <h3>Ref Exercise </h3>
            <p>Capture de click and trigger the input hidden</p>
            <p>Please select an image</p>
            <p>
                <input ref={fileRef} data-testid="file-picker" type="file" accept="image/*" />
                <button onClick={() => fileRef.current.click()}>Pick Image</button>
            </p>
        </div>
    )
}
