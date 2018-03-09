/* @flow */
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import H3 from 'components/H3';

import WorkTime from './__components__/WorkTime';
import Contact from './__components__/Contact';

export type Props = {
  +image: string,
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
  +address: string,
  +phone: string,
  +email: string,
}

export const Description = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const ProductList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 40px;
  margin: 0px -12px 40px -12px;
`;

export const Product = styled.li`
  height: 101px;
  background-color: #f2f2f2;
  list-style-type: none;
  margin: 0 12px 0 12px;
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ProductImage = styled.img`
  filter: grayscale(1);
  max-width: calc(100% - 30px);
  max-height: calc(100% - 26px);
`;

export const Contacts = styled.div`
  display: flex;
`;
export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Phone = styled(Contact)`
`;
export const Address = styled(Contact)`
`;
export const Email = styled(Contact)`
`;
export const TimeTable = styled.ul`
  li {
    margin: 2px 0;
  }
`;
export const VenueImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
`;

export default class Home extends PureComponent<Props> {
  renderProductList = () => {
    const { products } = this.props;
    const productList = products.map((product) => {
      const { image } = product;
      return (
        <Product key={image}>
          <ProductImage src={image} />
        </Product>
      );
    });

    return (
      <div>
        <H3>
          Products we use
        </H3>
        <ProductList>
          { productList }
        </ProductList>
      </div>
    );
  }

  renderTimeTable = () => {
    const { workingHours } = this.props;
    return (
      <TimeTable>
        { workingHours.map(time => <WorkTime {...time} key={time.day} />)}
      </TimeTable>
    );
  }

  renderContactDetails = () => {
    const { address, email, phone } = this.props;
    return (
      <ContactDetails>
        <Address label="Address" contactInformation={address} />
        <Phone label="Phone" contactInformation={phone} />
        <Email label="Email" contactInformation={email} />
      </ContactDetails>
    );
  }

  renderContacts = () => {
    return (
      <div>
        <H3>
          Contact
        </H3>
        <Contacts>
          { this.renderContactDetails() }
          { this.renderTimeTable() }
        </Contacts>
      </div>
    );
  }

  render() {
    const { description, image } = this.props;
    return (
      <div>
        <VenueImage src={image} align="middle" />
        <Description>
          { description }
        </Description>
        { this.renderProductList() }
        { this.renderContacts() }
      </div>
    );
  }
}
