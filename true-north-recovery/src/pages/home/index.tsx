import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  const services = [
    {
      title: '24/7 Availability',
      description:
        'Round-the-clock towing and recovery services whenever you need us',
    },
    {
      title: 'Professional Team',
      description:
        'Certified and experienced operators ready to handle any situation safely',
    },
    {
      title: 'Fast Response',
      description:
        'Quick arrival times and efficient service to get you back on the road',
    },
    {
      title: 'Wide Coverage',
      description:
        'Serving the entire region with reliable towing and recovery services',
    },
  ]

  return (
    <Box sx={{ width: '100%' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1A2E50 0%, #3B4E73 100%)',
          color: 'white',
          padding: { xs: '3rem 1rem', md: '6rem 2rem' },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 700,
                    lineHeight: 1.2,
                    letterSpacing: '-1px',
                    fontSize: { xs: '2rem', md: '3.5rem' },
                  }}
                >
                  Professional Towing & Recovery
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: '#E5F1FF',
                    fontWeight: 300,
                    lineHeight: 1.6,
                    fontSize: { xs: '0.95rem', md: '1.25rem' },
                  }}
                >
                  Fast, reliable towing and recovery services available 24/7. We're here when you need us most.
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 2 }}>
                  <Button
                    onClick={() => navigate('/contact')}
                    variant="contained"
                    sx={{
                      background: '#E5F1FF',
                      color: '#1A2E50',
                      fontWeight: 600,
                      padding: '1rem 2rem',
                      fontSize: '1rem',
                      letterSpacing: '0.5px',
                      '&:hover': {
                        background: '#ffffff',
                        boxShadow: '0 8px 24px rgba(26, 46, 80, 0.2)',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Contact Us
                  </Button>
                  <Button
                    onClick={() => navigate('/services')}
                    variant="outlined"
                    sx={{
                      color: '#E5F1FF',
                      borderColor: '#E5F1FF',
                      fontWeight: 600,
                      padding: '1rem 2rem',
                      fontSize: '1rem',
                      letterSpacing: '0.5px',
                      '&:hover': {
                        background: '#E5F1FF',
                        color: '#1A2E50',
                        borderColor: '#E5F1FF',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Our Services
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ padding: { xs: '3rem 1rem', md: '6rem 2rem' }, background: '#fff' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              color: '#1A2E50',
              marginBottom: 4,
              fontWeight: 700,
              letterSpacing: '-0.5px',
              fontSize: { xs: '1.75rem', md: '2.5rem' },
            }}
          >
            Why Choose True North Recovery
          </Typography>
          <Grid container spacing={3}>
            {services.map((service, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3 }} key={index}>
                <Card
                  sx={{
                    background: '#f8f9fa',
                    borderLeft: '4px solid #3B4E73',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 12px 30px rgba(26, 46, 80, 0.1)',
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <CardContent sx={{ padding: 3 }}>
                    <Box
                      sx={{
                        fontSize: '2rem',
                        color: '#3B4E73',
                        fontWeight: 700,
                        marginBottom: 1,
                      }}
                    >
                      ✓
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#1A2E50',
                        fontWeight: 600,
                        marginBottom: 1,
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#666',
                        lineHeight: 1.6,
                      }}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Quick Quote Section */}
      

      {/* CTA Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #3B4E73 0%, #1A2E50 100%)',
          color: 'white',
          padding: { xs: '3rem 1rem', md: '4rem 2rem' },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="sm">
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            
            <Button
              onClick={() => navigate('/contact')}
              variant="contained"
              sx={{
                background: '#E5F1FF',
                color: '#1A2E50',
                fontWeight: 600,
                padding: '1.25rem 3rem',
                fontSize: '1.1rem',
                letterSpacing: '0.5px',
                alignSelf: 'center',
                '&:hover': {
                  background: '#ffffff',
                  boxShadow: '0 8px 24px rgba(26, 46, 80, 0.3)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Home