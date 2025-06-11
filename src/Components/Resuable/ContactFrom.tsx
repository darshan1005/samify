import React, { useState, useEffect } from 'react'
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

interface ContactFormProps {
  serviceOptions: string[]
  showTitle?: boolean
}

const ContactForm: React.FC<ContactFormProps> = ({ serviceOptions, showTitle = true}) => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const validation = validate()
    setErrors(validation)
    if (Object.keys(validation).length === 0) {
      setSubmitted(true)
      sessionStorage.removeItem('selectedService')
      // Here you would send the form data to your backend or email service
    }
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 520,
        mx: 'auto',
        p: 3,
        bgcolor: 'background.paper',
        borderRadius: 3,
        boxShadow: 2,
      }}
    >
      {showTitle && (
        <Typography variant="h5" fontWeight={600} mb={2} align="center">
          Contact Us
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
      />
      <FormControl fullWidth margin="normal" error={!!errors.service}>
        <InputLabel>Service</InputLabel>
        <Select
          name="service"
          value={form.service}
          label="Service"
          onChange={handleSelectChange}
          disabled={serviceDisabled}
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
      />
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2, borderRadius: 2 }}
        >
          Send
        </Button>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2, borderRadius: 2 }}
          onClick={() =>
            setForm({
              name: '',
              email: '',
              phone: '',
              message: '',
              service: '',
            })
          }
        >
          Clear
        </Button>
      </Box>
      {submitted && (
        <Typography color="success.main" align="center" mt={2}>
          Thank you! Your message has been sent.
        </Typography>
      )}
    </Box>
  )
}

export default ContactForm
