import styled from 'styled-components';

export const SectionStatistic = styled.section`
  background-color: ${p => p.theme.colors.white};
  padding: ${p => p.theme.space[6]}px;
  border-radius: ${p => p.theme.radii.normal};
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const StatList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.space[4]}px;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[5]}px;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
`;

export const StatLabel = styled.span`
  color: ${p => p.theme.colors.secondaryText};
`;

export const StatPercentage = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
`;
