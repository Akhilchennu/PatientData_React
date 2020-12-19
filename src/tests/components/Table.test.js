import React from 'react';
import { shallow } from 'enzyme';
import Table from '../../components/Table';

const testData = [{ "_id": "5fdd986ce1f48e12d0babcdb", "name": "Akhil", "age": "24", "gender": "Male", "phonenumber": "7708195971", "patientid": "1", "__v": 0 }, { "_id": "5fdd988ee1f48e12d0babcdc", "name": "Akhil", "age": "24", "gender": "Male", "phonenumber": "7708195971", "patientid": "2", "__v": 0 }]
const wrapper = shallow(<Table patientInfo={testData} />);

test('should render ViewPatientInfo', () => {
    expect(wrapper).toMatchSnapshot();
});