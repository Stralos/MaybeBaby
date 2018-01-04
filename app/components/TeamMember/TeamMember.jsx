// @flow
import React, { PureComponent } from 'react';
import styled from 'styled-components';

export const Profession = styled.div`
`;
export const Description = styled.div`
`;
export const Name = styled.div`
`;
export const Image = styled.img`
`;
export const Initials = styled.div`
`;

export type Props = {
  name: string,
  initials: string,
  image: ?string,
  profession: ?string,
  description: ?string,
}

class TeamMember extends PureComponent<Props> {
  isNotNullOrEmpty = (prop: ?string): boolean => {
    return !!prop;
  }

  renderImage = () => {
    const { image, initials } = this.props;
    return this.isNotNullOrEmpty(image) ?
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
      <div>
        {this.renderImage()}
        <div>
          <Name>
            {name}
          </Name>
          {this.isNotNullOrEmpty(description) && (
            <Description>
              {description}
            </Description>
          )}
          {this.isNotNullOrEmpty(profession) && (
            <Profession>
              {profession}
            </Profession>
          )}
        </div>
      </div>
    );
  };
}

export default TeamMember;
