import React from 'react';
import Typography from '@material-ui/core/Typography';

const items = [
  {
    name: 'food',
    contents: []
  },
  {
    name: 'drinks',
    contents: []
  }
];

const Items = ({ match }) => {

  const item = items.find(({ name }) => name === match.params.name);

  return (
    <div>
       <Typography variant='h2' gutterBottom>
        {item.name}
      </Typography>
    </div>
  )
};

export default Items;
