import React, {useState, useEffect} from 'react'
import axios from 'axios';
import AllCard from '../components/page/AllCard';
import styled from 'styled-components';
import AddCard from '../components/page/AddCard'

const AllStyle = styled.div`
  width: 100%;
  background-color: #ff8b5b;
`
const Container = styled.div`
  padding-bottom: 100px;
  display: flex;
  justify-content: center;
  margin : auto;

`

const CardStyle = styled.div`
    padding-top: 100px;
    width: 90%;
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
    
`

const All = () => {
  const [alldata, setAlldata] = useState([]);
  
  const getAlldata = async () => {
    const response = await axios.get('http://localhost:5000/api/goods/all');
    setAlldata(response.data);
    console.log(alldata);
  }

  useEffect(() => {
    getAlldata()
  },[])

  return (
    <AllStyle>
        <AddCard />
      <Container>
        <CardStyle>
            {alldata?.map((data) => (
              <AllCard key={data._id} data={data} />
            ))}
        </CardStyle>
      </Container>
    </AllStyle>
  )
}

export default All