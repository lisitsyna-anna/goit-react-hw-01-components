import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[5]}px;
  padding: ${p => p.theme.space[5]}px;

  background-color: ${p => p.theme.colors.white};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: ${p => p.theme.radii.normal};
`;

export const Online = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p =>
    p.isOnline ? p.theme.colors.green : p.theme.colors.red};
`;

export const NameFriend = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
`;
