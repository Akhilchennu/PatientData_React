// const url='https://fetchpatientdatanode.herokuapp.com'

const url='http://localhost:3001'

const addPatients = (patientDetails) => {
    return fetch(`${url}/patients`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            patientData:patientDetails
        })
    }).then(response => response.json());
}

const getPatients = () => {
    return fetch(`${url}/patients`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(response => response.json()); 
}

const getPatientInfo = (patientid) => {
    return fetch(`${url}/patients/${patientid}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(response => response.json()); 
}


export const service = {
    addPatients,
    getPatients,
    getPatientInfo
};