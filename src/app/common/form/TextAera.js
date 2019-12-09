import React from 'react';
import { Form, Label } from 'semantic-ui-react';

const TextAera = ({
    input, 
    rows,
    type, 
    width, 
    placeholder, 
    meta:{ touched, error }
}) => {
    return (
        <Form.Field error={touched && !!error}>
            <textarea  {...input} placeholder={placeholder} type={type} row={rows}></textarea>
            {touched && error && <Label basic color='red'>{error}</Label>}
        </Form.Field>
    )
}

export default TextAera;