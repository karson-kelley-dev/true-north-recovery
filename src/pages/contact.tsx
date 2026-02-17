import {
  Alert,
  Box,
  Breadcrumbs,
  Button,
  CircularProgress,
  Container,
  FormControl,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import blueSteelTexture from '../assets/bluefinal.png'

function Contact() {
  const subjectEmailMap = {
    'services-question': 'recovery@truenorthar.com',
    'general-inquiry': 'recovery@truenorthar.com',
    'debtor-appointment': 'recovery@truenorthar.com',
    'transport-appointment': 'recovery@truenorthar.com',
    'damage-claim': 'claims@truenorthar.com',
    'complaint':'claims@truenorthar.com',
  } as const

  const subjectOptions = [
    { value: 'services-question', label: 'Services Question' },
    { value: 'general-inquiry', label: 'General Inquiry' },
    { value: 'debtor-appointment', label: 'Debtor Appointment' },
    { value: 'transport-appointment', label: 'Transport Appointment' },
    { value: 'damage-claim', label: 'Damage Claim' },
    { value: 'complaint', label: 'Complaint' },
  ] 

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value, 
    }))
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Get the recipient email based on selected subject
      const recipientEmail = subjectEmailMap[formData.subject as keyof typeof subjectEmailMap]

      // Send email via your backend or email service
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          to: recipientEmail,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError('Failed to send message. Please try again or contact us directly.')
      console.error('Error:', err)
    } finally {
      setLoading(false)
    }
  }

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
            Get In Touch
          </Typography>
        </Container>
      </Box>

      {/* Contact Form Section */}
      <Box sx={{ padding: { xs: '3rem 1rem', md: '4rem 2rem' }, background: '#fff', margin: 0 }}>
        <Container maxWidth="md" disableGutters sx={{ px: { xs: 2, md: 2 } }}>
          <Typography
            variant="h5"
            sx={{
              color: '#1A2E50',
              fontWeight: 700,
              marginBottom: 1,
              fontSize: '1.3rem',
            }}
          >
            Contact Us
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: '#666',
              lineHeight: 1.7,
              marginBottom: 3,
              fontSize: '1rem',
            }}
          >
            Have a question or need assistance? Fill out the form below and we'll get back to you as soon as possible.
          </Typography>

          {submitted && (
            <Alert
              severity="success"
              sx={{ marginBottom: 3 }}
            >
              Message sent successfully! We'll be in touch soon.
            </Alert>
          )}

          {error && (
            <Alert
              severity="error"
              sx={{ marginBottom: 3 }}
            >
              {error}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#D0D0D0',
                      },
                      '&:hover fieldset': {
                        borderColor: '#3B4E73',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#3B4E73',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: '#666',
                    },
                  }}
                />
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#D0D0D0',
                      },
                      '&:hover fieldset': {
                        borderColor: '#3B4E73',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#3B4E73',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: '#666',
                    },
                  }}
                />
              </Grid>

              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#D0D0D0',
                      },
                      '&:hover fieldset': {
                        borderColor: '#3B4E73',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#3B4E73',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: '#666',
                    },
                  }}
                />
              </Grid>

              <Grid size={{ xs: 12 }}>
                <FormControl fullWidth required>
                  <InputLabel sx={{ color: '#666' }}>Subject</InputLabel>
                  <Select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    label="Subject"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: '#D0D0D0',
                        },
                        '&:hover fieldset': {
                          borderColor: '#3B4E73',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#3B4E73',
                        },
                      },
                    }}
                  >
                    <MenuItem value="" disabled>
                      Select a subject
                    </MenuItem>
                    {subjectOptions.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#D0D0D0',
                      },
                      '&:hover fieldset': {
                        borderColor: '#3B4E73',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#3B4E73',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: '#666',
                    },
                  }}
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              disabled={loading}
              variant="contained"
              sx={{
                background: '#3B4E73',
                color: '#E5F1FF',
                fontWeight: 600,
                padding: '1rem 2rem',
                fontSize: '1rem',
                alignSelf: 'flex-start',
                marginTop: 1,
                '&:hover': {
                  background: '#1A2E50',
                  boxShadow: '0 8px 24px rgba(26, 46, 80, 0.2)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              {loading ? <CircularProgress size={24} /> : 'Send Message'}
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Contact