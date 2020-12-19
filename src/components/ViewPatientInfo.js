import React from 'react';

const ViewPatientinfo = (props) => {
    const {age,gender,name,patientid,phonenumber}=props.patientInfo
    return (
        <div className="margin12 lable-font">
            <table>
                <tbody>
                    <tr>
                        <td><b>Patient Id</b></td>
                        <td>{patientid}</td>
                    </tr>
                    <tr>
                        <td ><b>Name</b></td>
                        <td>{name}</td>
                    </tr>
                    <tr>
                        <td ><b>Age</b></td>
                        <td>{age}</td>
                    </tr>
                    <tr>
                        <td ><b>Gender</b></td>
                        <td>{gender}</td>
                    </tr>
                    <tr>
                        <td ><b>Phone Number</b></td>
                        <td>{phonenumber}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ViewPatientinfo;