import React from 'react';
import styled from 'styled-components';
import TextInput from './TextInput';
import Button from './Button';

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
    padding: 16px;
  }
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const AddWorkout = ( {workout, setWorkout, addNewWorkout, buttonLoading} ) => {
  return (
    <Card>
      <Title>Add New Workout</Title>
      <TextInput 
        label="Workout"
        rows={10}
        textArea={true}
        value={workout}
        handelChange={e => setWorkout(e.target.value)}
        placeholder="Enter in this format:

        #Category
        - Workout Name
        - Sets
        - Reps
        - Weight
        - Duration
        "

      />

      <Button text={"Add Workout"} small onClick={() => addNewWorkout} isLoading={buttonLoading} isDisabled={buttonLoading} />
    </Card>
  )
}

export default AddWorkout
