// @flow
import React, { PureComponent } from 'react';
import styled from 'styled-components';

const TeamMemberStyled = styled.div`
  display: flex;
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0;
  }
`;
export const Profile = styled.div`
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
`;
export const Profession = styled.div`
`;
export const Description = styled.div`
  font-family: "Marcellus SC",serif;
  font-size: 1.2em;
  color: #999;
`;
export const Name = styled.div`
  font-family: "Marcellus SC";
  font-size: 1.75rem;
  font-weight: 500;
  line-height: 1.1;
`;

const INITIALS_SIZE = '120px';
export const Initials = styled.div`
  font-size: 2.25em;
  color: #d9d9d9;
  font-family: "Playfair Display",serif;
  border-radius: 50%;
  height: ${INITIALS_SIZE};
  width: ${INITIALS_SIZE};
  min-width: ${INITIALS_SIZE};
  min-height: ${INITIALS_SIZE};
  background-color: #777;
  line-height: ${INITIALS_SIZE};
  text-align: center;
`;
export const Image = styled.img`
  height: ${INITIALS_SIZE};
  width: ${INITIALS_SIZE};
  border-radius: 50%;
`;

export type Props = {
  name: string,
  initials: string,
  image: ?string,
  profession: ?string,
  description: ?string,
}

class TeamMember extends PureComponent<Props> {
  renderImage = () => {
    const { image, initials } = this.props;
    return image ?
      <Image src={image} /> :
      <Initials>{initials}</Initials>;
  }

  render = () => {
    const {
      name,
      description,
      profession,
    } = this.props;
    return (
      <TeamMemberStyled>
        {this.renderImage()}
        <Profile>
          <Name>
            {name}
          </Name>
          {description && (
            <Description>
              {description}
            </Description>
          )}
          {profession && (
            <Profession>
              {profession}
            </Profession>
          )}
        </Profile>
      </TeamMemberStyled>
    );
  };
}

export default TeamMember;
