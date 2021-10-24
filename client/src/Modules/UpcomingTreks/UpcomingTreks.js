import React, { useState, useEffect } from "react";
import Card from "../../Components/Card/Card";
import { Grid } from "@material-ui/core";
import "./UpcomingTreks.css";
import Trek from "../../Pages/Trek/Trek";
import axios from "axios";

export default function UpcomingTreks(props) {
    const [arrUpcomingTreks, setArrUpcomingTreks] = useState([]);

    useEffect(() => {
        axios.get("/getTrek").then((response) => {
            console.log(response.data);
            setArrUpcomingTreks(response.data);
        });
    }, []);

    if (!arrUpcomingTreks) return null;

    let OnTrekClicked = (trekId) => {
        window.open("http://localhost:3000/trek/" + trekId , "_self");
    }

    return (
        <div className="upcomingTreks">
            <h1>Upcoming Treks</h1>

            <Grid container spacing={3}>
                {arrUpcomingTreks.map((trek) => {
                    return (
                        <Grid key={trek.id} item xs={12} sm={4} md={3}>
                            <Card
                                id={trek.id}
                                name={trek.name}
                                location={trek.location}
                                date={trek.date}
                                duration={trek.duration}
                                price={trek.price}
                                thumbnailUrl={trek.thumbnailUrl}
                            ></Card>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
}
