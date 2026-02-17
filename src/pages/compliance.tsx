import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Link,
  Typography
} from '@mui/material'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import ARA from '../assets/ARA-Logo-Master-Light.svg'
import CARS from '../assets/CARS_Certified-logo.png'
import RISC from '../assets/RISC-Logo_6_2019-300px.png'
import blueSteelTexture from '../assets/bluefinal.png'

function Compliance() {
  const navigate = useNavigate()

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
              COMPLIANCE
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
            Compliance
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
            In an industry where your vendor's actions directly reflect on your institution, compliance isn't a checkbox — it's the foundation of every recovery we perform. TrueNorth Recovery maintains rigorous standards across credentialing, insurance, personnel vetting, and field operations so that every interaction protects your portfolio and your reputation.
          </Typography>
        </Container>
      </Box>

      {/* Section 1: Certifications */}
      <Box sx={{ padding: { xs: '3rem 1rem', md: '4rem 2rem' }, background: '#f8f9fa', margin: 0 }}>
        <Container maxWidth="lg" disableGutters sx={{ px: { xs: 2, md: 2 } }}>
          <Typography
            variant="h3"
            sx={{
              color: '#1A2E50',
              fontWeight: 700,
              fontSize: { xs: '1.75rem', md: '2.25rem' },
              marginBottom: 2,
              letterSpacing: '-0.5px',
            }}
          >
            Certified. Credentialed. Accountable.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: '#666',
              lineHeight: 1.8,
              fontSize: '1rem',
              maxWidth: '900px',
            }}
          >
            TrueNorth Recovery is CARS certified and an active member of the American Recovery Association (ARA). We participate in both RISC and ARA compliance programs, ensuring our operations are continuously measured against the highest standards in the recovery industry. These aren't just logos on a wall — they represent ongoing commitments to training, ethics, and operational accountability that our lending partners can verify independently.
          </Typography>

          {/* Certification Logos Placeholder */}
          <Box
            sx={{
              display: 'flex',
              gap: 3,
              marginTop: 3,
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                width: '100px',
                height: '100px',
                borderRadius: '8px',
                background:'#E5F1FF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 600,
                color: '#1A2E50',
                fontSize: '0.85rem',
                textAlign: 'center',
              }}
            >
               <img 
                  src={CARS}
                  alt="CARS Logo"
                  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                />
            </Box>
            <Box
              sx={{
                width: '100px',
                height: '100px',
                background: '#020381',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 600,
                color: '#1A2E50',
                fontSize: '0.85rem',
                textAlign: 'center',
              }}
            >
              <img 
                  src={ARA}
                  alt="ARA Logo"
                  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                />
            </Box>
            <Box
              sx={{
                width: '100px',
                height: '100px',
                background: '#E5F1FF',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 600,
                color: '#1A2E50',
                fontSize: '0.85rem',
                textAlign: 'center',
              }}
            >
              <img 
                  src={RISC}
                  alt="RISK Logo"
                  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Section 2: Agent Vetting */}
      <Box sx={{ padding: { xs: '3rem 1rem', md: '4rem 2rem' }, background: '#fff', margin: 0 }}>
        <Container maxWidth="lg" disableGutters sx={{ px: { xs: 2, md: 2 } }}>
          <Typography
            variant="h3"
            sx={{
              color: '#1A2E50',
              fontWeight: 700,
              fontSize: { xs: '1.75rem', md: '2.25rem' },
              marginBottom: 2,
              letterSpacing: '-0.5px',
            }}
          >
            Every Agent, Every Time.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: '#666',
              lineHeight: 1.8,
              fontSize: '1rem',
              maxWidth: '900px',
            }}
          >
            The people who represent your interests in the field matter. Every TrueNorth agent undergoes comprehensive background checks and drug screening before they ever touch an assignment. We maintain strict hiring standards because we understand that our agents are an extension of your institution — and a single unprofessional interaction can create regulatory exposure, consumer complaints, and reputational damage that far exceeds the value of any recovery.
          </Typography>
        </Container>
      </Box>

      {/* Section 3: Insurance Coverage */}
      <Box sx={{ padding: { xs: '3rem 1rem', md: '4rem 2rem' }, background: '#f8f9fa', margin: 0 }}>
        <Container maxWidth="lg" disableGutters sx={{ px: { xs: 2, md: 2 } }}>
          <Typography
            variant="h3"
            sx={{
              color: '#1A2E50',
              fontWeight: 700,
              fontSize: { xs: '1.75rem', md: '2.25rem' },
              marginBottom: 2,
              letterSpacing: '-0.5px',
            }}
          >
            Fully Insured to Protect Your Interests.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: '#666',
              lineHeight: 1.8,
              fontSize: '1rem',
              maxWidth: '900px',
              marginBottom: 2,
            }}
          >
            TrueNorth carries comprehensive insurance coverage designed to shield our clients from liability at every stage of the recovery process. Our policies include general liability, automotive liability, wrongful repossession, on-hook liability, and crime coverage. We maintain these policies not because we expect problems, but because responsible partners plan for every scenario — giving you confidence that your collateral and your exposure are covered from assignment through release.
          </Typography>

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
            Request Insurance Documentation
          </Button>
        </Container>
      </Box>

      {/* Section 4: Regulatory Compliance */}
      <Box sx={{ padding: { xs: '3rem 1rem', md: '4rem 2rem' }, background: '#fff', margin: 0 }}>
        <Container maxWidth="lg" disableGutters sx={{ px: { xs: 2, md: 2 } }}>
          <Typography
            variant="h3"
            sx={{
              color: '#1A2E50',
              fontWeight: 700,
              fontSize: { xs: '1.75rem', md: '2.25rem' },
              marginBottom: 2,
              letterSpacing: '-0.5px',
            }}
          >
            Operating Within the Rules — Without Exception.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: '#666',
              lineHeight: 1.8,
              fontSize: '1rem',
              maxWidth: '900px',
            }}
          >
            TrueNorth operates in full compliance with the Consumer Financial Protection Bureau (CFPB) guidelines, the Fair Debt Collection Practices Act (FDCPA), and all applicable provisions of UCC Article 9 governing secured transactions. Our team stays current on regulatory changes and adapts our processes accordingly, so our lending partners can trust that every recovery is executed within the legal framework that governs their portfolios.
          </Typography>
        </Container>
      </Box>

      {/* Section 5: Technology & Transparency */}
      <Box sx={{ padding: { xs: '3rem 1rem', md: '4rem 2rem' }, background: '#f8f9fa', margin: 0 }}>
        <Container maxWidth="lg" disableGutters sx={{ px: { xs: 2, md: 2 } }}>
          <Typography
            variant="h3"
            sx={{
              color: '#1A2E50',
              fontWeight: 700,
              fontSize: { xs: '1.75rem', md: '2.25rem' },
              marginBottom: 2,
              letterSpacing: '-0.5px',
            }}
          >
            Real-Time Visibility Into Every Assignment.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: '#666',
              lineHeight: 1.8,
              fontSize: '1rem',
              maxWidth: '900px',
            }}
          >
            Trust requires transparency, and transparency requires technology. Our entire fleet is equipped with dual-facing cameras and full monitoring systems, providing real-time oversight of field operations. Combined with our reporting software, lending partners have access to timely updates on every assignment — from placement through recovery. When questions arise, we don't just have answers — we have documentation.
          </Typography>
        </Container>
      </Box>

      {/* Bottom CTA Section */}
      <Box
        sx={{
           background: `
            linear-gradient(135deg, rgba(26,46,80,0.7) 0%, rgba(15,29,55,0.7) 100%),
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
            Your compliance standards shouldn't be higher than your recovery partner's.
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
            If they are, we should talk.
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
            Contact Us
          </Button>
        </Container>
      </Box>
    </Box>
  )
}

export default Compliance