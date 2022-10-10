import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import GoodsDetailCard from '../components/GoodsDetail/GoodsDetailCard';
import styled from 'styled-components';

const DetailStyle = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  height: 100vh;
`


const GoodsDetail = () => {
  const { id } = useParams();
  const [idData, setIdData] = useState([]);

  // 토큰을 가져와서 headers에 넣기 

  const data = JSON.parse(localStorage.getItem("user"));
  const token = data.token;


  // 디테일 페이지 api
  const getAlldata = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await axios.get(`http://localhost:5000/api/goods/${id}`, config);
    setIdData(response.data);
    console.log(idData)
  }

  useEffect(() => {
    getAlldata()
  }, [])

  return (
    <DetailStyle>
      <GoodsDetailCard 
        idData={idData} url={id}
      />
    </DetailStyle>
  )
}


export default GoodsDetail