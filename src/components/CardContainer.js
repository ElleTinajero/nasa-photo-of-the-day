import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './CardContainer.scss';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';
  import { Container } from 'reactstrap';


function CardContainer() {
    const[data, setData] = useState({})
    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=jdxVlFo5yGmK31IKdbJApTiT1dWvtOKIhh7ihpt9')
        .then(res => setData(res.data)) 
    }, [])


    console.log(data)
    return (
        <Container>
            <Card>
                <CardTitle>{data.title}</CardTitle>
                <CardSubtitle id="date">{data.date}</CardSubtitle>
                <CardImg top width="100%" src={data.url} alt={data.title} />

                <CardBody>
                <CardSubtitle>{data.copyright}</CardSubtitle>
                <CardText>{data.explanation}</CardText>
                </CardBody>
            </Card>
        </Container>
    )
}

export default CardContainer