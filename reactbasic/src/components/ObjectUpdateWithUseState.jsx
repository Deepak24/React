import { useState } from "react";

const ObjectUpdateWithuseState = () => {
    const objInitialState = {
        uName: '',
        uEmail: '',
        password: '',
        mobile: '',
        altNumber: ''
    }

    const [form, setForm] = useState( objInitialState );

    const onNameChange = (e) => {
        setForm( { ...form, uName: e.target.value } );
    }

    const onEmailChange = (e) => {
        setForm( { ...form, uEmail: e.target.value } );
    }

    console.log(form);
    return (
        <>
            <div>
                <label>Name:</label>
                <input placeholder="Enter Your Name..." onChange={onNameChange} />
            </div>
            <div>
                <label>Email:</label>
                <input placeholder="Enter Your Email..." onChange={onEmailChange} />
            </div>
            <div>
                <label>Password:</label>
                <input placeholder="Enter Your Password..."  />
            </div>
            <div>
                <label>Mobile:</label>
                <input placeholder="Enter Your Mobile..."  />
            </div>
            <div>
                <label>Alt Number:</label>
                <input placeholder="Enter Your Alt Number..." />
            </div>
        </>
    )
}

export default ObjectUpdateWithuseState;