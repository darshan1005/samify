import React from 'react';
import ReactPlayer from 'react-player';
import { Box, Typography, Container, Paper } from '@mui/material';
import videosData from '../../Content/Videos.json';

const VideoPreview: React.FC = () => (
  <Box component="section" className="video-preview-section" py={6}>
    <Container maxWidth="md">
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Watch Our Videos
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 4,
          mt: 2,
        }}
      >
        {videosData.Videos.map((video) => (
          <Paper key={video.id} elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              {video.title}
            </Typography>
            <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
              <ReactPlayer
                src={video.link}
                width="100%"
                height="100%"
                style={{ position: 'absolute', top: 0, left: 0 }}
                controls
              />
            </Box>
          </Paper>
        ))}
      </Box>
    </Container>
  </Box>
);

export default VideoPreview;