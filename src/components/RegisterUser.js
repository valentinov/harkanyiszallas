import React, { useState, useEffect } from "react";
import { Grid, makeStyles } from '@material-ui/core';
import Controls from './controls/Controls';
import * as testServices from '../../src/Services/TestService';

const useStyle = makeStyles(theme => ({
  root: {
    '& .MuiFormControl-root': {
      width: '80%',
      margin: theme.spacing(1)
    }
  }
}))

const genderItems = [
  { id: 'male', title: 'Male' },
  { id: 'female', title: 'Female' }
]

const initialRegisterValues = {
  id: 0,
  firstName: '',
  lastName: '',
  email: '',
  gender: 'male',
  testId: '',
  vendegSzam: '',
  registerDate: new Date(),
  ceckboxTest: false,
};


const RegisterUser = () => {

  const [values, setValues] = useState(initialRegisterValues);

  const classes = useStyle();

  const handleInputChange = e => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })
  }


  return (
    <form className={classes.root}>

      <Grid container>
        <Grid item xs={6}>
          <Controls.Input name="lastName" label="Vezetéknév" value={values.lastName} onChange={handleInputChange} />
          <Controls.Input name="firstName" label="Kersztnév" value={values.firstName} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
            name="gender"
            label="Gender"
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems} />

          <Controls.Select

            name="testId"
            label="Szállás típusa"
            value={values.testId}
            onChange={handleInputChange}
            options={testServices.getTestCollection()}

          />


          <Controls.Select

            name="vendegSzam"
            label="Vendég"
            value={values.vendegSzam}
            onChange={handleInputChange}
            options={testServices.getVendegCollection()}

          />

          <Controls.Checkbox
            name="ceckboxTest"
            label="Checkbox Teszt"
            onChange={handleInputChange}
            value={values.ceckboxTest}
          />


        </Grid>
      </Grid>
    </form>);
}

export default RegisterUser;