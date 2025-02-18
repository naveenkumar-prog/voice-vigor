import { FitnessCenterRounded, TimelapseRounded } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components';

const Card = styled.div`
  flex: 1;
  display: flex;
  min-width: 280px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.text_primary + 15};
  gap: 6px;
  flex-direction: column;
  @media (max-width: 600px) {
    gap: 12px;
    padding: 12px 16px;
  }
`;

const Category = styled.div`
    width: fit-content;
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};
    padding: 4px 10px;
    border-radius: 8px;
    background: ${({ theme }) => theme.primary + 20};
`;
const Name = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
`;
const Sets = styled.div`
    font-size: 15px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary};
    display: flex;
    gap: 6px;
`;
const Flex = styled.div`
    display: flex;
    gap: 16px;
`;
const Details = styled.div`
    font-size: 15px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_primary};
    align-items: center;
    display: flex;
    gap: 6px;
`;

const WorkoutCard = ({ workout }) => {
  return (
    <Card>
      <Category>#{workout?.category}</Category>
      <Name>{workout?.workoutName}</Name>
      <Sets>Count: {workout?.sets} sets x {workout?.reps} reps</Sets>
      <Flex>
        <Details>
            <FitnessCenterRounded sx={{ color: "inherit", fontSize: "20px" }} /> {workout?.weight} kg
        </Details>
        <Details>
            <TimelapseRounded sx={{ color: "inherit", fontSize: "20px" }} /> {workout?.duration} min
        </Details>
      </Flex>
    </Card>
  )
}

export default WorkoutCard
