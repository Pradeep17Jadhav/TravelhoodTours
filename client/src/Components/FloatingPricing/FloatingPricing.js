import React from 'react';
import './FloatingPricing.css';
import Button from '@material-ui/core/Button';

export default function FloatingPricing(props) {

    return (
        <div className="floatingPricing">
            <div className="price-box">
                <div>
                    From
                </div>
                <div className="price">
                    ₹ {props.price}
                </div>
            </div>

            <div className="next-date">
                <div>
                    Next Date
                </div>
                <div className="date">
                    {props.date}
                </div>
            </div>

            <a className="contact-booking" href="https://wa.me/+919664523347" target="_blank">
                <Button className="button-contact" variant="contained" color="primary" disableElevation>Contact</Button>
            </a>
        </div>
    )
}