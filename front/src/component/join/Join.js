import React from 'react';
import Form from '../form/Form';

const Join = () => {
    return (
        <div>
            <h1>Join</h1>
            <Form fields={["Room name", "Password"]} />
        </div>
    );
}

export default Join;