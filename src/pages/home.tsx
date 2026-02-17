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
import blueSteelTexture from '../assets/bluefinal.png'

function Home() {
  const navigate = useNavigate()

  return (
    <Box sx={{ width: '100%' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: `
            linear-gradient(90deg, rgba(26,46,80,0.7) 0%, rgba(15,29,55,0.7) 100%),
            url(${blueSteelTexture})
          `,
          backgroundSize: '100% 100%, 20%',  
          backgroundAttachment: 'scroll, scroll',
          backgroundRepeat: 'no-repeat, repeat',
          opacity: 1,  
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
                  Your Recovery Partner, Not Just Another Agency.
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
                  TrueNorth Recovery delivers professional, compliant asset recovery services for lienholders across North Carolina — built on transparency, accountability, and a commitment to raising the standard of how recovery is done.
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
                    Transport Appointment
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
                    Property Appointment
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* About Us Section */}
      <Box sx={{ padding: { xs: '3rem 1rem', md: '4rem 2rem' }, background: '#fff', margin: 0 }}>
        <Container maxWidth="lg" disableGutters sx={{ px: { xs: 2, md: 2 } }}>
          <Grid container spacing={4} alignItems="flex-start">
            {/* Left Column - Image Placeholder */}
            {/*<Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  width: '100%',
                  height: { xs: '300px', md: '400px' },
                  background: '#E5F1FF',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#1A2E50',
                  fontWeight: 600,
                }}
              >
                [Image Placeholder]
              </Box>
            </Grid>*/}

            {/* Right Column - Text Content */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography
                  variant="overline"
                  sx={{
                    color: '#3B4E73',
                    fontWeight: 600,
                    letterSpacing: '1px',
                    fontSize: '0.85rem',
                  }}
                >
                  BUILT DIFFERENT. ON PURPOSE.
                </Typography>

                <Typography
                  variant="h3"
                  sx={{
                    color: '#1A2E50',
                    fontWeight: 700,
                    fontSize: { xs: '1.75rem', md: '2.25rem' },
                    letterSpacing: '-0.5px',
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  Who We Are
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: '#666',
                    lineHeight: 1.7,
                    fontSize: '1rem',
                  }}
                >
                  TrueNorth Recovery was founded on a simple conviction — lienholders deserve a recovery partner that operates with the same professionalism, urgency, and accountability they expect from their own teams. The repossession industry has long been defined by inconsistency, poor communication, and a lack of transparency. We exist to change that.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: '#666',
                    lineHeight: 1.7,
                    fontSize: '1rem',
                  }}
                >
                  We don't see ourselves as a vendor you manage. We operate as an extension of your loss mitigation department — one that takes your compliance obligations, your brand reputation, and your borrower experience as seriously as you do.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: '#666',
                    lineHeight: 1.7,
                    fontSize: '1rem',
                  }}
                >
                  Every process we've built, every person we've hired, and every standard we hold ourselves to exists for one reason: to give lienholders a recovery partner they never have to worry about.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>      

      {/* Why TrueNorth Section */}
      <Box sx={{ padding: { xs: '3rem 1rem', md: '6rem 2rem' }, background: '#f8f9fa' }}>
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
            The TrueNorth Difference
          </Typography>

          <Grid container spacing={3}>
            {/* Business Partners Card */}
            <Grid size={{ xs: 12, md: 6 }}>
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
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#1A2E50',
                      fontWeight: 600,
                      marginBottom: 1.5,
                    }}
                  >
                    Business Partners, Not Just Another Agency.
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#666',
                      lineHeight: 1.8,
                    }}
                  >
                    We invest in understanding your portfolio, your processes, and your expectations — because effective recovery starts with alignment, not just a forwarded assignment.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Radical Transparency Card */}
            <Grid size={{ xs: 12, md: 6 }}>
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
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#1A2E50',
                      fontWeight: 600,
                      marginBottom: 1.5,
                    }}
                  >
                    Radical Transparency.
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#666',
                      lineHeight: 1.8,
                    }}
                  >
                    Real-time updates, full fleet monitoring, dual-facing cameras, and honest reporting. You'll always know exactly where your assignments stand and how your collateral was handled.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Compliance Without Compromise Card */}
            <Grid size={{ xs: 12, md: 6 }}>
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
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#1A2E50',
                      fontWeight: 600,
                      marginBottom: 1.5,
                    }}
                  >
                    Compliance Without Compromise.
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#666',
                      lineHeight: 1.8,
                    }}
                  >
                    CARS certified, ARA member, RISC and ARA compliance program participant. Every agent background checked and drug screened. Comprehensive insurance coverage including wrongful repossession. We protect your interests by holding ourselves to a higher standard than what's required.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Professional Recovery Card */}
            <Grid size={{ xs: 12, md: 6 }}>
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
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#1A2E50',
                      fontWeight: 600,
                      marginBottom: 1.5,
                    }}
                  >
                    Professional Recovery, Every Time.
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#666',
                      lineHeight: 1.8,
                    }}
                  >
                    Your collateral is handled with care. Your borrowers are treated with dignity. Your brand is protected at every point of contact. That's not a tagline — it's how we train, how we operate, and how we hold our team accountable.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Built for Lienholders Section */}
      <Box sx={{ padding: { xs: '3rem 1rem', md: '4rem 2rem' }, background: '#fff', margin: 0 }}>
        <Container maxWidth="lg" disableGutters sx={{ px: { xs: 2, md: 2 } }}>
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              color: '#1A2E50',
              marginBottom: 3,
              fontWeight: 700,
              letterSpacing: '-0.5px',
              fontSize: { xs: '1.75rem', md: '2.25rem' },
            }}
          >
            Built for Lienholders Who Expect More.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: '#666',
              lineHeight: 1.8,
              fontSize: '1rem',
              maxWidth: '900px',
              margin: '0 auto 2rem',
              textAlign: 'center',
            }}
          >
            TrueNorth Recovery serves banks, credit unions, repossession management companies, and other lending institutions across North Carolina. Whether you're managing a regional portfolio or need a reliable partner to handle overflow, we deliver the consistency, communication, and compliance that institutional lenders require.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: '#666',
              lineHeight: 1.8,
              fontSize: '1rem',
              maxWidth: '900px',
              margin: '0 auto 3rem',
              textAlign: 'center',
            }}
          >
            If you've ever been burned by an agency that went dark on updates, mishandled a recovery, or created a consumer complaint that landed on your desk — you already know why TrueNorth exists.
          </Typography>

          <Box sx={{ textAlign: 'center', display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              onClick={() => navigate('/contact')}
              variant="contained"
              sx={{
                background: '#3B4E73',
                color: '#E5F1FF',
                fontWeight: 600,
                padding: '1rem 2rem',
                fontSize: '1rem',
                '&:hover': {
                  background: '#1A2E50',
                  boxShadow: '0 8px 24px rgba(26, 46, 80, 0.2)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Contact Us
            </Button>
            <Button
              onClick={() => navigate('/coverage')}
              variant="outlined"
              sx={{
                color: '#3B4E73',
                borderColor: '#3B4E73',
                fontWeight: 600,
                padding: '1rem 2rem',
                fontSize: '1rem',
                '&:hover': {
                  background: '#3B4E73',
                  color: '#E5F1FF',
                  borderColor: '#3B4E73',
                },
                transition: 'all 0.3s ease',
              }}
            >
              View Coverage Area
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Home