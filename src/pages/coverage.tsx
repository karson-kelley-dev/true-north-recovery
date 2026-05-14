import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Breadcrumbs,
  Container,
  Link,
  Typography
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import blueSteelTexture from '../assets/bluefinal.png'

const branches = [
  {
    name: 'Piedmont Triad Area Branch',
    color: '#E5AD00',
    cardBg: '#FFF8E1',
    counties: ['Alamance', 'Davidson', 'Forsyth', 'Guilford', 'Person'],
  },
  {
    name: 'Raleigh-Durham Area Branch',
    color: '#0288D1',
    cardBg: '#E1F5FE',
    counties: ['Chatham', 'Durham', 'Edgecombe', 'Franklin', 'Granville', 'Harnett', 'Johnston', 'Nash', 'Orange', 'Person', 'Vance', 'Wake', 'Wilson'],
  },
]

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
          <Breadcrumbs sx={{ marginBottom: 2, color: '#E5F1FF' }}>
            <Link 
              component={RouterLink} 
              to="/" 
              sx={{ color: '#E5F1FF', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
            >
              HOME
            </Link>
            <Typography sx={{ color: '#E5F1FF' }}>
              COVERAGE
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
            Coverage Areas
          </Typography>
        </Container>
      </Box>

      {/* Coverage Map Section */}
      <Box sx={{ padding: { xs: '3rem 1rem', md: '4rem 2rem' }, background: '#f8f9fa', margin: 0 }}>
        <Container maxWidth="lg" disableGutters sx={{ px: { xs: 2, md: 2 } }}>
          <Typography
            sx={{
              fontWeight: 600,
              letterSpacing: '1px',
              fontSize: '0.85rem',
              color: '#3B4E73',
              marginBottom: 1,
              textTransform: 'uppercase',
            }}
          >
            Service Area
          </Typography>
          <Typography variant="h5" sx={{ marginBottom: 1, color: '#1A2E50', fontWeight: 700, fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
            Coverage Map
          </Typography>

          <Box sx={{
            width: '100%',
            height: 'auto',
            borderRadius: '8px',
            overflow: 'hidden',
            border: '2px solid #3B4E73',
            boxShadow: { xs: '0 2px 8px rgba(0,0,0,0.1)', md: '0 4px 12px rgba(0,0,0,0.1)' }
          }}>
            <Box sx={{
              position: 'relative',
              width: '100%',
              height: '600px',
              overflow: 'hidden',
            }}>
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1gVAiNg4xfpTxrqXoqzNO4GV0zpjzmfU&ehbc=2E312F&noprof=1"
                width="100%"
                height="660"
                style={{ border: 0, marginTop: '-60px' }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Coverage Area Counties */}
      <Box sx={{ padding: { xs: '3rem 1rem', md: '4rem 2rem' }, background: '#fff', margin: 0 }}>
        <Container maxWidth="lg" disableGutters sx={{ px: { xs: 2, md: 2 } }}>
          <Box sx={{ marginBottom: 4 }}>
            <Typography
              variant="h5"
              sx={{
                color: '#1A2E50',
                fontWeight: 700,
                marginBottom: { xs: 2, md: 3 },
                fontSize: { xs: '1.25rem', md: '1.5rem' },
              }}
            >
              Coverage Area Counties
            </Typography>

            {branches.map((branch) => (
              <Accordion
                key={branch.name}
                defaultExpanded
                sx={{
                  borderRadius: '8px !important',
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  marginBottom: 2,
                  '&:before': { display: 'none' },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                  sx={{
                    backgroundColor: branch.color,
                    color: '#fff',
                    minHeight: '56px',
                    '& .MuiAccordionSummary-content': { margin: '12px 0' },
                  }}
                >
                  <Typography sx={{ fontWeight: 700, fontSize: { xs: '1rem', md: '1.15rem' } }}>
                    {branch.name} 
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: { xs: '1rem', md: '1.5rem' } }}>
                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
                      gap: { xs: 1.5, md: 2 },
                    }}
                  >
                    {branch.counties.map((county) => (
                      <Box
                        key={county}
                        sx={{
                          padding: { xs: '1rem', md: '1.5rem' },
                          background: branch.cardBg,
                          borderLeft: `4px solid ${branch.color}`,
                          borderRadius: '4px',
                        }}
                      >
                        <Typography
                          sx={{
                            color: '#1A2E50',
                            fontWeight: 600,
                            fontSize: { xs: '0.95rem', md: '1rem' },
                          }}
                        >
                          {county}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Coverage