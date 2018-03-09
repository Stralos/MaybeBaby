/* @flow */
import React, { PureComponent } from 'react';
import styled from 'styled-components';

export const Label = styled.div`
`;
export const ContactInformation = styled.div`
`;

export type Props = {
  label: string,
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
    const { label } = this.props;
    return (
      <div>
        <Label>
          {label}
        </Label>
        <ContactInformation dangerouslySetInnerHTML={this.setContactInformation()} />
      </div>
    );
  }
}

export default Contact;
