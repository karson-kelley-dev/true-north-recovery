import { Box, Button, Container, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function CallToAction() {
  const navigate = useNavigate()

  return(
      <Box
        sx={{
          background: '#1A2E50',
          color: 'white',
          padding: { xs: '3rem 1rem', md: '4rem 2rem' },
          textAlign: 'center',
          margin: 0,
        }}
      >
        <Container maxWidth="sm" disableGutters sx={{ px: { xs: 2, md: 2 } }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '1.5rem', md: '2rem' },
              marginBottom: 2,
              letterSpacing: '-0.5px',
            }}
          >
            [Call to Action Heading]
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#E5F1FF',
              fontWeight: 300,
              fontSize: { xs: '0.95rem', md: '1.1rem' },
              marginBottom: 3,
            }}
          >
            [Call to action description goes here]
          </Typography>
          <Button
            onClick={() => navigate('/contact')}
            variant="contained"
            sx={{
              background: '#E5F1FF',
              color: '#1A2E50',
              fontWeight: 600,
              padding: '1rem 3rem',
              fontSize: '1rem',
              letterSpacing: '0.5px',
              '&:hover': {
                background: '#ffffff',
                boxShadow: '0 8px 24px rgba(26, 46, 80, 0.3)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            [Button Text]
          </Button>
        </Container>
      </Box>
  )
}

export default CallToAction