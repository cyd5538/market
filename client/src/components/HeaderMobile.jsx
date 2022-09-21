import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

const HeaderMobileStyle = styled.div`
    display: none;
    position: relative;
    z-index: 999;
    .menu_icon{
        position: absolute;
        top: -10px;
        right: 5px;
    }
    .container{
        position: absolute;
        top: 28px;
        right: -30px;
        width: 300px;
        background-color: #222;
        display: flex;
        flex-direction: column;
        div {
            padding-top: 10px;
            padding-bottom: 10px;
            color: white;
            text-align: center;
            font-size: 1.2rem;
            cursor: pointer;
            a{
                text-decoration: none;
                color: white;
            }
        }
        div:hover{
            background-color: black;
            
        }
    }
    .none{
        position: absolute;
        top: -200px;
        right: -200px;
    }
    @media screen and (max-width:650px) {
        display: block;
    }
`

const HeaderMobile = () => {
    const [toggle, setToggle] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);

    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        setToggle(false)
        navigate("/");
    };

    const toggleOn = () => {
        setToggle(true)
    }
    const toggleOff = () => {
        setToggle(false)
    }

    return (
        <HeaderMobileStyle>
            <div onClick={toggleOn} className='menu_icon'>
                <MenuIcon />
            </div>
            <div className={toggle ? "container" : "none"}>
                <div><Link onClick={toggleOff} to="/all">모든 상품</Link></div>
                <div><Link onClick={toggleOff} to="/mygoods">내가 올린 상품</Link></div>
                <div><Link onClick={toggleOff}>나의 찜 목록</Link></div>
                {user ? 
                    <div onClick={onLogout}>LOGOUT</div> 
                : 
                <>                
                    <div><Link onClick={toggleOff} to="/login">Login</Link></div>
                    <div><Link onClick={toggleOff} to="/sign">Sign up</Link></div>
                </>}


            </div>
        </HeaderMobileStyle>
    )
}

export default HeaderMobile