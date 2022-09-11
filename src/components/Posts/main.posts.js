import React from "react"
import { Container } from "react-bootstrap";
import Moodal from "./modal.posts";

const Posts = () => {

    return (
        <React.Fragment>
            <Container className="mt-2">
            <Moodal />
            </Container>
        </React.Fragment>
    );
}

export default Posts