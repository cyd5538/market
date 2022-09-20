import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { FcInTransit } from "react-icons/fc";


const Component = styled(AppBar)`
    background-color: #ff8b3b;

`
export default function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate("/");
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Component position="static">
                <Toolbar>
                    <Typography variant="h5" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: "none", color: "white", fontWeight: 600 }}>
                        영진 마켓 <FcInTransit />
                    </Typography>

                    <Typography variant="h7" component={Link} to="/all" sx={{ mr: 4, textDecoration: "none", color: "white" }}>
                        모든 상품
                    </Typography>
                    <Typography variant="h7" component={Link} sx={{ mr: 4, textDecoration: "none", color: "white" }}>
                        내가 올린 상품
                    </Typography>
                    <Typography variant="h7" component={Link} sx={{ flexGrow: 1, mr: 4, textDecoration: "none", color: "white" }}>
                        나의 찜 목록
                    </Typography>
                    {user ? 
                        <Button onClick={onLogout} color="inherit">logout</Button>
                        : <>
                            <Button component={Link} to="/login" color="inherit">Login</Button>
                            <Button component={Link} to="/sign" color="inherit">Sign Up</Button>
                          </>
                    }

                </Toolbar>
            </Component>
        </Box>
    );
}
