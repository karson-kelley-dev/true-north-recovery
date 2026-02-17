import {
  Box,
  Container
} from '@mui/material'
import TrueNorth from '../assets/TrueNorth_Recovery_White.png'

function ComingSoon() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1A2E50 0%, #3B4E73 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
            textAlign: 'center',
          }}
        >
          {/* Logo */}
          <img 
            src={TrueNorth}
            alt="True North Recovery"
            style={{
              height: '120px',
              width: 'auto',
            }}
          />

  
        </Box>
      </Container>
    </Box>
  )
}

export default ComingSoon