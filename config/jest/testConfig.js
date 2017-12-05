/* @flow */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

/**
 * Self executing function export.
 */
export default (() => {
  configure({ adapter: new Adapter() });
})();
