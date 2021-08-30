import React ,{useState} from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import GoogleLogin, { GoogleLogout } from 'react-google-login';


const Login=()=>{

    const paperStyle={padding :50,height:'50vh',width:280, margin:"150px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    const [userid,setUser]=useState('');
    const [password,setPassword]=useState('');
    const [login,setLogin]=useState(false);
    const [logincon,setLogincon]=useState(false);
    const clientId='812306177740-2oijq7fpjrl3asimb4jf93q4r2m0ve5e';
    const Signin=(e)=>{
     
      console.log(userid);
      setLogincon(true);
      if(userid=='')
      {
        alert('Enter user id');
        setLogincon(false);
      }
      if(password=='')
      {
        alert('Please Enter Password')
        setLogincon(false);
      }
      
    }
    const fbsign=()=>{
      console.log('1');
      alert('Please Try Another Way for Login');
    }
    const onLoginSuccess = (res) => {
      console.log('Login Success:', res.profileObj);
      setLogin(true);
      console.log(login);
  };
  const onLoginFailure = (res) => {
      console.log('Login Failed:', res);
      console.log(login);
  };
  const gsign={fontWeight:3000}
 
    return(
      
        <Grid >
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField value={userid} onChange={e => setUser(e.target.value)} label='Username' placeholder='Enter username' fullWidth/>
                <TextField value={password}  onChange={e => setPassword(e.target.value)} label='Password' placeholder='Enter password' type='password' fullWidth />
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button  onClick={Signin} type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Grid align='center'>
                <h2>Or</h2>
                </Grid>
                <Grid>
                <GoogleLogin style={avatarStyle}
                
                    clientId={clientId}
                    buttonText={<Grid style={gsign}><b>Sign In with Google</b></Grid>}
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
                </Grid>
                <Grid>
                <div  onclick={fbsign} class="fb-login-button" data-width="" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false"></div>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default Login