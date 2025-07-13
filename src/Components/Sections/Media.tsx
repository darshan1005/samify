import ReactPlayer from 'react-player';
import { Box, Typography, Container, Paper } from '@mui/material';
import videosData from '../../Content/Videos.json';

const VideoPreview = () => (
  <Box component="section" className="video-preview-section" py={6} width={'100%'}>
    <Container maxWidth="md">
      <Typography variant="h4"
        fontWeight="bold"
        align="center"
        gutterBottom
        sx={{
          fontSize: { xs: '2rem', md: '2.5rem' },
          background: 'linear-gradient(45deg, #667eea, #102036)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
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