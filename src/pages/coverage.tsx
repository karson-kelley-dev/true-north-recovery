import {
  Box,
  Container,
  Typography
} from '@mui/material'
import blueSteelTexture from '../assets/bluefinal.png'
import coverageArea from '../assets/coverage-area.png'

function Coverage() {

  return (
    <Box sx={{ width: '100%' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: `
            linear-gradient(135deg, rgba(26,46,80,0.7) 0%, rgba(15,29,55,0.7) 100%),
            url(${blueSteelTexture})
          `,
          backgroundSize: '100% 100%, 25%',  
          backgroundAttachment: 'scroll, scroll',
          backgroundRepeat: 'no-repeat, repeat',
          opacity: 1,  
          color: 'white',
          padding: { xs: '3rem 1rem', md: '4rem 2rem' },
          margin: 0,
        }}
      >
        <Container maxWidth="lg" disableGutters sx={{ px: { xs: 2, md: 2 } }}>
          <Typography
            variant="body2"
            sx={{
              color: '#E5F1FF',
              fontWeight: 500,
              marginBottom: 1,
              fontSize: '0.9rem',
              letterSpacing: '1px',
            }}
          >
            HOME • COVERAGE
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '3rem' },
              letterSpacing: '-1px',
            }}
          >
            Coverage Areas
          </Typography>
        </Container>
      </Box>

      {/* Coverage Map Section */}
      <Box sx={{ padding: { xs: '3rem 1rem', md: '4rem 2rem' }, background: '#fff', margin: 0 }}>
        <Container maxWidth="lg" disableGutters sx={{ px: { xs: 2, md: 2 } }}>
          {/* Map Placeholder */}
          <Box sx={{ padding: { xs: '3rem 1rem', md: '4rem 2rem' }, background: '#fff', margin: 0 }}>
            <Container maxWidth="lg" disableGutters sx={{ px: { xs: 2, md: 2 } }}>
              <Typography variant="h5" sx={{ marginBottom: 2, color: '#1A2E50', fontWeight: 700 }}>
                Coverage Map
              </Typography>
              
              <Box sx={{ width: '100%', height: { xs: '400px', md: '600px' }, borderRadius: '8px', overflow: 'hidden' }}>
                {/*<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1YPG22ULHxVgwQICrAIYKrdX_bLV5QRU&ehbc=2E312F&noprof=1"
                  width="100%" 
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>*/}
                <img 
                  src={coverageArea}
                  alt="Coverage Map"
                  style={{ 
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    maxWidth: '100%',
                    objectFit: 'contain'
                  }}
                />
              </Box>
            </Container>
          </Box>

          {/* Coverage Area Counties */}
          <Box sx={{ marginBottom: 4 }}>
            <Typography
              variant="h5"
              sx={{
                color: '#1A2E50',
                fontWeight: 700,
                marginBottom: 2,
                fontSize: '1.3rem',
              }}
            >
              Coverage Area Counties
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
                gap: 2,
              }}
            >
              {[
                'Forsyth',
                'Stokes',
                'Rockingham',
                'Alamance',
                'Randolph',
                'Guilford',
                'Davidson',
                'Chatham',
                'Caswell',
                'Orange',
                'Harnett',
                'Wake',
                'Durham',
                'Johnston',
                'Franklin',
                'Granville',
                'Vance',
                'Person',
                'Nash',
                'Edgecombe',
                'Wilson',
              ].map((county, index) => (
                <Box
                  key={index}
                  sx={{
                    padding: '1.5rem',
                    background: '#f8f9fa',
                    borderLeft: '4px solid #3B4E73',
                    borderRadius: '4px',
                  }}
                >
                  <Typography
                    sx={{
                      color: '#1A2E50',
                      fontWeight: 600,
                      marginBottom: 1,
                    }}
                  >
                    {county}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Coverage