import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from '../../containers/Dashboard';
import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import TableData from '../../components/Table';
import { waitFor } from '@testing-library/react'

const wrapper = shallow(<Dashboard />);

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('should render component', () => {
    act(() => {
        render(<Dashboard />, container);
    });
});

it('renders Header', () => {
    const body = wrapper.childAt(0);
    expect(body.text()).toBe("Patient Information")
});

it('renders Add patient details element', () => {
    const body = wrapper.childAt(1);
    expect(body.childAt(0).childAt(1).text()).toBe(" to add patient information")
    expect(body.childAt(0).childAt(0).prop("href")).toBe("/addpatient")
});
