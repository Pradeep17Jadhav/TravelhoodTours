import React from 'react';
import './Pricing.css';
import Button from '@material-ui/core/Button';

export default function Pricing(props) {

    return (
        <div className="pricing">
            <div>
                <div className="price-box">
                    <div>
                        From
                    </div>
                    <div className="price">
                        ₹ {props.price}
                    </div>
                    <div>
                        Per person
                    </div>
                </div>
            </div>

            <div>
                <div className="next-date">
                    <div>
                        Next Date
                    </div>
                    <div className="date">
                        {props.date}
                    </div>
                </div>
            </div>

            <a className="contact-booking" href="https://wa.me/+919664523347" target="_blank">
                <Button className="button-contact" variant="contained" color="primary" disableElevation>Contact For Booking</Button>
            </a>
            
        </div>
    )
}