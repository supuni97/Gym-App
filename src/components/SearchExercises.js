import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

import allIcon from '../assets/images/fullbody.jpeg';
import uarmsIcon from '../assets/images/uarm.jpeg';
import ulegIcon from '../assets/images/uleg.jpeg';
import larmIcon from '../assets/images/larm.jpeg';
import llegIcon from '../assets/images/lleg.jpeg';
import cardioIcon from '../assets/images/cardio.jpeg';
import neckIcon from '../assets/images/neck.jpeg';
import shouldersIcon from '../assets/images/shoulder.jpeg';
import waistIcon from '../assets/images/waist.jpeg';
import backIcon from '../assets/images/back.jpeg';
import chestIcon from '../assets/images/chest.jpeg';


const bodyPartImages = {
  all: allIcon,
  'upper arms': uarmsIcon,
  back: backIcon,
  chest: chestIcon,
  'upper legs': ulegIcon,
  'lower legs':llegIcon,
  'lower arms':larmIcon,
  cardio:cardioIcon,
  neck:neckIcon,
  waist:waistIcon,
  shoulders: shouldersIcon,
};

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

        // Map the fetched body parts to include their image URLs
        const bodyPartsWithImages = ['all', ...bodyPartsData].map((part) => ({
          id: part,
          imageUrl: bodyPartImages[part] || 'path/to/default.png', // Provide a default image URL if not found
        }));

        setBodyParts(bodyPartsWithImages);
        console.log(bodyPartsWithImages); // Log the array to verify its contents
      } catch (error) {
        console.error('Failed to fetch body parts data:', error);
      }
    };

    fetchExercisesData();
  }, []);



  
  const handleSearch = async () => {
    if (search) {
      try {
        const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

        const searchedExercises = exercisesData.filter(
          (item) => item.name.toLowerCase().includes(search)
                 || item.target.toLowerCase().includes(search)
                 || item.equipment.toLowerCase().includes(search)
                 || item.bodyPart.toLowerCase().includes(search),
        );

        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

        setSearch('');
        setExercises(searchedExercises);
      } catch (error) {
        console.error('Failed to fetch exercises data:', error);
      }
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
