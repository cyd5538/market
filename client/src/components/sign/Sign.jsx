import React, {useState,useEffect} from 'react';
import { Box, TextField, Button, styled, Typography } from '@mui/material'
import Logo from '../../assets/image.jpg'
import { useNavigate } from 'react-router-dom'
import { register, reset } from '../../features/auth/authSlice'
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



const Sign = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    const { name, email, password, password2 } = formData

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
            navigate('/login')
        }

        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (password !== password2) {
            alert('비밀번호가 일치하지 않습니다.')
        } else {
            const userData = {
                name,
                email,
                password,
            }

            dispatch(register(userData))
        }
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
                            variant="standard" 
                            name='name'
                            value={name}
                            onChange={onChange} 
                            label="Name"
                        />
                        <TextField 
                            type="email" 
                            variant="standard"               
                            name='email'
                            value={email}
                            onChange={onChange} 
                            label="email" 
                        />
                        <TextField 
                            type="password" 
                            variant="standard" 
                            name='password'
                            value={password}
                            onChange={onChange} 
                            label="Password" 
                        />
                        <TextField 
                            type="password" 
                            variant="standard" 
                            name='password2'
                            value={password2}
                            onChange={onChange}
                            label="Password2" 
                        />
                        <SignupButton type="submit" variant="contained" >Signup</SignupButton>
                        <Text>OR</Text>
                        <LoginButton component={Link} to="/login" variant="contained">Already have an account</LoginButton>
                    </form>
                </Wrapper>



            </Box>
        </Component>
    )
}

export default Sign