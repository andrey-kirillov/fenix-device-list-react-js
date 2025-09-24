import { Fragment } from 'react'
import Box from '@mui/material/Box'
import LoginPage from './pages/login/login'
import { Routes, Route, useNavigate } from 'react-router'
import SoldDeviceList from './pages/soldDeviceLIst/soldDeviceList'
import Button from '@mui/material/Button'

function App() {
  const navigate = useNavigate();
  return (
    <Box 
      display="flex"
      flexDirection="column"
      overflow="hidden" 
      height="100vh"
      width="100vw" 
      p={0}
      m={0}>
        <Fragment> 
          <div style={{ textAlign: 'center' }}>Test navigation</div>
          <Button onClick={() => navigate('/sold-device-list')} sx={{ margin: '10px' }}>Sold Device List</Button>
          <Button onClick={() => navigate('/')} sx={{ margin: '10px' }}>Login</Button>
          <Routes>
            <Route path="/" element={<LoginPage />} />        
            <Route path="/sold-device-list" element={<SoldDeviceList />} />
          </Routes>
        </Fragment>
    </Box>
  )
}

export default App
