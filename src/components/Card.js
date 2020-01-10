import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Card.scss';

function Card() {
    const[data, setData] = useState({})
    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=jdxVlFo5yGmK31IKdbJApTiT1dWvtOKIhh7ihpt9')
        .then(res => setData(res.data)) 
    }, [])


    console.log(data)
    return (
        <div className="wrapper">
            <h1>{data.title}</h1>
            <h3 id="date">{data.date}</h3>
            <img alt={data.title} src={data.url}/>
            <h4>{data.copyright}</h4>
            <p>{data.explanation}</p>
        </div>
    )
}

export default Card