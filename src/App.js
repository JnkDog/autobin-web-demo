import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/Button';
import SaveIcon from "@material-ui/icons/Save";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from "@material-ui/core/TextField";
import { makeStyles, ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { orange, green } from '@material-ui/core/colors';
import "fontsource-roboto";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Dashboard from './components/Dashboard/Dashboard';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #333, #999)',
        border: 0,
        borderRadius: 15,
        color: 'white',
        padding: '10px 20px'
    }
});

function ButtonStyled() {
    const classes = useStyles();
    return <Button className={classes.root}>Test Button</Button>
}

const theme = createMuiTheme({
    palette: {
        primary: {
            main: orange[500],
        },
        secondary: {
            main: green[500],
        }
    }
})

const App = () => {
    const [checked, setChecked] = React.useState(true);

    return(
        <Dashboard />
        // <div> 
        //     <Typography variant="h2" component="div">
        //         Hello World
        //     </Typography>
        //     <ThemeProvider theme={theme}>
        //         <Container maxWidth="md">
        //             <ButtonStyled />
        //             <TextField />
        //             <FormControlLabel 
        //                 control={
        //                     <Checkbox
        //                     checked={checked}
        //                     onChange={(e) => setChecked(e.target.checked)}
        //                 />}
        //                 label="Testing"
        //             />
                    
                

        //             <ButtonGroup>
        //                 <Button 
        //                 startIcon={<SaveIcon />}
        //                 onClick={() => alert('hello')} 
        //                 variant='contained' 
        //                 color='secondary'>
        //                     save
        //                 </Button> 

        //                 <Button 
        //                 startIcon={<SaveIcon />}
        //                 onClick={() => alert('hello')} 
        //                 variant='contained' 
        //                 color='primary'>
        //                 discard
        //                 </Button>           
        //             </ButtonGroup>  
        //         </Container>
               
        //     </ThemeProvider>  
    
        //     {/* <Line /> */}
        // </div>
    );   
}

export default App;