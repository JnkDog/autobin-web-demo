import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Fab from '@material-ui/core/Fab';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { makeStyles } from '@material-ui/core';

import { mainListItems, secondaryListItems } from "../listItems";

const useStyles = makeStyles({
    list: {
      width: 240,
    },
});

const SideBarForMap = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        
        // avoid click event happen twice
        event.stopPropagation(); 

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
          className={clsx(classes.list)}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {mainListItems}
          </List>
          <Divider />
          <List>
            {secondaryListItems}
          </List>
        </div>
    );

    return (
        <div>
            <Fab
              variant="extended"
              size="small"
              color="primary"
              aria-label="add"
              className={classes.margin}
              onClick={toggleDrawer('left', true)}
            >
              <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
                {list('left')}
              </Drawer>
              <ChevronRightIcon />
            </Fab>
        </div>
      );
}

export default SideBarForMap;