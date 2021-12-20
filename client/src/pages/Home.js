import React from 'react';

import SubscriptionForm from '../components/SubscriptionForm';

import { Container, Card, ListGroup } from 'react-bootstrap';
import styled from 'styled-components';

const Main = styled.main`
    padding: 60px 10px 10px 10px;
`;

const Headline = styled.h2`
    font-size: 2.5em;
    text-align: center;
    padding: 10px 0 0 0;
    line-height: 1.4em;
    letter-spacing: 0.1em;
    font-weight: 600;
`;

const Tagline = styled.h3`
    font-size: 1.5em;
    letter-spacing: 0.3em;
    text-align: center;
    padding: 0 0 10px 0;
`;

const ListHeader = styled.h3`
    font-size: 1.8em; 
    text-align: center;
    padding: 10px 0 0 0;
    margin: 10px auto 7px auto;
    letter-spacing: 0.1em;
    font-weight: 700;
`;

export default function Home() {
    return (
        <Container>
            <Main>
                <Headline>Wavelength Community</Headline>
                <Tagline>What is it?</Tagline>
                <Card>
                    <Card.Header>wave·length</Card.Header>
                    <Card.Body>
                        <Card.Title>/ˈwāvˌleNG(k)TH/</Card.Title>
                        <Card.Text>
                            A person's ideas and way of thinking, especially as it affects their ability to communicate with others.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <ListHeader>Learn skills like:</ListHeader>
                <ListGroup variant="flush">
                    <ListGroup.Item>Emotional Intelligence</ListGroup.Item>
                    <ListGroup.Item>Deception Detection</ListGroup.Item>
                    <ListGroup.Item>Overcoming Cognitive Biases</ListGroup.Item>
                    <ListGroup.Item>Public Speaking</ListGroup.Item>
                    <ListGroup.Item>Critical Thinking</ListGroup.Item>
                    <ListGroup.Item>Effective Debate</ListGroup.Item>
                    <ListGroup.Item>And more!</ListGroup.Item>  
                </ListGroup>
            </Main>
            <SubscriptionForm />
        </Container> 
    );
}