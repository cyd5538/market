import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useSelector } from "react-redux";
import FavorCard from '../components/Favorpage/FavorCard';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';



const Favor = () => {
    const [favor, setFavor] = useState([]);
    const { user } = useSelector((state) => state.auth);
    // 토큰을 가져와서 headers에 넣기 

    const data = JSON.parse(localStorage.getItem("user"));
    const token = data.token;
 

   const getFavor = async () => {

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    
    const response = await axios.get(`http://localhost:5000/api/favor/`,config)
    const data = response.data
    setFavor(data)
  }
  useEffect(() => {
    getFavor()
  },[])
  
  if (favor.length === 0) {
    return (
      <NotData>
        <div style={{ fontSize: "1.5rem" }}>찜한 상품이 없습니다.</div>
        <Button variant="outlined"><Link to="/all" style={{ color: "blue", textDecoration: "none" }}>상품 찜하러 가기</Link></Button>
      </NotData>
    )
  }

    return (
        <Container>
          <CardStyle>
            {favor.map((favors) => (
              <FavorCard key={favors._id} favors={favors}/>
            ))}
          </CardStyle>
        </Container>
    )
}

export default Favor

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
const NotData = styled.div`
  width: 100%;
  height: 100vh;  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap:2rem ;

`