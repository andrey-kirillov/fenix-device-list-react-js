import Box from '@mui/material/Box'
import LoginPage from './pages/login/login'
import { Routes, Route } from 'react-router'

function App() {

  return (
    <Box 
      display="flex"
      overflow="hidden" 
      height="100vh"
      width="100vw" 
      p={0}
      m={0}>
        <Routes>
          <Route path="/" element={<LoginPage />} />        
        </Routes>
    </Box>
  )
}

export default App
