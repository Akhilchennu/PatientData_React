import React, { useState } from 'react';
import validator from 'validator';
import Upload from '../components/Upload';
import { Input, Caption, Label, Dropdown, Button } from '@innovaccer/design-system';
import { service } from '../services/service';


const AddPatient = (props) => {
    const [userName, setUserName] = useState('');
    const [nameError, setNameError] = useState();
    const [userAge, setUserAge] = useState();
    const [ageError, setAgeError] = useState();
    const [getGender, setGender] = useState();
    const [genderError, setGenderError] = useState();
    const [getContact, setContact] = useState();
    const [contactError, setContactError] = useState();
    const [errorMessage, setErrorMessage] = useState();
    const [patientId,setPatientId]=useState();
    const [patientIdError,setPatientIdError]=useState();

    const changeData = (event) => {
        if(event.target.name === "patientid"){
            setPatientId(event.target.value);
            setPatientIdError()
        }else if (event.target.name === 'username') {
            setUserName(event.target.value);
            setNameError();
        } else if (event.target.name === 'userage') {
            setUserAge(event.target.value);
            setAgeError();
        } else if (event.target.name === 'usercontact') {
            setContact(event.target.value);
            setContactError();
        }
        if (errorMessage) {
            setErrorMessage();
        }
    }

    const changeGender = (value) => {
        setGender(value);
        setGenderError();
    }

    const validateUserName = () => {
        if (userName === '' || !userName) {
            setNameError('please enter username');
        } else {
            const validName = validator.isAlpha(userName)
            if (!validName) {
                setNameError('name should have only alphabets');
            }
        }
    }
    const validateUserAge = () => {
        if (userAge === '' || !userAge) {
            setAgeError('please enter age');
        } else {
            const validName = validator.isNumeric(userAge)
            if (!validName) {
                setAgeError('age should be numeric');
            }
        }
    }
    
    const validatePatientId = () => {
        if (patientId === '' || !patientId) {
            setAgeError('please enter Id');
        } else {
            const validName = validator.isNumeric(patientId)
            if (!validName) {
                setAgeError('Id should be numeric');
            }
        }
    }
    
    const validateContact = () => {
        if (getContact === '' || !getContact) {
            setContactError('please enter phone number');
        } else {
            const validName = validator.isMobilePhone(getContact)
            if (!validName) {
                setContactError('Please enter valid phone number');
            }
        }
    }

    const validateUserGender = () => {
        if (!getGender || getGender === '') {
            setGenderError('Please select gender')
        }
    }

    const onSubmit = () => {
        if (userName && userAge && getGender && getContact && patientId) {
            const patientDetails = [{
                name: userName,
                age: userAge,
                gender: getGender,
                phonenumber: getContact,
                patientid:patientId
            }];
            const dataResponce = service.addPatients(patientDetails);
            dataResponce.then((response) => {
                if (response.success) {
                    setErrorMessage();
                } else {
                    setErrorMessage('Something went wrong.Try again');
                }
            })
        } else {
            setErrorMessage("please enter required fields")
        }
    }

    return (
        <div className="App-header">
            <div className="paper">
                <h3 className="header">Add patient details</h3>
                <div className="margin12">
                    <Label withInput required className="lable-font">
                        Patient Id 
                    </Label>
                    <Input name="patientid" required type="text"
                        value={patientId}
                        maxLength={6}
                        error={patientIdError ? true : false}
                        onChange={(event) => changeData(event)}
                        onBlur={() => validatePatientId()} />
                    {patientIdError ? <Caption withInput error>
                        {patientIdError}
                    </Caption> : null}
                </div>
                <div className="margin12">
                    <Label withInput required className="lable-font">
                        Name
                    </Label>
                    <Input name="username" required type="text"
                        value={userName}
                        error={nameError ? true : false}
                        onChange={(event) => changeData(event)}
                        onBlur={() => validateUserName()} />
                    {nameError ? <Caption withInput error>
                        {nameError}
                    </Caption> : null}
                </div>
                <div className="margin12">
                    <Label withInput required className="lable-font">
                        Age
                    </Label>
                    <Input name="userage" required type="number"
                        value={userAge}
                        error={ageError ? true : false}
                        onChange={(event) => changeData(event)}
                        onBlur={() => validateUserAge()} />
                    {ageError ? <Caption withInput error>
                        {ageError}
                    </Caption> : null}
                </div>
                <div className="margin12">
                    <Label withInput required className="lable-font">
                        Gender
                    </Label>
                    <br />
                    <Dropdown name="userGender" closeOnSelect value={getGender}
                        error={genderError ? true : false}
                        options={[{ icon: 'events', label: 'Male', subInfo: 'subInfo', value: 'Male' },
                        { icon: 'events', label: 'Female', subInfo: 'subInfo', value: 'Female' }]} triggerOptions={{}}
                        onChange={(value) => changeGender(value)}
                        onBlur={() => validateUserGender()} />
                    {genderError ? <Caption withInput error>
                        Pick a strong, unique password
                    </Caption> : null}
                </div>
                <div className="margin12">
                    <Label withInput required className="lable-font">
                        Phone Number
                    </Label>
                    <Input name="usercontact" required type="text" value={getContact}
                        onChange={(value) => changeData(value)}
                        onBlur={() => validateContact()}
                        error={contactError ? true : false} />
                    {contactError ? <Caption withInput error>
                        {contactError}
                    </Caption> : null}
                </div>
                {errorMessage ? <div className="lable-font margin12 error">{errorMessage}</div> : null}
                <div className="submitButton">
                    <Button appearance="primary" size="regular"
                        onClick={() => onSubmit()} >
                        Submit
                </Button>
                </div>
                <h6 className="solid"><span>Or upload document</span></h6>
                <div>
                    <Upload />
                </div>
                <div className="margin12 lable-font"><a href="/">Click here</a><span> to search for patients information</span></div>
            </div>
        </div>
    )
}

export default AddPatient;