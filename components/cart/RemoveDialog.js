import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core'

export default function RemoveDialog({ open, setOpen, name, action }) {
  return (<div data-testid='dialogue'>
    <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm">
      <DialogTitle> {name}</DialogTitle>
      <DialogContent>
        <DialogContentText>Are you sure that you want to remove selected item?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <div date-testid = "btn1">
        <Button onClick={action}>Remove Item</Button>
        </div>

        <Button onClick={() => setOpen(false)} color="primary">
          Keep Item
        </Button>
      </DialogActions>
    </Dialog>
    </div>
  )
}
