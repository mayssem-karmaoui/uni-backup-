import { useState } from 'react'
import {
  Button,
  Dialog,
  DialogContent,
  Divider,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google'

const Login = ({ open, handleClose }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  const handleChange = (event) => {
    const { id, value } = event.target
    if (id === 'outlined-required') {
      setEmail(value)
      setEmailError(false)
    } else if (id === 'password') {
      setPassword(value)
      setPasswordError(false)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!email.trim()) {
      setEmailError(true)
    }
    if (!password.trim()) {
      setPasswordError(true)
    }
    if (email.trim() && password.trim()) {
      console.log('Submitted email:', email)
      console.log('Submitted password:', password)
    }
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <Typography variant="h3" color="primary">
          Welcome Back
        </Typography>
        <Typography>Sign in to check the latest updates</Typography>
        <Stack spacing={2}>
          <TextField
            required
            id="outlined-required"
            label="Email"
            value={email}
            onChange={handleChange}
            error={emailError}
            helperText={emailError ? 'Please fill the email field' : ''}
          />
          <TextField
            required
            id="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={handleChange}
            error={passwordError}
            helperText={passwordError ? 'Please fill the password field' : ''}
          />
          <Button
            variant="contained"
            className="login-button"
            type="submit"
            size="large"
            onClick={handleSubmit}
          >
            LOGIN
          </Button>
        </Stack>
        <Typography p={2} className="phrases">
          Forget password!
        </Typography>
        <Divider className="login-divider" variant="middle" />
        <Button variant="outlined" startIcon={<GoogleIcon />}>
          Sign up with Google
        </Button>
        <Typography p={2} className="phrases">
          If you dont have an account yet{' '}
          <Link href="/home/register2" onClick={() => {}}>
            contact the administration
          </Link>
        </Typography>
      </DialogContent>
    </Dialog>
  )
}

export default Login
