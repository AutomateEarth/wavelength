import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

const FormContainer = styled.div`
    padding: 5px 5px 10px 5px;
    margin-bottom: 10px;
`;

const SubscribeHeader = styled.h3`
    font-size: 1.6em;
    font-weight: 700;
    padding: 0 0 5px 0;
`;

export default function SubscriptionForm() {
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    // FIX THIS FUNCTION
    const handleSubmit = (e) => {
        e.preventDefault();
        const url = '/routes/homeRoutes';
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        }
        fetch(url, requestOptions)
            .then(response => console.log('Submitted Successfully'))
            .catch(error => console.log('Form Submit Error', error))
    
        setEmail('');
        navigate('/');
    };

    return (
        <FormContainer>
            <SubscribeHeader>Subscribe</SubscribeHeader>
            <Form onSubmit={handleSubmit} method='POST' action='http://localhost:5000'>
                
                <Form.Group className="mb-3" controlId="email">
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email address"
                        onChange={handleEmailChange}
                        value={email}
                    />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Subscribe
                </Button>
            </Form>
        </FormContainer>
    );
}