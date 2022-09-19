import React, { useState } from 'react'
import { Box, TextField, Button, styled, Typo, Typography } from '@mui/material'
import Logo from '../../assets/image.jpg'

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
    padding: 25px 35px;
    display: flex;
    flex: 1;
    flex-direction: column;
    div, button, p{
        margin-top: 20px;
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

const signupInitialValues = {
    name: "",
    username: "",
    password: ""
}

const Login = () => {
    const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/DaangnMarket_logo.png/330px-DaangnMarket_logo.png'

    const [account, toggleAccount] = useState("login");
    const [signup, setSignup] = useState(signupInitialValues);

    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount("signup")
    }

    const onInputChange = (e) => {
        setSignup({
             ...signup, 
             [e.target.name]: e.target.value 
        });
    }

    const signupUser = () => {
        
    }

    return (
        <Component>
            <Box>
                <Image src={Logo} alt="Logo" />
                {
                    account === 'login' ?
                        <Wrapper>
                            <TextField variant="standard" label="Username" />
                            <TextField variant="standard" label="Password" />
                            <LoginButton variant="contained">Login</LoginButton>
                            <Text>OR</Text>
                            <SignupButton onClick={() => toggleSignup()} variant="contained">Create an account</SignupButton>
                        </Wrapper>
                        :
                        <Wrapper>
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='name' label="Name" />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label="Username" />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name="password" label="Password" />
                            <SignupButton onClick={() => signupUser()} variant="contained">Signup</SignupButton>
                            <Text>OR</Text>
                            <LoginButton onClick={() => toggleSignup()} variant="contained">Already have an account</LoginButton>
                        </Wrapper>
                }


            </Box>
        </Component>
    )
}

export default Login