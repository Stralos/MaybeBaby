/* @flow */
import React, { PureComponent } from 'react';
import styled from 'styled-components';

export const Lable = styled.div`
`;
export const ContactInformation = styled.div`
`;

export type Props = {
  lable: string,
  contactInformation: string
}

class Contact extends PureComponent<Props> {
  setContactInformation = () => {
    const { contactInformation } = this.props;
    return {
      __html: contactInformation,
    };
  }

  render = () => {
    const { lable } = this.props;
    return (
      <div>
        <Lable>
          {lable}
        </Lable>
        <ContactInformation dangerouslySetInnerHTML={this.setContactInformation()} />
      </div>
    );
  }
}

export default Contact;
