/* @flow */
import React, { PureComponent } from 'react';
import styled from 'styled-components';

import H3 from 'components/H3';
import Button from 'components/Button';

export type Product = {
  productName: string,
  range: boolean,
  minDurationMinutes: string,
  maxDurationMinutes?: string
}
export type Props = {
  services: Array<{
    name: string,
    products: Array<Product>
  }>
}

export const ProductList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const ProductDetails = styled.li`
  display: flex;
  justify-content: spaced-out;
  border-bottom: 1px solid #555;
  box-sizing: border-box;
  padding: 8px 0;
`;

export const ServicesList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const ServiceName = styled.h4`
  margin-top: 40px;
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  font-size: 1.4em;
  font-family: "Marcellus SC",serif;
`;

export const Service = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ProductName = styled.div`
  flex: 1;
  position: relative;
`;

export default class Services extends PureComponent<Props> {
  renderProducts = (products: Array<Product>) => {
    return products.map((product) => {
      const { productName } = product;
      return (
        <ProductDetails key={productName}>
          <ProductName>
            { productName }
          </ProductName>
          <Button>
            Book
          </Button>
        </ProductDetails>
      );
    });
  }

  renderServices = () => {
    const { services } = this.props;
    return services.map((service) => {
      const { name, products } = service;
      return (
        <Service key={name}>
          <ServiceName>
            { name }
          </ServiceName>
          <ProductList>
            { this.renderProducts(products) }
          </ProductList>
        </Service>
      );
    });
  }

  render = () => {
    return (
      <div>
        <H3>
          Services & Prices
        </H3>
        <ServicesList>
          { this.renderServices() }
        </ServicesList>
      </div>
    );
  }
}
