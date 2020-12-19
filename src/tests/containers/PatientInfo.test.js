import React from 'react';
import { shallow } from 'enzyme';
import { render, unmountComponentAtNode } from "react-dom";
import PatientInfo from '../../containers/PatientInfo';
import { act } from "react-dom/test-utils";
import { screen } from '@testing-library/react';

const wrapper = shallow(<PatientInfo />);

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

test('should render PatientInfo component', () => {
    expect(wrapper).toMatchSnapshot();
});

it('renders Add patient details element', () => {
    const body = wrapper.childAt(1);
    expect(body.childAt(1).text()).toBe(" to add patient information")
    expect(body.childAt(0).prop("href")).toBe("/addpatient")
});

it('renders Add patient details element', () => {
    const body = wrapper.childAt(0);
    expect(body.childAt(1).text()).toBe(" to search for patients")
    expect(body.childAt(0).prop("href")).toBe("/")
});

it('should not render ViewPatientDetails Component if patientId is not there', async () => {
    // const testData = {
    //     "name": "Akhil",
    //     "age": "24",
    //     "gender": "Male",
    //     "phonenumber": "7708195971",
    //     "patientid": "1"
    // }
    // const fakeUser = { "success": true, "patientInfo": [{ "_id": "5fdd986ce1f48e12d0babcdb", "name": "Akhil", "age": "24", "gender": "Male", "phonenumber": "7708195971", "patientid": "1", "__v": 0 }] }
    // jest.spyOn(global, "fetch").mockImplementation(() =>
    //     Promise.resolve({
    //         json: () => Promise.resolve(fakeUser)
    //     })
    // );
    // await waitFor(() => {
    //     expect(wrapper.containsMatchingElement(<ViewPatientDetails patientInfo={testData} />)).toEqual(true);
    // })
    act(() => {
        render(<PatientInfo />, container);
    });
    const linkElement = screen.getByText(/Something went wrong../i);
    expect(linkElement).toBeInTheDocument()
})