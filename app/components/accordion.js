import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const AccordionComponent = ({ title, content }) => {
  const listPoints = content.split('##');
  return (
    <Accordion className='mb-2'>
      <AccordionSummary expandIcon={<ExpandMoreIcon className='text-white'/>} className='bg-bg-blue text-white shadow shadow-bg-blue focus:bg-bg-blue'>
        <Typography className='text-lg font-medium font-Poppins ps-2'>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails className='font-Poppins'>
        <ul className='list-disc ps-8 pt-1'>
          {listPoints?.map((point,i) => (
              <li key={i}>{point}</li>
            ))}
        </ul>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionComponent;