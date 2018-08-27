import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from '../src/App';
import List from '../src/List';
import LocationPin from '../src/LocationPin';
import Map from '../src/Map';
import Menu from '../src/Menu';
import Notification from '../src/Notification';

Enzyme.configure({ adapter: new EnzymeAdapter() });


describe('App', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<App addresses={[]} />);
    expect(wrapper).toBeTruthy();
  });
  test('List renders without crashing', () => {
    const wrapper = shallow(<List listVisible />);
    expect(wrapper).toBeTruthy();
  });
  test('Location Pin renders without crashing', () => {
    const wrapper = shallow(<LocationPin addresses={[]} />);
    expect(wrapper).toBeTruthy();
  });
  test('Map renders without crashing', () => {
    const wrapper = shallow(<Map addresses={[]} />);
    expect(wrapper).toBeTruthy();
  });
  test('Menu renders without crashing', () => {
    const wrapper = shallow(<Menu switchView={() => {}} searchBarTyping={() => {}} />);
    expect(wrapper).toBeTruthy();
  });
  test('Notifitcation renders without crashing', () => {
    const wrapper = shallow(<Notification notification={{ message: null }} />);
    expect(wrapper).toBeTruthy();
  });
});
