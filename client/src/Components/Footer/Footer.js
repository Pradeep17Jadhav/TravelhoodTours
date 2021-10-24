import React from 'react';
import { Button, Grid } from '@material-ui/core';
import './Footer.css';
import ContactForm from '../../Components/ContactForm/ContactForm'


export default function Footer(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="footer">
            <Grid className="footer-content" container spacing={3}>
                <Grid className="footer-row-one" item xs={12} sm={4} md={3}>
                    <div className="footer-title">
                        Need Help?
                    </div>
                    <div className="footer-row-items">
                        <div className="footer-contact-item">
                            <div className="footer-contact-item-name">
                                Contact
                            </div>
                            <div className="footer-contact-item-number">
                                +91 81081 73150
                            </div>
                        </div>
                    </div>
                    <div className="footer-row-items">
                        <div className="footer-contact-item">
                            <div className="footer-contact-item-name">
                                Email
                            </div>
                            <div className="footer-contact-item-email">
                                <a href="mailto:pradeep@gmail.com">pr88dp@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-row-items">
                        <Button
                            className="footer-contact-us-btn"
                            variant="outlined"
                            color="primary"
                            onClick={handleClickOpen}
                        >
                            Contact Us
                        </Button>
                        <ContactForm open={open} handleClose={handleClose} />
                    </div>
                </Grid>

                <Grid item xs={12} sm={4} md={3}>
                    <div className="footer-title">
                        Policies
                    </div>
                    <div>
                        <a href="http://travelhood.in/">
                            {"Refund & Cancellation Policy"}
                        </a>
                        <a href="http://travelhood.in/">
                            {"Privacy and Cookies"}
                        </a>
                        <a href="http://travelhood.in/">
                            {"Terms of Service"}
                        </a>
                        <a href="http://travelhood.in/">
                            {"General Terms & Conditions"}
                        </a>
                    </div>
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <div className="footer-title">
                        Hello
                    </div>
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <div className="footer-title">
                        About Us
                    </div>
                    <div>
                        <a href="http://travelhood.in/">
                            {"Our Team"}
                        </a>
                        <a href="http://travelhood.in/">
                            {"Our History"}
                        </a>
                        <a href="http://travelhood.in/">
                            {"Contact Us"}
                        </a>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}