import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Contact from './../Contact';

configure({ adapter: new Adapter() });
