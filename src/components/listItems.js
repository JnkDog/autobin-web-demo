import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MapIcon from '@material-ui/icons/Map';
import SettingsIcon from '@material-ui/icons/Settings';
import PeopleIcon from '@material-ui/icons/People';
import {Link} from 'react-router-dom';

const style = {
  textDecoration:'none',
  backgroundColor: '#eee'
}
 
export const mainListItems = (
  // ListItem button link is added after
  <div>
    <Link style={{ textDecoration:'none', color:'unset'}} to={'/dashboard'}>
      <ListItem button>
        <ListItemIcon>      
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
    
      </ListItem>
    </Link>
   
    <Link style={{ textDecoration:'none', color:'unset'}} to={'/mapinfo'}>
      <ListItem button>
        <ListItemIcon>
          <MapIcon />
        </ListItemIcon>
        <ListItemText primary="MapInfo" />
      </ListItem>
    </Link>

    <ListItem button>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>About us</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Contributor" />
    </ListItem>
    
  </div>
);