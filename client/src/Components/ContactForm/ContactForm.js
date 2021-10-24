import React from 'react';
import './ContactForm.css';
import { Button, TextField, Dialog, DialogContent } from '@material-ui/core';


export default function ContactForm(props) {
    return (
        <Dialog
            className="contact-form"
            open={props.open}
            onClose={props.handleClose}
        >
            <DialogContent className="contact-form-content">
                <div className="contact-form-thumbnail">
                    <div
                        className="contact-form-image"
                        style={{ "background": "url(" + require("../../Resources/contact_form/contact_form.jpg").default + ")" }}>
                    </div>
                    <div className="contact-form-title" >
                        Contact Us
                    </div>
                    <div className="contact-form-tagline" >
                        Feel free to drop us a line below!
                    </div>
                </div>

                <div className="contact-form-elements">
                    <TextField
                        className="contact-form-textfield"
                        variant="outlined"
                        autoFocus
                        label="Name"
                        type="text"
                        fullWidth
                    />

                    <TextField
                        className="contact-form-textfield"
                        variant="outlined"
                        label="Email Address"
                        type="email"
                        fullWidth
                    />

                    <TextField
                        className="contact-form-textfield"
                        variant="outlined"
                        label="Mobile Number"
                        fullWidth
                    />

                    <TextField
                        className="contact-form-textfield"
                        variant="outlined"
                        label="Message"
                        multiline
                        rows={5}
                        fullWidth
                    />

                </div>
                <Button className="btn-form-submit" onClick={props.handleClose} >
                    Submit
                </Button>
            </DialogContent>
        </Dialog>
    )
}