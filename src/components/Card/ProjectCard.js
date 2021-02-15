import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import giticon from '../../git.jpg';
/*
This component is redundant
and can be deleted by togetger
with the MediaCard.js.
------------------------------
dont have enough to optimize...
*/
const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 290,
    height: 240
  },
  media: {
    height: 90,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  const handleClick = () => {
    window.open("https://github.com/JnkDog/autobin/wiki");
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          onClick={handleClick}
          className={classes.media}
          image={giticon}
          title="Git Document"
        />
        <CardContent>
          <Typography gutterBottom color="primary" variant="h5" component="h2">
            Project Documentation
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Github link about this project... 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary" onClick={handleClick}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
