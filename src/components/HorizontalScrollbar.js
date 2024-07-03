import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import BodyPart from './BodyPart';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import ExerciseCard from './exerciseCard';
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="left-arrow">
      <img src={LeftArrowIcon} alt="left-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="right-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data = [], bodyPart, setBodyPart , isBodyParts}) => {
  if (!data || data.length === 0) return null;

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box
          key={item.id}
          itemId={item.id}
          title={item.id}
          margin="0 40px"
        >
        {isBodyParts ? <BodyPart item={item.id} 
            bodyPart={bodyPart} 
            setBodyPart={setBodyPart} 
            imageUrl={item.imageUrl} />
            : <ExerciseCard exercise={item} />}
            
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
