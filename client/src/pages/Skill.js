import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { Card, Button } from 'react-bootstrap';

import { skills } from '../skills.json';

const styles = {
    paddingTop: "60px"
}

const titleStyle = {
    fontSize: "1.6em",
    letterSpacing: "0.05em"
}

const descriptionStyles = {
    letterSpacing: "0.1em"
}

const benefitSubtitle = {
    fontSize: "1.3em",
    fontWeight: 700,
    paddingTop: "10px",
    letterSpacing: "0.05em"
}

export default function Skill(props) {
    const { path } = useParams();

    const skill = skills.filter((skill) => {
        return skill.path === path;
    });

    return (
        <>
            <Card style={styles} className="text-center">
                <Card.Header style={titleStyle} >{skill[0].name}</Card.Header>
                <Card.Body>
                    <Card.Title style={descriptionStyles}>{skill[0].description}</Card.Title>
                    <p style={benefitSubtitle} >Benefits:</p>
                    <div>
                        {skill[0].benefits.map((benefit, i) => {
                            return <p key={i}>{benefit}</p>
                        })}
                    </div>
                    <Link to="/skills"><Button variant="primary">Back to Skills</Button></Link>
                </Card.Body>
                <Card.Footer>Wavelength Community</Card.Footer>
            </Card>
        </>
    );
}