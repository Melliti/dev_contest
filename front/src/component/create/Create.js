import React from 'react';
import Form from '../form/Form';

const Create = () => {
    return (
        <div>
            <h1>Create</h1>
            <Form fields={["Email", "Room name", "Password", "Language"]}/>
        </div>
    );
}

export default Create;