import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useSelector } from "react-redux";
import FavorCard from '../components/Favorpage/FavorCard';
import styled from 'styled-components';

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