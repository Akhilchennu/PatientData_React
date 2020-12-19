import React, { useEffect, useState } from 'react';
import { service } from '../services/service';
import TableData from '../components/Table'

const Dashboard = (props) => {
    const [patientsData, setPatientsData] = useState([]);
    const [error,setErrorMessage]=useState();

    useEffect(() => {
        const dataResponce = service.getPatients();
        dataResponce.then((response) => {
            if (response.success) {
                setPatientsData(response.patients);
                setErrorMessage();
            } else {
                setErrorMessage('Something went wrong.Try again');
            }
        })
    }, [])

    const getPatientData=(patientId)=>{
        props.history.push(`/patients/${patientId}`)
    }

        return (
            <div>
                <h1 className="center">Patient Information</h1>
                <div className="margin12 lable-font center"><b><a href="/addpatient">Click here</a><span> to add patient information</span></b></div>
                <div className="margin12 lable-font center">Find patient information below</div>
                <div className="margin12" >
                {patientsData.length>0?<TableData patientInfo={patientsData} getIndiInfo={(patientId)=>getPatientData(patientId)}/>:null}
                </div>
            </div>
        )
    }

export default Dashboard;