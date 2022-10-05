import React, { useState, useEffect } from 'react'
import axios from 'axios';
import AllCard from '../components/Allpage/AllCard';
import styled from 'styled-components';
import AddCard from '../components/Allpage/AddCard'
import { useSelector } from "react-redux";
import TextField from '@mui/material/TextField';
import { toast } from 'react-toastify';

const AllStyle = styled.div`
  .container{
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    padding-top: 50px;
  }
  input{
    border: 1px solid ${props => props.theme.tagLineColor};
    color: ${props => props.theme.tagLineColor};
  }
  label{
    color: ${props => props.theme.tagLineColor};
  }
`
const Container = styled.div`
  padding-bottom: 100px;
  display: flex;
  justify-content: center;
  margin : auto;
`

const CardStyle = styled.div`
    padding-top: 50px;
    width: 90%;
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
`

const toastObject = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
}

const All = () => {
  const [alldata, setAlldata] = useState([]);
  const [search, setSearch] = useState('');
  const [searchData, setSearchData] = useState([]);


  const getAlldata = async () => {
    const response = await axios.get('http://localhost:5000/api/goods/all');
    setAlldata(response.data);
  }

  useEffect(() => {
    getAlldata()
  }, [searchData])
  
  const handleSubmit = async(e) => {
    e.preventDefault()
    // title 검색 결과
    const searchresult = alldata.filter((data) => data.title.indexOf(search) !== -1)
    // 결과가 없으면 error 있으면 setSearchData에 넣기
    if(searchresult.length < 1){
      toast.error("검색 결과가 없습니다",toastObject)
    }else{
      setSearchData(searchresult)
    }

  }

  const { user } = useSelector((state) => state.auth);

  return (
    <AllStyle>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <TextField 
            type="text"
            value={search}
            name="search"
            id="outlined-basic" 
            label="Search Enter.." 
            variant="outlined"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      {user ? <AddCard /> : <></>} 
      </div>
      {searchData.length > 0 ?
        <Container>
          <CardStyle>
              {searchData?.map((data) => (
                <AllCard key={data._id} data={data} user={user} />
              ))}
          </CardStyle>
        </Container>
      :
        <Container>
        <CardStyle>
          {alldata?.map((data) => (
            <AllCard key={data._id} data={data} user={user} />
          ))}
        </CardStyle>
      </Container>
     }
    </AllStyle>
  )
}

export default All