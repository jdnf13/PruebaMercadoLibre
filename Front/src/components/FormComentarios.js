import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';


function FormComentarios(props) { 


  const agregarActions = (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const website = document.getElementById("lastname").value;
    const comentario = document.getElementById("comentario").value;
    console.log(name,email,website,comentario);
    const data = {
      "email":email,
      "Nombre":name,
      "Website":website,
      "Comentario":comentario
    }
    if(localStorage.getItem('tipoRequest') && localStorage.getItem('tipoRequest') === 'PUT'){
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      };
      fetch('http://localhost:3000/', requestOptions)
          .then(response => response.json())
          .then(data => successData(data));  
    }else{
      const requestOptions2 = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      };
      fetch('http://localhost:3000/', requestOptions2)
          .then(response => response.json())
          .then(data => successData(data)); 
    }
      
  }

  const successData = (data) => {
      alert(data.mesaje);
      window.location.reload();
      if(localStorage.getItem('tipoRequest')){
       localStorage.removeItem('tipoRequest');
      }
  }

    return (
        <Container>
          <Grid container>
          
            <Grid item md={12}>
            <FormControl>
              <TextField id="email" type='email' aria-describedby="email-helper"  variant="outlined" value={props.email} />
              <FormHelperText id="email-helper">Tu email</FormHelperText>
            </FormControl>
            </Grid>
            <Grid item md={12}>
            <FormControl>
              <TextField id="name" type='name' aria-describedby="name-helper"  variant="outlined" value={props.name}/>
              <FormHelperText id="name-helper">Nombres y Apellidos</FormHelperText>
            </FormControl>
            </Grid>
            <Grid item md={12}>
              <FormControl>
                <TextField id="lastname" type='lastname' aria-describedby="lastname-helper"  variant="outlined" value={props.website}/>
                <FormHelperText id="lastname-helper">Web</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item md={12}>              
              <FormControl>
                <TextField id="comentario" type='email' aria-describedby="email-helper" variant="outlined" value={props.comentario}/>
                <FormHelperText id="email-helper">Dejanos tu comentario</FormHelperText>
              </FormControl>
            </Grid>
          <Grid item md={6}> 
            <Button variant='contained' color='primary' onClick={agregarActions}>Guardar</Button>    
          </Grid>          
          </Grid>
        </Container>  
    );
}

export default FormComentarios