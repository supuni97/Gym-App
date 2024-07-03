import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';

const SimilarExersices = ({ targetMuscleExercises, equimentExercises }) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
      <Typography variant='h3'>
        Similar exercises
        <Stack direction='row' sx={{ p: '2', position: 'relative' }}>
          {targetMuscleExercises.length && <HorizontalScrollbar data={targetMuscleExercises} />}
        </Stack>
      </Typography>

    </Box>
  )
}

export default SimilarExersices;