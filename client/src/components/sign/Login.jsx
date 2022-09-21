import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, styled, Typography } from '@mui/material'
import Logo from '../../assets/image.jpg'
import { useNavigate } from 'react-router-dom'
import { login, reset } from '../../features/auth/authSlice'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../Spinner';
import { Link } from 'react-router-dom';

const Component = styled(Box)`
    
    width: 400px;
    margin : auto;
    margin-top: 30px;
    box-shadow: 2px 2px 10px 2px rgb(0,0,0,0.2);
`

const Image = styled('img')({
    width: 150,
    margin: "auto",
    display: 'flex',
    padding: '50px 0 0'
})

const Wrapper = styled(Box)`
    form{
        padding: 25px 35px;
        display: flex;
        flex: 1;
        flex-direction: column;
        div, button, p{
            margin-top: 20px;
        }
    }

`
const LoginButton = styled(Button)`
    text-transform: none;
    background: #ff8b3b;
    height: 48px;
    border-radius: 2px;
    font-size:1.2rem;
    :hover{
        background: white;
        color: #ff8b3b;
    }
`
const SignupButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: black;
    height: 48px;
    border-radius: 2px;
    box-shadow : 0 2px 4px 0 rgba(0 0 0, 0.2);
    font-size:1.2rem;
    :hover{
        background: #ff8b3b;
        color: white;
    }
`

const Text = styled(Typography)`
    color : #878787;
    font-size: 1.1rem;
`



const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { email, password } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    )

    useEffect(() => {
        if (isError) {
            alert(message)
        }

        if (isSuccess || user) {
            navigate('/')
        }

        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(123)
        const userData = {
            email,
            password,
        }

        dispatch(login(userData))
    }

    if (isLoading) {
        return <Spinner />
    }
    return (
        <Component>
            <Box>
                <Image src={Logo} alt="Logo" />
                <Wrapper>
                    <form onSubmit={onSubmit}>
                        <TextField
                            type="email"
                            variant="standard"
                            label="email"
                            name='email'
                            value={email}
                            onChange={onChange}
                        />
                        <TextField
                            type="password"
                            variant="standard"
                            label="Password"
                            name='password'
                            value={password}
                            placeholder='비밀번호'
                            onChange={onChange}
                        />
                        <LoginButton type="submit" variant="contained">Login</LoginButton>
                        <Text>OR</Text>
                        <SignupButton component={Link} to="/sign" variant="contained">Create an account</SignupButton>
                    </form>
                </Wrapper>
            </Box>
        </Component>
    )
}

export default Login