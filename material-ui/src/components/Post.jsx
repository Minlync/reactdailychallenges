import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { pink, purple,red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Checkbox } from '@mui/material'
import { FavoriteBorder } from '@mui/icons-material';


const Post = () => {
    
    const [expanded, setExpanded] = React.useState(false); // Initialize state
    
    const handleExpandClick = () => { // Define function
      setExpanded(!expanded);
    };

  return (
    <Box  flex={4} p={2} >
     {/* card 1 */}
     <Card >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "pink"}} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Pets"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        width="100%"
        height="100%"
        image="https://side-out.org/wp-content/uploads/2021/07/5200.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Dogs have always held a special place in my heart and in my home. 
        When I left to attend college, I felt incomplete without the company of my two dogs,
         Sherlock and Agatha
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<FavoriteIcon sx={{color:"red"}}/>} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
   
      </CardActions>
 
      </Card> 

      {/* card2 */}
      <Card >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red"}} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Pets"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        width="100%"
        height="100%"
        image="https://side-out.org/wp-content/uploads/2021/07/5200.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Dogs have always held a special place in my heart and in my home. 
        When I left to attend college, I felt incomplete without the company of my two dogs,
         Sherlock and Agatha
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<FavoriteIcon sx={{color:"red"}}/>} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
   
      </CardActions>
 
      </Card> 
    
     </Box>
  )
}

export default Post;
