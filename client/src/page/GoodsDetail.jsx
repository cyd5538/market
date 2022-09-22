import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import GoodsDetailCard from '../components/GoodsDetail/GoodsDetailCard';

const GoodsDetail = () => {
    const { id } = useParams();
    const [idData, setIdData] = useState([]);
      // 토큰을 가져와서 headers에 넣기 

    const data = JSON.parse(localStorage.getItem("user"));
    const token = data.token;

    const getAlldata = async () => {
        const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        const response = await axios.get(`http://localhost:5000/api/goods/${id}`,config);
        setIdData(response.data);
    }


    useEffect(() => {
        getAlldata()
    }, [])

    return (
        <div>
          <GoodsDetailCard idData={idData} />
        </div>
    )
}


export default GoodsDetail