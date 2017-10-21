/* @flow */
import React, { PureComponent } from 'react';
import styled from 'styled-components';

export type Props = {
  +description: string,
  +products: Array<{|
    +image: string,
  |}>,
  +workingHours: Array<{
    +day: string,
    +open: boolean,
    +opensAt: string,
    +closesAt: string,
  }>,
}

export const Description = styled.div`

`;

export const ProductList = styled.ul`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const Product = styled.li`

`;

export const Contacts = styled.div`
  display: flex;
`;
export const ContactDetails = styled.div`

`;
export const Phone = styled.div`

`;
export const Address = styled.div`

`;
export const Email = styled.div`

`;
export const TimeTable = styled.ul`

`;
export const WorkTime = styled.ol`

`;


export default class Home extends PureComponent<Props> {
  renderProductList = () => {
    const { products } = this.props;
    return (
      <ProductList>
        {products.map(product => <Product key={product.image} />)}
      </ProductList>
    );
  }

  renderTimeTable = () => {
    const { workingHours } = this.props;
    return (
      <TimeTable>
        { workingHours.map(time => <WorkTime key={time.day} />) }
      </TimeTable>
    );
  }

  renderContactDetails = () => {
    return (
      <ContactDetails>
        <Address />
        <Phone />
        <Email />
      </ContactDetails>
    );
  }

  renderContacts = () => {
    return (
      <Contacts>
        {this.renderContactDetails()}
        {this.renderTimeTable()}
      </Contacts>
    );
  }

  render() {
    const { description } = this.props;
    return (
      <div>
        <Description>
          { description }
        </Description>
        {this.renderProductList()}
        {this.renderContacts()}
      </div>
    );
  }
}
