import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PageNotFound from '../containers/PageNotFound';
import AddPatient from '../containers/AddPatient';
import Dashboard from '../containers/Dashboard';
import PatientInfo from '../containers/PatientInfo';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/addpatient' component={AddPatient} />
        <Route path='/patients' component={PatientInfo} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
