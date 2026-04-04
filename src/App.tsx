import { Container, Typography } from '@mui/material'

import {
  Alert,
  BetForm,
  ContactForm,
  Dialog,
  Header,
  Layout,
  Loader,
  Welcome
} from '@/components'
import { useAppHandler } from '@/hooks'

export const App = () => {
  const {
    betFormProps,
    alertProps,
    contactFormProps,
    clearFormDialogProps,
    incorrectScoreDialogProps,
    welcomeProps,
    isLoading,
    handleWelcomeModalOpen
  } = useAppHandler()

  return (
    <Layout>
      <Header handleClick={handleWelcomeModalOpen} />
      <Container
        component="main"
        sx={{
          textAlign: {
            xs: 'center',
            sm: 'left'
          }
        }}
      >
        <Typography component="h2" variant="h4" sx={{ mb: 2 }}>
          Preencha seus palpites
        </Typography>
        <BetForm {...betFormProps} />
        <ContactForm {...contactFormProps} />
      </Container>
      {clearFormDialogProps && <Dialog {...clearFormDialogProps} />}
      {incorrectScoreDialogProps && <Dialog {...incorrectScoreDialogProps} />}
      {alertProps && <Alert {...alertProps} />}
      <Welcome {...welcomeProps} />
      <Loader open={isLoading} />
    </Layout>
  )
}

export default App
