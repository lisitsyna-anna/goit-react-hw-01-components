import PropTypes from 'prop-types';
import {
  ProfileCard,
  ProfileDescription,
  ProfileImg,
  NameUser,
  Tag,
  Location,
  StatsList,
  StatsItem,
  StatLabel,
  StatQuentity,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileCard>
      <ProfileDescription>
        <ProfileImg
          src={avatar}
          alt="User avatar"
          className={avatar}
          width={150}
          height={150}
        />
        <NameUser>{username}</NameUser>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </ProfileDescription>

      <StatsList>
        <StatsItem>
          <StatLabel>Followers </StatLabel>
          <StatQuentity>{followers}</StatQuentity>
        </StatsItem>
        <StatsItem>
          <StatLabel>Views </StatLabel>
          <StatQuentity>{views}</StatQuentity>
        </StatsItem>
        <StatsItem>
          <StatLabel>Likes </StatLabel>
          <StatQuentity>{likes}</StatQuentity>
        </StatsItem>
      </StatsList>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
