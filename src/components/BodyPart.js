import React from 'react';
import { Stack, Typography } from '@mui/material';

const BodyPart = ({ item, bodyPart, setBodyPart, imageUrl }) => {
  return (
    <Stack 
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={bodyPart === item ? { 
        borderTop: '4px solid #FF2625', 
        background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({top:1800, left:100, behavior:'smooth' })
        }}
    >
      <img src={imageUrl} alt={item} style={{ width: '80vw',
             height:'160px',
             width:'160px',
              objectFit: 'cover',
              }} />
      <Typography fontSize="24px" fontWeight="bold" color="#3A1212" textTransform="capitalize">
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
