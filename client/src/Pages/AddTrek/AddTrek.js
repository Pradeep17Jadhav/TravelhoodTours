import React from "react";
import "./AddTrek.css";
import {
    Button,
    TextField,
    Dialog,
    DialogContent,
    Grid,
} from "@material-ui/core";

export default function AddTrek(props) {
    return (
        <div className="add-trek">
            <div className="container">
                <TextField
                    className="contact-form-textfield"
                    variant="outlined"
                    autoFocus
                    label="Name"
                    type="text"
                    fullWidth
                />
            </div>
        </div>
    );
}
