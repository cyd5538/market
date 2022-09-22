import React, {useState, useEffect} from 'react'
import axios from 'axios';
import AllCard from '../components/Allpage/AllCard';
import styled from 'styled-components';
import AddCard from '../components/Allpage/AddCard'
import {  useSelector } from "react-redux";


const AllStyle = styled.div`
  width: 100%;

  position: relative;
  .Modal{
    position: absolute;
    top: 30px;
    right: 80px;
  }
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
    justify-content: center;
    gap: 2rem;
    
`

const All = () => {
  const [alldata, setAlldata] = useState([]);
  
  const getAlldata = async () => {
    const response = await axios.get('http://localhost:5000/api/goods/all');
    setAlldata(response.data);
  }

  useEffect(() => {
    getAlldata()
  },[alldata])

  const { user } = useSelector((state) => state.auth);

  return (
    <AllStyle>
        {user ? <AddCard /> : <></>}
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