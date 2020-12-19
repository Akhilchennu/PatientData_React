import React from 'react';
import { shallow } from 'enzyme';
import AddPatient from '../../containers/AddPatient';
import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Upload from '../../components/Upload';

const wrapper = shallow(<AddPatient />);

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

it('renders Header', () => {
    act(() => {
        render(<AddPatient />, container);
    });
    const linkElement = screen.getByText(/Add patient details/i);
    expect(linkElement).toBeInTheDocument();
});

it('render patientId field', () => {
    const body = wrapper.children().childAt(1);
    const patientIdLable = body.childAt(0).dive().childAt(0).dive();
    expect(patientIdLable.text()).toBe("Patient Id");
    const InputComponent=body.childAt(1)
    const inputElement = body.childAt(1).dive().childAt(0);
    const onMockChange = jest.fn();
    let event = { target: { value: '5' } };
    act(() => {
        inputElement.simulate('change', event);
        inputElement.simulate('blur');
    });
})

it('render Name field', () => {
    const body = wrapper.children().childAt(2);
    const nameLable = body.childAt(0).dive().childAt(0).dive();
    expect(nameLable.text()).toBe("Name");
    const InputComponent=body.childAt(1)
    const inputElement = body.childAt(1).dive().childAt(0);
    const onMockChange = jest.fn();
    let event = { target: { value: 'Hey' } };
    act(() => {
        inputElement.simulate('change', event);
        inputElement.simulate('blur');
    });
})

it('render Age field', () => {
    const body = wrapper.children().childAt(3);
    const nameLable = body.childAt(0).dive().childAt(0).dive();
    expect(nameLable.text()).toBe("Age");
    const InputComponent=body.childAt(1)
    const inputElement = body.childAt(1).dive().childAt(0);
    const onMockChange = jest.fn();
    let event = { target: { value: '24' } };
    act(() => {
        inputElement.simulate('change', event);
        inputElement.simulate('blur');
    });
})

it('render Age field', () => {
    const body = wrapper.children().childAt(4);
    const nameLable = body.childAt(0).dive().childAt(0).dive();
    expect(nameLable.text()).toBe("Gender");
    const InputComponent=body.childAt(2)
    const inputElement = body.childAt(2).dive();
    const onMockChange = jest.fn();
    let value ="male";
    act(() => {
        inputElement.simulate('change', value);
        inputElement.simulate('blur');
    });
})
it('render Contact field', () => {
    const body = wrapper.children().childAt(5);
    const nameLable = body.childAt(0).dive().childAt(0).dive();
    expect(nameLable.text()).toBe("Phone Number");
    const InputComponent=body.childAt(1)
    const inputElement = body.childAt(1).dive().childAt(0);
    const onMockChange = jest.fn();
    let event = { target: { value: '24' } };
    act(() => {
        inputElement.simulate('change', event);
        inputElement.simulate('blur');
    });
})

it('render submit button', () => {
    const body = wrapper.children().childAt(6).childAt(0);
    expect(body.dive().text()).toBe('Submit')
    const inputElement = body.dive();
    act(() => {
        inputElement.simulate('click');
        inputElement.simulate('blur');
    });
})

it('should render link to redirect',()=>{
    act(() => {
        render(<AddPatient />, container);
    });
    const linkElement = screen.getByText(/to search for patients information/i);
    expect(linkElement).toBeInTheDocument();
})

it('should render Upload Component',()=>{
    expect(wrapper.containsMatchingElement(<Upload/>)).toEqual(true);
})


