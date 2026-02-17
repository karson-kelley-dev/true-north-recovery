import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Link,
  Typography,
} from '@mui/material'
import { Camera, Key, Lock, Navigation, Package, Phone, Search, Truck } from 'lucide-react'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import blueSteelTexture from '../assets/bluefinal.png'

function Services() {
  const navigate = useNavigate()

  const services = [
    {
      title: 'Recovery',
      description: 'Whether involuntary recovery, voluntary surrender, or impound retrieval — every assignment is worked promptly with the approach it requires. Discreet field work, professional coordination, or fast impound retrievals that stop fees from piling up.',
      icon: Truck,
    },
    {
      title: 'Skip Tracing & Investigations',
      description: "Difficult-to-locate borrowers don't stay hidden. Our skip tracing team leverages advanced databases, field intelligence, and investigative techniques to track down collateral that other agencies write off.",
      icon: Search,
    },
    {
      title: 'License Plate Recognition (LPR)',
      description: 'Our LPR-equipped fleet scans thousands of plates daily across our coverage area, dramatically increasing recovery rates on aged and hard-to-find assignments. Technology-driven results, delivered around the clock.',
      icon: Camera,
    },
    {
      title: 'Locksmith Services',
      description: 'In-house locksmiths handle key cutting and remote programming on-site for virtually any make and model. No waiting on third-party vendors — faster recoveries, fewer delays, and lower costs passed on to you.',
      icon: Key,
    },
    {
      title: 'Vehicle Transport',
      description: 'Recovered collateral gets where it needs to go — safely and on schedule. Our transport team handles auction deliveries, lot-to-lot transfers, and long-distance relocations with full chain-of-custody documentation.',
      icon: Navigation,
    },
    {
      title: 'Secure Vehicle Storage',
      description: 'Recovered assets are stored in our monitored, insured facilities with 24-hour surveillance. Your collateral is protected from damage, theft, and the elements from the moment of recovery through release.',
      icon: Lock,
    },
    {
      title: 'Personal Property Handling',
      description: 'Every recovery includes a full inventory and professional handling of personal belongings found in the vehicle. Items are cataloged, securely stored, and available for timely retrieval — keeping you compliant and borrowers treated with respect.',
      icon: Package,
    },
    {
      title: 'Debtor Communication & Field Contact',
      description: 'Not every assignment requires a tow truck. When a personal touch can resolve an account — door knock, payment conversation, or cooperative arrangement — our agents represent your interests with professionalism and empathy.',
      icon: Phone,
    },
  ]

  return (
    <Box sx={{ width: '100%' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: `
            linear-gradient(90deg, rgba(26,46,80,0.7) 0%, rgba(15,29,55,0.7) 100%),
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
          <Breadcrumbs sx={{ marginBottom: 2, color: '#E5F1FF' }}>
            <Link 
              component={RouterLink} 
              to="/" 
              sx={{ color: '#E5F1FF', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
            >
              HOME
            </Link>
            <Typography sx={{ color: '#E5F1FF' }}>
              CONTACT
            </Typography>
          </Breadcrumbs>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '3rem' },
              letterSpacing: '-1px',
            }}
          >
            Our Services
          </Typography>
        </Container>
      </Box>

      {/* Intro Section */}
      <Box sx={{ padding: { xs: '3rem 1rem', md: '4rem 2rem' }, background: '#fff', margin: 0 }}>
        <Container maxWidth="lg" disableGutters sx={{ px: { xs: 2, md: 2 } }}>
          <Typography
            variant="body1"
            sx={{
              color: '#666',
              lineHeight: 1.8,
              fontSize: '1rem',
              maxWidth: '900px',
            }}
          >
            TrueNorth Recovery delivers a full suite of asset recovery services built around one priority — protecting your portfolio and your reputation. Every service we offer is executed with the professionalism, compliance, and transparency that lienholders expect from a true recovery partner.
          </Typography>
        </Container>
      </Box>

      {/* Services Grid */}
      <Box sx={{ padding: { xs: '3rem 1rem', md: '4rem 2rem' }, background: '#f8f9fa', margin: 0 }}>
        <Container maxWidth="lg" disableGutters sx={{ px: { xs: 2, md: 2 } }}>
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
            Full-Suite Recovery Solutions
          </Typography>

          <Grid container spacing={3}>
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      background: '#fff',
                      border: 'none',
                      borderBottom: '3px solid #3B4E73',
                      borderRadius: '0px',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: '0 8px 24px rgba(26, 46, 80, 0.12)',
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    <CardContent sx={{ padding: 3, display: 'flex', flexDirection: 'column', gap: 1.5, flex: 1 }}>
                      {/* Icon */}
                      <Box
                        sx={{
                          width: '50px',
                          height: '50px',
                          background: '#E5F1FF',
                          borderRadius: '6px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <IconComponent size={28} color="#3B4E73" strokeWidth={1.5} />
                      </Box>

                      {/* Title */}
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#1A2E50',
                          fontWeight: 600,
                          fontSize: '1.1rem',
                          marginTop: 0.5,
                        }}
                      >
                        {service.title}
                      </Typography>

                      {/* Description */}
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#666',
                          lineHeight: 1.7,
                          fontSize: '0.95rem',
                        }}
                      >
                        {service.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </Container>
      </Box>

      {/* Bottom CTA Section */}
      <Box
        sx={{
           background: `
            linear-gradient(90deg, rgba(26,46,80,0.7) 0%, rgba(15,29,55,0.7) 100%),
            url(${blueSteelTexture})
          `,
          backgroundSize: '100% 100%, 15%',  
          backgroundAttachment: 'scroll, scroll',
          backgroundRepeat: 'no-repeat, repeat',
          opacity: 1,  
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
            Ready to partner with a recovery team that works like an extension of yours?
          </Typography>
          <Button
            onClick={() => navigate('/contact')}
            variant="contained"
            sx={{
              background: '#E5F1FF',
              color: '#1A2E50',
              fontWeight: 600,
              padding: { xs: '0.875rem 2rem', md: '1rem 3rem' },
              fontSize: { xs: '0.95rem', md: '1rem' },
              letterSpacing: '0.5px',
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
        </Container>
      </Box>
    </Box>
  )
}

export default Services