import {
  Container,
  Typography,
  Box,
  Grid,
  AppBar,
  Toolbar,
  Button,
} from '@mui/material'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function Home() {
  const handleSubmit = async () => {
    const checkoutSession = await fetch('/api/checkout_sessions', {
      method: 'POST',
      headers: { origin: 'http://localhost:3000' },
    })
    const checkoutSessionJson = await checkoutSession.json()
  
    const stripe = await getStripe()
    const {error} = await stripe.redirectToCheckout({
      sessionId: checkoutSessionJson.id,
    })
  
    if (error) {
      console.warn(error.message)
    }
  }
  
  return (
    <Container>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{flexGrow: 1}}>
          AI Flashcard
        </Typography>
        <SignedOut>
          <Button color="inherit" href="/sign-in">Sign in</Button>
          
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </Toolbar>
    </AppBar>

    <Box sx={{textAlign: 'center', my: 4}}>
    <Typography variant="h2" component="h1" gutterBottom>
      Welcome to AI Flashcard generator
    </Typography>
    <Typography variant="h5" component="h2" gutterBottom>
      The easiest way to create flashcards from your text.
    </Typography>
    <Button variant="contained" color="primary" sx={{mt: 2, mr: 2}} href="/generate">
      Get Started
    </Button>
    </Box>


    </Container>
  );
}
