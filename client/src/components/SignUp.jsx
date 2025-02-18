import React, {useState} from 'react'
import styled from 'styled-components';
import TextInput from './TextInput';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/reducers/userSlice';
import { UserSignUp } from '../api';

const Container = styled.div`
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 36px;
`;
const Title = styled.div`
    font-size: 30px;
    font-weight: 800;
    color: ${( {theme} ) => theme.text_primary};
`;
const Span = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: ${( {theme} ) => theme.text_secondary + 90};
`;


const SignUp = () => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const validInputs = () => {
        if(!email || !password || !name) {
            alert("please fill in all fields");
            return false;
        }
        return true;
    }
    
    const handleSignUp = async() => {
            setLoading(true);
            setButtonDisabled(true);
            if(validInputs()) {
                await UserSignUp({name, email, password}).then((res)=>{
                    dispatch(loginSuccess(res.data));
                    alert("Account Create Success");
                    setLoading(false);
                    setButtonDisabled(false);
                }).catch((err)=> {
                    alert(err);
                    setLoading(false);
                    setButtonDisabled(false);
                })           
            }
        }

  return (
    <Container>
        <div>
            <Title>Welcome to FitAssist</Title>
            <Span>Please enter detalis to create new account</Span>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
        <TextInput
                label="Full Name"
                placeholder="Enter your FullName"
                value = {name}
                handelChange={(e)=> setName(e.target.value)}
            ></TextInput>
            <TextInput
                label="Email Address"
                placeholder="Enter your email"
                value = {email}
                handelChange={(e) => setEmail(e.target.value)}
            ></TextInput>
            <TextInput
                label="Password"
                placeholder="Enter your password"
                password
                value={password}
                handelChange={(e) => setPassword(e.target.value)}
            ></TextInput>
            <Button
             text={"Sign Up"}
             onClick={handleSignUp}
             isLoading={loading}
             isDisabled={buttonDisabled}
             ></Button>
        </div>
    </Container>
  )
}

export default SignUp
