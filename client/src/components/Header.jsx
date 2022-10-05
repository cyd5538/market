import React, {useState,useEffect, useRef} from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { FcInTransit } from "react-icons/fc";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import styled from 'styled-components';
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";

export default function Header({theme,setTheme}) {
    const [toggle, setToggle] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    let menuRef = useRef()

    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate("/");
    };

    
    const toggleOn = () => {
        setToggle(true)
    }
    const toggleOff = () => {
        setToggle(false)
    }


    useEffect(() => {
        let handler = (e)=>{
          if(!menuRef.current.contains(e.target)){
              setToggle(false);
            console.log(menuRef.current);
          }      
        };
        document.addEventListener("mousedown", handler);
        return() =>{
          document.removeEventListener("mousedown", handler);
        }
      });

      const icon = theme === "light" ? <HiMoon size={40} /> : <CgSun size={40} />;
      function changeTheme() {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
        
    };

    return (
        <HeaderStyle ref={menuRef}>
            <h3>
                <Link to="/">영진 마켓<FcInTransit /></Link> 
            </h3>
                <div className='menu'>
                     <div><Link to="/all">모든 상품</Link></div>       
                     <DarkToggle onClick={changeTheme}>{icon}</DarkToggle>   
                </div>

            {user ?
                <div className='toggle_container'>
                    <div className='menu'>
                        {toggle ? <AiOutlineClose onClick={toggleOff} /> :<AiOutlineMenu onClick={toggleOn}/> }
                    </div>
                    <div className={toggle ? 'toggle' : "none"}>
                        <div to="/mygoods" component={Link}>
                            <Link to="/mygoods">내가 올린 상품</Link>
                        </div>
                        <div to="/favor" component={Link}>
                            <Link to="/favor">내가 찜한 상품</Link>
                        </div>
                        <div className='notmobile' onClick={onLogout}>logout</div>
                    </div>
                </div>
                : 
                <div className='notmobile'>
                    <div>
                        <Link onClick={toggleOn} to="/login">Login</Link>
                    </div>
                    <div>
                        <Link to="/sign">Sign Up</Link>
                    </div>
                </div>
            }
        </HeaderStyle>
    );
}

const HeaderStyle = styled.div`
    width: 100%;
    height: 60px;
    background-color: ${props => props.theme.HeaderBackground};
    color: ${props => props.theme.HeaderColor};
    display: flex;
    justify-content: space-between;
    padding-left: 15px;
    padding-right: 15px;
    align-items: center;
    z-index: 999;

    .menu{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
    }

    .notmobile{
        display: flex;
        gap: 1rem;
        cursor: pointer;
    }
    a, a:link, a:visited, a:focus, a:hover, a:active{
        color: ${props => props.theme.titleColor};
        font-weight: bold;
        text-decoration:none; 
    }
    .onUser{
        display: flex;
        gap: 3rem;
    }
    .toggle_container{
        position: relative;
        z-index: 2;
        .menu{
            font-size:1.5rem;
            top:-12px;
            right:5px;
            position: absolute;
        }
        .toggle{
            position: absolute;
            width:200px;
            background-color: ${props => props.theme.HeaderBackground};
            top:30px;
            right:-15px;
            display: block;
            div{
                padding:10px;
            }
            div:hover{
                background-color: ${props => props.theme.pageBackground};
            }
        }
        .none{
            display: none;
        }
    }
`

const DarkToggle = styled.div`

    bottom: 2rem;
    right: 2rem;
    width: 34px;
    height: 34px;
    border-radius: 17px;
    display: flex;
    justify-content:center;
    align-items: center;
    background-color: ${props => props.theme.toggleBg};
    color:${props => props.theme.toggleColor};
    border: 3px solid ${props => props.theme.toggleBorder};
    z-index: 999;
    cursor:pointer;
`