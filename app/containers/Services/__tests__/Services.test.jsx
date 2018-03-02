/* @flow */
import React from 'react';
import 'jest-styled-components';
import { shallow } from 'enzyme';

import H3 from 'components/H3';
import Services, {
  Service,
  ServiceName,
  ProductList,
  ProductName,
  ProductDetails,
} from '../Services';

import type { Props } from '../Services';


describe('Services Component', () => {
  let props: Props;

  beforeEach(() => {
    props = {
      services: [],
    };
  });

  it('should have an header', () => {
    const wrapper = shallow(<Services {...props} />);
    const headerDOM = wrapper.find(H3);

    expect(headerDOM).toHaveLength(1);
  });

  it('should have a Service', () => {
    props.services = [{
      name: 'Haircut',
      products: [],
    }];

    const wrapper = shallow(<Services {...props} />);

    const serviceDOM = wrapper.find(Service);
    expect(serviceDOM).toHaveLength(1);

    const serviceNameDOM = serviceDOM.find(ServiceName);
    expect(serviceDOM).toHaveLength(1);
    expect(serviceNameDOM.children().text()).toEqual(props.services[0].name);

    const productListDOM = serviceDOM.find(ProductList);
    expect(productListDOM).toHaveLength(1);
  });

  it('should have a services with products', () => {
    props.services = [{
      name: 'Haircut',
      products: [{
        productName: 'Short haircut',
        range: false,
        minDurationMinutes: '20',
        maxDurationMinutes: '60',
      }, {
        productName: 'Long haircut',
        range: false,
        minDurationMinutes: '40',
        maxDurationMinutes: '80',
      }],
    }];

    const wrapper = shallow(<Services {...props} />);
    const productDOM = wrapper.find(ProductDetails);
    expect(productDOM).toHaveLength(2);

    productDOM.forEach((product, index) => {
      expect(product.find(ProductName).children().text())
        .toEqual(props.services[0].products[index].productName);
    });
  });
});
