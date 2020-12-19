import React, { useEffect, useState } from 'react';
import { service } from '../services/service';
import ViewPatientinfo from '../components/ViewPatientInfo'

const PatientInfo = () => {
    const [patientData, setPatientsData] = useState([])
    const [error, setErrorMessage] = useState()

    useEffect(() => {
        const patientId = window.location.pathname.split('/')[2] || undefined
        if (patientId) {
            const dataResponce = service.getPatientInfo(patientId);
            dataResponce.then((response) => {
                if (response.success) {
                    if (response.error) {
                        setErrorMessage(response.error);
                        setPatientsData([])
                    } else {
                        setPatientsData(response.patientInfo);
                        response.patientInfo.length>0?setErrorMessage():setErrorMessage('Patient Details Not Found');
                    }
                } else {
                    setErrorMessage('Patient Details Not Found');
                }
            })
        } else {
            setErrorMessage('Something went wrong..');
        }
    }, [])

    return (
        <div>
            <div className="margin12 lable-font center"><a href="/">Click here</a><span> to search for patients</span></div>
            <div className="margin12 lable-font center"><a href="/addpatient">Click here</a><span> to add patient information</span></div>
            {patientData.length > 0 ? <div>
                <div className="margin12 lable-font center"><b>Patient Details</b></div>
                <div className="patientInfo" >
                    <ViewPatientinfo patientInfo={patientData[0]} />
                </div></div> : error ? <div className="margin12 lable-font center"><b>{error}</b></div> : null}
        </div>
    )
}

export default PatientInfo;