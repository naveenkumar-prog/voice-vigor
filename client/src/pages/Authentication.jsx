import React, { useState } from 'react'
import {styled} from 'styled-components';
import LogoImg from '../utils/images/logo.jpg';
import AuthImg from '../utils/images/AuthImage.jpg';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

const Container = styled.div`
    display: flex;
    flex: 1;
    height: 100%;
    background-color: ${( {theme} ) => theme.bg};

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
const Left = styled.div`
    flex: 1;
    background-color: blue;
    position: relative;
    @media (max-width: 768px) {
        display: none;
    }
`;

const Logo = styled.img`
    position: absolute;
    width: 70px;
    top: 40px;
    left: 60px;
    z-index: 10;
`;
const Image = styled.img`
    position: relative;
    height: 100%;
    width: 100%;
`;

const Right = styled.div`
    flex: 1;
    position: relative;
    align-items: center;
    flex-direction: column;
    gap: 16px;
    padding: 40px;
    display: flex;
    justify-content: center;
`;

const Text = styled.div`
    font-size: 16px;
    text-align: center;
    color: ${( {theme} ) => theme.text_secondary};
    margin-top: 16px;
    @media (max-width: 400px) {
        font-size: 14px;
    }
`;

const TextButton = styled.span`
    color: ${( {theme} ) => theme.primary};
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 600;

`;
const Authentication = () => {
    const [login,setLogin] = useState(false);



  return (
    <Container>
        <Left>
            <Logo src={LogoImg}/>
            <Image src={AuthImg}/>
        </Left>
        <Right>{!login ? (
        <>
            <SignIn />
            <Text>Don't have an account ? <TextButton onClick= {() => setLogin(true)}> SignUp </TextButton> </Text>
        </>
        ): 
        <>
            <SignUp />
            <Text>Already have an account ? <TextButton onClick= {() => setLogin(false)}> SignIn </TextButton> </Text>

        </>}</Right>
    </Container>
  )
}

export default Authentication
