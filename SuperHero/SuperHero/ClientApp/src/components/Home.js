import React, { useState, useEffect } from 'react';
import axios from "axios"
import Cards from './Cards'
import Details from './Details'
import { CardGroup,Row } from 'react-bootstrap';

const Home = () => {
  const [allData, setAllData] = useState(() => null)

  let all

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://localhost:5001/Hero'
    }).then(response => {
      setAllData(prev => prev = response)
    })
  }, [])
  allData == null ? console.log() : all = allData.data.map((hero) => {
    return (
      <Details all={hero} />
    )
  })
  return (
    <div>
      <Row xs={1} md={4} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
          all
        ))}
      </Row>
    </div>
  );
}

export default Home;