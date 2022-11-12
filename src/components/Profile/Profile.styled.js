import styled from 'styled-components';

export const ProfileCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${p => p.theme.space[4]}px;

  padding-top: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.white};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);

  border-radius: ${p => p.theme.radii.normal};
`;

export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.space[3]}px;
`;

export const ProfileImg = styled.img`
  border-radius: ${p => p.theme.radii.round};
  overflow: hidden;
`;

export const NameUser = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Tag = styled.p`
  color: ${p => p.theme.colors.secondaryText};
  font-size: ${p => p.theme.fontSizes.m};
`;

export const Location = styled.p`
  color: ${p => p.theme.colors.secondaryText};
  font-size: ${p => p.theme.fontSizes.m};
`;

export const StatsList = styled.ul`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[5]}px;
  padding: ${p => p.theme.space[4]}px;
  border-top: ${p => p.theme.borders.normal};
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
`;

export const StatLabel = styled.span`
  color: ${p => p.theme.colors.secondaryText};
`;

export const StatQuentity = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
`;
