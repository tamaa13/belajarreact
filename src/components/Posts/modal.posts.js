import React, { useEffect, useState } from 'react'
import { Container, Card, Button, Modal, ButtonGroup } from 'react-bootstrap'
import axios from 'axios'
import Loaders from '../Utilities/loaders'

const Moodal = () => {
    const [data, setDatas] = useState([])
    const [limit, setLimit] = useState(5)
    const [title, setTitle] = useState("")
    const [id, setId] = useState("")
    const [body, setBody] = useState("")
    const [loading, setLoading] = useState(true)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (props) => { 
        setShow(true)
        setId(props.id)
        setTitle(props.title)
        setBody(props.body)
    };

    useEffect(() => {
        let isCancelled = false 
        if(isCancelled === false){
            setLoading(true)
            axios({
                method: 'get',
                url: `${process.env.REACT_APP_BASEURL}/posts?_limit=${limit}`
            })
            .then((result) => setDatas(result.data))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
        }
            return () => { isCancelled = true }
        }, [limit])

        const handleLimit = (props) => {
            if(props === "+"){
                setLimit((prev) => prev + 1)
            }
            if(props === "-"){
                setLimit((prev) => prev - 1)
            }
        }
    

        if(loading) return <Loaders/>

  return (
    <Container>
        <br></br>
        <p>Currently Showing <b>{limit}</b> Post</p>
        {data.map((data, index) => {
            return(
            <Card style={{ width: '18rem', border:'none' }} key={index}>
                
                <Card.Body>
                    <Button variant="outline-primary" style={{ width: '250px', whiteSpace : 'nowrap', overflow : 'hidden',  textOverflow : 'ellipsis' }} onClick={() => handleShow(data)}>{data.title}</Button>
                    {
                        show == true ? 
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title><h1>Post ID : {id}</h1></Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <h4>title: <b>{title}</b></h4>
                                <br></br>
                                {body}
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            </Modal.Footer>
                        </Modal> : 
                        null
                    }
                </Card.Body>
            </Card>
            )
        })}
           

            <ButtonGroup className="d-block justify-content-center align-items-center mt-2">
                {
                    limit == 1 ? 
                        <Button className="btn btn-success" onClick={() => handleLimit("+")}>+ Post</Button>
                        : 
                        <>
                        <Button className="btn btn-success" onClick={() => handleLimit("+")}>+ Post</Button>
                        <Button className="btn btn-warning" onClick={() => handleLimit("-")}>- Post</Button>
                        </>
                }

            </ButtonGroup>
                
    </Container>
  )
}

export default Moodal