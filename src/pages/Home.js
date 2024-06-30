import React, {useState} from 'react';
import { Box } from '@mui/material';
import ExerciseDetail from './ExerciseDetail';
import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <HeroBanner/>
      <SearchExercises  />
      <Exercises />
    </Box>
  )
}

export default Home