import React from 'react';
import { FaUser } from 'react-icons/fa';
import styled from 'styled-components';

const ProfileBarContainer = styled.div`
`;

const ProfileBar = (props) => {
  return (
    <ProfileBarContainer>
      <FaUser color={props.color === undefined ? "white" : props.color }/>
    </ProfileBarContainer>
  );
};

export default ProfileBar;
