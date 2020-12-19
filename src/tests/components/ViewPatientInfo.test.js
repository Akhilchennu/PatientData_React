import React from 'react';
import { shallow } from 'enzyme';
import ViewPatientInfo from '../../components/ViewPatientInfo';

const testData = {
    "name": "Akhil",
    "age": "24",
    "gender": "Male",
    "phonenumber": "7708195971",
    "patientid": "1"
}
const wrapper = shallow(<ViewPatientInfo patientInfo={testData}/>);

test('should render ViewPatientInfo', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render five patient details',()=>{
    const table=wrapper.children()
    const tableRows=table.children().children()
    expect(tableRows.length).toBe(5);
});

test('should render patient id',()=>{
    const table=wrapper.children()
    const tableRows=table.children().children();
    tableRows.contains('Patient Id');
    tableRows.contains(`${testData.patientid}`)
});

test('should render age',()=>{
    const table=wrapper.children()
    const tableRows=table.children().children();
    tableRows.contains('Age');
    tableRows.contains(`${testData.age}`)
});

test('should render Name',()=>{
    const table=wrapper.children()
    const tableRows=table.children().children();
    tableRows.contains('Name');
    tableRows.contains(`${testData.name}`)
});

test('should render Gender',()=>{
    const table=wrapper.children()
    const tableRows=table.children().children();
    tableRows.contains('Gender');
    tableRows.contains(`${testData.gender}`)
});

test('should render phonenumber',()=>{
    const table=wrapper.children()
    const tableRows=table.children().children();
    tableRows.contains('Phone Number');
    tableRows.contains(`${testData.phonenumber}`)
});



