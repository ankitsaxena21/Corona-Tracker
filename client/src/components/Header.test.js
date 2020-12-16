import React from 'react';
import Header from './Header';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter});

describe("Header testing", () => {
    test("render the title", () => {
        const wrapper =  shallow(<Header />);
        expect(wrapper.find("h2").text()).toContain("Covid-19 Tracker");
    })
})