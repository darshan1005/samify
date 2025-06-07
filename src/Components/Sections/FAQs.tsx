import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FAQS from '../../Content/FAQs.json'
import { Box } from '@mui/material';

export default function AccordionUsage() {
  const [expanded, setExpanded] = React.useState<number | false>(0);

  const handleChange =
    (panel: number) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box sx={{ width: '100%', maxWidth: 800, mx: 'auto', mt: 4 , gap: 2, px: 2 }}>
        <Typography
        variant="h4"
        fontWeight="bold"
        align="center"
        gutterBottom
        sx={{
          fontSize: { xs: '2rem', md: '2.5rem' },
          background: 'linear-gradient(45deg, #667eea, #102036)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        FAQ's
      </Typography>
      {FAQS.FAQs.map((faq, idx) => (
        <Accordion
          key={idx}
          expanded={expanded === idx}
          onChange={handleChange(idx)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${idx}-content`}
            id={`panel${idx}-header`}
          >
            <Typography component="span">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="span">{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
