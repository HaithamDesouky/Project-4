import React from 'react';

import ProfileCard from '../../components/ProfilePage/ProfileCard';
import ProfileCoverPhoto from '../../components/ProfilePage/ProfileCoverPhoto';

import { Styled } from '../../styles/common';

const UserProfile = () => {
  const userInStorage = localStorage.getItem('user');
  let user = JSON.parse(userInStorage!);

  return (
    <Styled.Content>
      <Styled.Container>
        <ProfileCoverPhoto user={user} />
        <ProfileCard user={user} />
      </Styled.Container>
    </Styled.Content>
  );
};

export default UserProfile;
