import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TrueNorthImage from '../assets/TrueNorth_Recovery_White.png'

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Coverage', path: '/coverage' },
    { label: 'Compliance', path: '/compliance' },
    { label: 'Contact', path: '/contact' },
  ]

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleNavClick = (path: string) => {
    navigate(path)
    setMobileOpen(false)
  }

  const drawer = (
    <Box sx={{ width: 250 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navLinks.map((link) => (
          <ListItem key={link.path} disablePadding>
            <ListItemButton
              onClick={() => handleNavClick(link.path)}
              sx={{
                color: '#1A2E50',
                '&:hover': {
                  backgroundColor: '#E5F1FF',
                },
              }}
            >
              <ListItemText primary={link.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <AppBar
      position="fixed"
      sx={{
        background: '#1A2E50',
        boxShadow: '0 4px 20px rgba(26, 46, 80, 0.15)',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1100,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0.5rem 0',
          }}
        >
          {/* Logo */}
          <Box
            onClick={() => navigate('/')}
            sx={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img
              src={TrueNorthImage}
              alt="True North Recovery"
              style={{
                height: '60px',
                width: 'auto',
              }}
            />
          </Box>

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 2,
            }}
          >
            {navLinks.map((link) => (
              <Button
                key={link.path}
                onClick={() => navigate(link.path)}
                sx={{
                  color: '#E5F1FF',
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  position: 'relative',
                  transition: 'color 0.3s ease',
                  letterSpacing: '0.3px',
                  '&:hover': {
                    color: '#ffffff',
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{
              display: { xs: 'flex', md: 'none' },
              color: '#E5F1FF',
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  )
}

export default Navbar