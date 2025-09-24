import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CardHeader from '@mui/material/CardHeader';
import TextField from '@mui/material/TextField';

function LoginPage() {
  return (
    <Box>
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader title="Login" slotProps={{ title: { style: { textAlign: 'left' } } }} />
            <CardContent>   
                <TextField fullWidth label="Username" margin="normal" />
                <TextField fullWidth label="Password" type="password" margin="normal" />
            </CardContent>
            <CardActions>
                <Button fullWidth variant="contained">Login</Button>
            </CardActions>
        </Card>
    </Box>
  )
}

export default LoginPage;