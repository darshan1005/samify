import { Box } from '@mui/material'
import ContactForm from '../Resuable/ContactFrom'
import servicesData from '../../Content/services.json'
import Header from '../Resuable/Header'

type Service = { id: string; title: string }
const serviceOptions = (servicesData.services as Service[]).map(s => s.title)

const Request = () => {
  return (
    <Box>
      <Header onClick={function (): void { }} showBtn={false} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 4, md: 6 },
          maxWidth: 1100,
          mx: 'auto',
          alignItems: 'flex-start',
          p: { xs: 2, md: 4 },
        }}
      >
        {/* Left: Form */}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <ContactForm serviceOptions={serviceOptions} />
        </Box>
      </Box>
    </Box>
  )
}

export default Request
