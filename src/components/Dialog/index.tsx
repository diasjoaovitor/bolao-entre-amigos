import { PriorityHigh } from '@mui/icons-material'
import {
  Button,
  Dialog as MuiDialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material'

export type TDialogParams = {
  title: string
  description?: string | string[]
  handleAccept(): void
  handleReject(): void
}

export type TDialogProps = {
  open: boolean
} & TDialogParams

export const Dialog = ({
  open,
  title,
  description,
  handleReject,
  handleAccept
}: TDialogProps) => {
  return (
    <MuiDialog open={!!open} onClose={handleReject}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {Array.isArray(description) ? (
          <List disablePadding dense>
            {description.map((item, index) => (
              <ListItem key={index} disableGutters>
                <ListItemIcon sx={{ minWidth: 'auto', mr: 1 }}>
                  <PriorityHigh color="warning" fontSize="small" />
                </ListItemIcon>
                <ListItemText>{item}</ListItemText>
              </ListItem>
            ))}
          </List>
        ) : (
          <DialogContentText>{description}</DialogContentText>
        )}
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          onClick={handleAccept}
          color="error"
          variant="contained"
        >
          Sim
        </Button>
        <Button onClick={handleReject} variant="contained">
          Não
        </Button>
      </DialogActions>
    </MuiDialog>
  )
}
