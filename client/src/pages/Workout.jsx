import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import WorkoutCard from '../components/cards/WorkoutCard';
import { DateCalendar } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { getWorkouts } from '../api';
import { CircularProgress, circularProgressClasses } from '@mui/material';
import { useDispatch }  from "react-redux"; 


const Container = styled.div`
  display: flex;
  height: 100%;
  flex: 1;
  justify-content: center;
  overflow-y: scroll;
  padding: 22px 0px;
`;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  gap: 22px;
  padding: 0px 16px;
  max-width: 1600px;
  @media (max-width: 600px) {
    gap: 12px;
    flex-direction: column;
  }
`;
const Left = styled.div`
  display: flex;
  flex: 0.2;
  height: fit-content;
  padding: 18px;
  border-radius: 14px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.text_primary + 15};
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
const Right = styled.div`
  display: flex;
  flex: 1;
 `;

 const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 0px 16px;
  @media (max-width: 600px) {
    gap: 12px;
  }
 `;
 const SecTitle = styled.div`
  font-size: 22px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
 `;
 const CardWrapper = styled.div`
  display: flex;
  gap: 22px;
  padding: 22px 0px;
  flex-wrap: wrap;
  margin-bottom: 100px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;


const Workout = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState();
  const [todaysWorkouts, setTodaysWorkouts] = useState([]);

  const getTodaysWorkout = async () => {
    setLoading(true);
    const token = localStorage.getItem("fittrack-app-token");
    await getWorkouts(token, date ? `?date=${date}`: "").then((res) => {
      setTodaysWorkouts(res?.data?.todaysWorkouts);
      console.log(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getTodaysWorkout();
  }, [date])

  return (
    <Container>
      <Wrapper>
        <Left>
          <Title>Select Date</Title>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar onChange={(e) => setDate(`${e.$M +1}/${e.$D}/${e.$Y}`)}/>
          </LocalizationProvider>
        </Left>
        <Right>
          <Section>
            <SecTitle>Todays Workout</SecTitle>
            { loading ? <CircularProgress/> : 
            <CardWrapper>
              {todaysWorkouts.map((workout)=> {
                <Workout workout={workout}/>
              })}
            </CardWrapper>
            }
          </Section>
          
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Workout
