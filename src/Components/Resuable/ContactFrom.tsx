import React, { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Typography,
  FormControl,
  InputLabel,
  Select,
} from '@mui/material'
import type { SelectChangeEvent } from '@mui/material/Select'
import PopupHOC from './Popup'

interface ContactFormProps {
  serviceOptions: string[]
  showTitle?: boolean
}

const ContactForm: React.FC<ContactFormProps> = ({ serviceOptions, showTitle = true }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [serviceDisabled, setServiceDisabled] = useState(false)
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const selectedService = sessionStorage.getItem('selectedService')
    if (selectedService) {
      try {
        const parsed = JSON.parse(selectedService)
        if (parsed && parsed.title) {
          setForm(prev => ({ ...prev, service: parsed.title }))
          setServiceDisabled(true)
        }
      } catch {
        // Ignore JSON parse errors
      }
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name as string]: value }))
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!form.name) newErrors.name = 'Name is required'
    if (!form.email) newErrors.email = 'Email is required'
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) newErrors.email = 'Invalid email'
    if (!form.phone) newErrors.phone = 'Phone number is required'
    else if (!/^\d{10,15}$/.test(form.phone.replace(/\D/g, '')))
      newErrors.phone = 'Invalid phone number'
    if (!form.message) newErrors.message = 'Message is required'
    if (!form.service) newErrors.service = 'Please select a service'
    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length === 0) {
      setLoading(true);
      const serviceId = '';
      const templateId = '';
      const publicKey = '';

      const templateParams = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
        service: form.service,
      };

      try {
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
        setSubmitted(true);
        sessionStorage.removeItem('selectedService');
        setServiceDisabled(false);
        setForm({
          name: '',
          email: '',
          phone: '',
          message: '',
          service: '',
        });
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 520,
        mx: 'auto',
        p: { xs: 2, sm: 3 },
        bgcolor: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        borderRadius: 5 / 2,
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        border: '1px solid #e3e6ee',
        backdropFilter: 'blur(4px)',
        position: 'relative',
      }}
    >
      {showTitle && (
        <Typography
          variant="h4"
          fontWeight={700}
          mb={3}
          align="center"
          color="primary.main"
          letterSpacing={1.5}
        >
          Get in Touch
        </Typography>
      )}
      <TextField
        label="Name"
        name="name"
        value={form.name}
        onChange={handleChange}
        error={!!errors.name}
        helperText={errors.name}
        fullWidth
        margin="normal"
        InputProps={{
          sx: {
            borderRadius: 3 / 2,
            bgcolor: '#fff',
            boxShadow: '0 1px 4px rgba(0,0,0,0.03)',
            '&:focus-within': { boxShadow: '0 2px 8px rgba(0,0,0,0.08)' },
          },
        }}
      />
      <TextField
        label="Email"
        name="email"
        value={form.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
        fullWidth
        margin="normal"
        InputProps={{
          sx: {
            borderRadius: 3 / 2,
            bgcolor: '#fff',
            boxShadow: '0 1px 4px rgba(0,0,0,0.03)',
            '&:focus-within': { boxShadow: '0 2px 8px rgba(0,0,0,0.08)' },
          },
        }}
      />
      <TextField
        label="Phone Number"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        error={!!errors.phone}
        helperText={errors.phone}
        fullWidth
        margin="normal"
        InputProps={{
          sx: {
            borderRadius: 3,
            bgcolor: '#fff',
            boxShadow: '0 1px 4px rgba(0,0,0,0.03)',
            '&:focus-within': { boxShadow: '0 2px 8px rgba(0,0,0,0.08)' },
          },
        }}
      />
      <FormControl
        fullWidth
        margin="normal"
        error={!!errors.service}
        sx={{
          borderRadius: 3 / 2,
          bgcolor: '#fff',
          boxShadow: '0 1px 4px rgba(0,0,0,0.03)'
        }}
      >
        <InputLabel>Service</InputLabel>
        <Select
          name="service"
          value={form.service}
          label="Service"
          onChange={handleSelectChange}
          disabled={serviceDisabled}
          sx={{ borderRadius: 3 / 2 }}
        >
          {serviceOptions.map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
        {errors.service && (
          <Typography color="error" variant="caption">
            {errors.service}
          </Typography>
        )}
      </FormControl>
      <TextField
        label="Message"
        name="message"
        value={form.message}
        onChange={handleChange}
        error={!!errors.message}
        helperText={errors.message}
        fullWidth
        margin="normal"
        multiline
        minRows={3}
        InputProps={{
          sx: {
            borderRadius: 3 / 2,
            bgcolor: '#fff',
            boxShadow: '0 1px 4px rgba(0,0,0,0.03)',
            '&:focus-within': { boxShadow: '0 2px 8px rgba(0,0,0,0.08)' },
          },
        }}
      />
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, mt: 2 }}>        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={loading}
          sx={{
            borderRadius: 3 / 2,
            fontWeight: 600,
            fontSize: '1rem',
            boxShadow: '0 2px 8px rgba(25, 118, 210, 0.10)',
            transition: 'all 0.2s',
            '&:hover': {
              bgcolor: 'primary.dark',
              transform: 'translateY(-2px) scale(1.03)',
              boxShadow: '0 4px 16px rgba(25, 118, 210, 0.18)',
            },
          }}
        >
          {loading ? 'Sending...' : 'Send'}
        </Button>
        <Button
          variant="outlined"
          color="primary"
          fullWidth
          sx={{
            borderRadius: 2,
            fontWeight: 600,
            fontSize: '1rem',
            bgcolor: '#fff',
            border: '2px solid',
            borderColor: 'primary.main',
            transition: 'all 0.2s',
            '&:hover': {
              bgcolor: 'primary.light',
              borderColor: 'primary.dark',
              transform: 'translateY(-2px) scale(1.03)',
            },
          }}
          onClick={() => {
            sessionStorage.removeItem('selectedService')
            setServiceDisabled(false)
            setSubmitted(false)
            setForm({
              name: '',
              email: '',
              phone: '',
              message: '',
              service: '',
            })
          }}
        >
          Clear
        </Button>
      </Box>      {submitted && (
        <PopupHOC open={submitted} onClose={() => setSubmitted(false)}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 3 }}>
            <Box
              sx={{
                width: 60,
                height: 60,
                borderRadius: '50%',
                bgcolor: 'success.light',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 1,
              }}
            >
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="12" fill="#4caf50" />
                <path
                  d="M7 13l3 3 7-7"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
            <Typography color="success.main" align="center" fontWeight={600}>
              Thank you! Your request has been sent. For further assistance reach out to our mail <Typography color='primary' component={'span'}>contact@samify.com</Typography>
            </Typography>
          </Box>
        </PopupHOC>
      )}
    </Box >
  )
}

export default ContactForm;