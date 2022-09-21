import React, { useState, useEffect } from 'react'
import axios from 'axios';
import MyGoodsCard from '../components/MyGoodspage/MyGoodsCard';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

const Container = styled.div`
  padding-bottom: 100px;
  display: flex;
  justify-content: center;
  margin : auto;

`

const NotData = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap:2rem 

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

const MyGoods = () => {
  const [goodsData, setGoodsData] = useState([]);

  // 토큰을 가져와서 headers에 넣기 
  const data = JSON.parse(localStorage.getItem("user"));
  const token = data.token;

  const handleGetData = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await axios('http://localhost:5000/api/goods', config)
    setGoodsData(response.data);

  }

  useEffect(() => {
    handleGetData()
  }, [data])



  if (goodsData.length === 0) {
    return (
      <NotData>
        <div style={{ fontSize: "1.5rem" }}>등록된 물건이 없습니다.</div>
        <Button variant="contained"><Link to="/all" style={{ color: "white", textDecoration: "none" }}>상품 등록하러가기</Link></Button>
      </NotData>
    )
  }

  return (
    <Container>
      <CardStyle>
        {goodsData?.map((data) => (
          <MyGoodsCard key={data._id} data={data} />
        ))}
      </CardStyle>
    </Container>
  )
}

export default MyGoods