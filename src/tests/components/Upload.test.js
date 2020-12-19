import React from 'react';
import { shallow } from 'enzyme';
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Upload from '../../components/Upload';
import { waitForElementToBeRemoved } from '@testing-library/react';

const wrapper = shallow(<Upload />);

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

test('should render Upload component', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should call file click event', () => {
    const body = wrapper;
    const fileElement = body.childAt(0);
    let event = {
        target: {
            files: [{
                lastModified: 1608313281722,
                name: "Book1.png",
                size: 8674,
                type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                webkitRelativePath: ""
            }]
        }
    }
    act(() => {
        fileElement.simulate('change', event);
    });
});

test('should call Upload Document Click event', () => {
    const body = wrapper;
    const fileElement = body.childAt(1);
    console.log(body.childAt(1).childAt(0).dive().debug())
    const buttonElement=body.childAt(1).childAt(0).dive();
    expect(buttonElement.text()).toBe("Upload Document");
});
