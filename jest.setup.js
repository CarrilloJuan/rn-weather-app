import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

/**
 * Set up Enzyme to mount to DOM, simulate events,
 * and inspect the DOM in tests.
 */

configure({adapter: new Adapter()});
