import React from 'react';
import styled from 'styled-components';
import { BarChart } from '@mui/x-charts';

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

const WeeklyStatCard = ({ data }) => {
  return (
    <Card>
      <Title>Weekly Calories Burned</Title>
      {data?.totalWeeksCaloriesBurnt && (
        <BarChart
        data = {data?.totalWeeksCaloriesBurnt}
          xAxis={[
            {scaleType: 'band', data: data?.totalWeeksCaloriesBurnt.weeks},
          ]}
          series={[{data: data?.totalWeeksCaloriesBurnt.caloriesBurned}]}
          height={300}
        />
      )}
    </Card>
  )
}

export default WeeklyStatCard
