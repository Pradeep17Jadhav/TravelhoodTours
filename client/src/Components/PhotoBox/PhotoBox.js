import React from 'react';
import './PhotoBox.css';
import { Typography, Button } from '@material-ui/core';

export default function PhotoBox(props) {

    return (
        <div className="photobox">
            <div className="photobox-thumbnail" style={{ "background": "url(" + props.image + ")" }} />
            <div className="photobox-content">
                <Typography className="photobox-title" variant="subtitle1" gutterBottom>
                    {props.title.toUpperCase()}
                </Typography>

                <Typography className="photobox-description" variant="caption">
                    {props.desc}
                </Typography>

                <div className="photobox-button">
                    <Button className="btn-one">
                        View Itinerary
                    </Button>
                </div>
            </div>
        </div>
    )
}