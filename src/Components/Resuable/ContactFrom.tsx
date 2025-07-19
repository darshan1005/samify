import React, { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Typography,
  FormControl,
  Chip,
} from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'
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
    services: [] as string[],
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [serviceDisabled, setServiceDisabled] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isMultipleServices, setIsMultipleServices] = useState(false)

  useEffect(() => {
    const multipleServices = sessionStorage.getItem('multipleServices') === 'true'
    setIsMultipleServices(multipleServices)

    const selected = sessionStorage.getItem('selectedService')
    if (selected) {
      try {
        const parsed = JSON.parse(selected)
        if (multipleServices && Array.isArray(parsed)) {
          setForm(prev => ({ ...prev, services: parsed }))
        } else if (!multipleServices && typeof parsed === 'object' && parsed?.title) {
          setForm(prev => ({ ...prev, service: parsed.title }))
        }
        setServiceDisabled(true)
      } catch {
        // Ignore JSON parse errors
      }
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setForm(prev => ({ ...prev, service: value }))
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
    if (isMultipleServices) {
      if (form.services.length === 0) newErrors.services = 'Please select at least one service'
    } else {
      if (!form.service) newErrors.service = 'Please select a service'
    }
    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validation = validate()
    setErrors(validation)

    if (Object.keys(validation).length === 0) {
      setLoading(true)
      const serviceId = ''
      const templateId = ''
      const publicKey = ''

      const templateParams = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
        service: isMultipleServices ? form.services.join(', ') : form.service,
        services: isMultipleServices ? form.services.join(', ') : form.service,
      }

      try {
        await emailjs.send(serviceId, templateId, templateParams, publicKey)
        setSubmitted(true)
        sessionStorage.removeItem('selectedService')
        sessionStorage.removeItem('multipleServices')
        setServiceDisabled(false)
        setIsMultipleServices(false)
        setForm({
          name: '',
          email: '',
          phone: '',
          message: '',
          service: '',
          services: [],
        })
      } catch (error) {
        console.error('Error submitting form:', error)
      } finally {
        setLoading(false)
      }
    }
  }

  const handleClear = () => {
    sessionStorage.removeItem('selectedService')
    sessionStorage.removeItem('multipleServices')
    setServiceDisabled(false)
    setIsMultipleServices(false)
    setSubmitted(false)
    setForm({
      name: '',
      email: '',
      phone: '',
      message: '',
      service: '',
      services: [],
    })
    setErrors({})
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
        borderRadius: 2.5,
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

      {/* Name */}
      <TextField
        id="contact-name"
        label="Name"
        name="name"
        value={form.name}
        onChange={handleChange}
        error={!!errors.name}
        helperText={errors.name}
        fullWidth
        margin="normal"
      />

      {/* Email */}
      <TextField
        id="contact-email"
        label="Email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
        fullWidth
        margin="normal"
      />

      {/* Phone */}
      <TextField
        id="contact-phone"
        label="Phone Number"
        name="phone"
        type="tel"
        value={form.phone}
        onChange={handleChange}
        error={!!errors.phone}
        helperText={errors.phone}
        fullWidth
        margin="normal"
      />
      
      {/* Services Autocomplete */}
      <FormControl fullWidth margin="normal">
        {isMultipleServices ? (
          <Autocomplete
            id="services-autocomplete"
            multiple
            disableCloseOnSelect
            options={serviceOptions}
            value={form.services}
            onChange={(_, value) => {
              setForm(prev => ({ ...prev, services: value }))
            }}
            renderTags={(value: string[], getTagProps) =>
              value.map((option, index) => (
                <Chip
                  label={option}
                  {...getTagProps({ index })}
                  variant="outlined"
                  color="primary"
                  key={option}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                label="Services"
                name="services"
                error={!!errors.services}
                helperText={errors.services}
              />
            )}
          />
        ) : (
          <TextField
            select
            id="service-select"
            label="Service"
            name="service"
            value={form.service}
            onChange={handleSelectChange}
            disabled={serviceDisabled}
            error={!!errors.service}
            helperText={errors.service}
            fullWidth
          >
            {serviceOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        )}
      </FormControl>

      {/* Message */}
      <TextField
        id="contact-message"
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

      {/* Buttons */}
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, mt: 2 }}>
        <Button type="submit" variant="contained" fullWidth disabled={loading}>
          {loading ? 'Sending...' : 'Send'}
        </Button>
        <Button variant="outlined" onClick={handleClear} fullWidth>
          Clear
        </Button>
      </Box>

      {/* Submission Popup */}
      {submitted && (
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
              Thank you! Your request has been sent. For further assistance, reach out to our mail{' '}
              <Typography color="primary" component={'span'}>
                contact@samify.com
              </Typography>
            </Typography>
          </Box>
        </PopupHOC>
      )}
    </Box>
  )
}

export default ContactForm