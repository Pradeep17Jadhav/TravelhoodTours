import React from 'react';
import { Grid } from '@material-ui/core';
import PhotoBox from '../../Components/PhotoBox/PhotoBox';
import './Holidays.css';

export default function Holidays(props) {
    let arrHolidays = [
        {
            id: 0,
            thumbnail: "holiday1.jpg",
            title: "Shimla Manali",
            desc: "This is the description for this holiday package"
        },
        {
            id: 1,
            thumbnail: "holiday2.png",
            title: "Jammu & Kashmir",
            desc: "This is the description for this holiday package"
        },
        {
            id: 2,
            thumbnail: "holiday3.png",
            title: "Jaipur",
            desc: "This is the description for this holiday package"
        }
    ];

    for (let i = 0; i < arrHolidays.length; i++) 
    {
        let currImage = arrHolidays[i].thumbnail;
        arrHolidays[i]["image"] = require("../../Resources/holidays/" + currImage).default;
    }


    return (
        <div className="holidays">
            <h1>
                Holidays
            </h1>


            <Grid container spacing={3}>
                {arrHolidays.map(
                    holiday => {
                        return (
                            <Grid key = {holiday.id} item xs={12} sm={4}>
                                <PhotoBox
                                    title = {holiday.title}
                                    desc = {holiday.desc}
                                    image={holiday.image}
                                ></PhotoBox>
                            </Grid>
                        )
                    }
                )}

            </Grid>
        </div>
    )
}