import React from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';

import useStyles from './styles';

// dont used in this project
// cause adjusting CSS is fk
// grueling and dont know CSS!!!
export const BlogCard = React.memo(function BlogCard() {
  const styles = useStyles();
  const {
    button: buttonStyles,
    ...contentStyles
  } = useBlogTextInfoContentStyles();
  const shadowStyles = useOverShadowStyles();
  return (
    <Card className={clsx(styles.root, shadowStyles.root)}>
      <CardMedia
        className={styles.media}
        image={
          'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png'
        }
      />
      <CardContent>
        <TextInfoContent
          classes={contentStyles}
          overline={'15 Feb 2021'}
          heading={'What is AutoBin ?'}
          body={
            'A realtime project with nice web...'
          }
        />
        <Button className={buttonStyles}>Read more</Button>
      </CardContent>
    </Card>
  );
});

export default BlogCard