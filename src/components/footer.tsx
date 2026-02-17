import { Box, Container, Typography } from '@mui/material'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <Box
      component="footer"
      sx={{
        background: '#1A2E50',
        color: 'white',
        padding: '2rem',
        marginTop: 'auto',
        width: '100%',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="body2"
          sx={{
            textAlign: 'center',
            color: '#E5F1FF',
            fontWeight: 400,
          }}
        >
          © {currentYear} True North Recovery. All rights reserved.
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer