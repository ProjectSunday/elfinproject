import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const resetEverything = () => {
    caches.delete('elfin')
    localStorage.removeItem('ELFIN-SETTINGS')
    window.location.reload()
}

export default function AlertDialog({ open, onClose }) {

    const onYes = () => {
        resetEverything()
        onClose()
    }

    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    - Remove all custom fields and restore back to default.<br />
                    - Restore subject back to default.<br />
                    - Restore body back to default.<br />
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    No
                </Button>
                <Button onClick={onYes} color="primary" autoFocus>
                    Yes
                </Button>
            </DialogActions>
        </Dialog>
    );
}
