import PropTypes from 'prop-types';
import { Item, Online, NameFriend } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Online isOnline={isOnline}></Online>
      <img src={avatar} alt={name} width="48" />
      <NameFriend>{name}</NameFriend>
    </Item>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
