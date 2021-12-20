import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';

import { skills } from '../skills.json';

const styles = {
    paddingTop: "63px"
}

const activeStyleLive = {
    color: "green",
    fontSize: "0.7em",
    fontWeight: 900
}

const activeStyleComingSoon = {
    color: "grey",
    fontSize: "0.7em"
}

const Skills = () => {
    return (
        <Container style={styles}>
            {skills.map((skill) => {
                let activeStyle;
                if (skill.active_status === "Live") {
                    activeStyle = activeStyleLive;
                } else {
                    activeStyle = activeStyleComingSoon;
                }

                return (
                    <Card key={skill.id} style={{ width: '18rem', margin: '15px auto' }}>
                        <Card.Body>
                            <Card.Title>{skill.name} <span style={activeStyle}>({skill.active_status})</span></Card.Title>
                            <Card.Text>
                                {skill.brief_description}
                            </Card.Text>
                            <Link to={`/skill/${skill.path}`}><Button variant="primary">More</Button></Link>
                        </Card.Body>
                    </Card>
                );
            })}
        </Container>
    );
}

export default Skills;