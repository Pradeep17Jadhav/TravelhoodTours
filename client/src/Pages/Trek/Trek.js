import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import './Trek.css';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Pricing from "../../Components/Pricing/Pricing";
import FloatingPricing from "../../Components/FloatingPricing/FloatingPricing";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import ScheduleIcon from '@material-ui/icons/Schedule';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import axios from "axios";
import { useParams } from 'react-router-dom';

export default function Trek(props) {
    const [trek, setTrek] = useState([]);
    const id = useParams().id;

    let location = { lat: 19.020473, lng: 72.843323 };


    let trekDate = new Date(trek.date).toUTCString().substring(5, 17);
    useEffect(() => {
        axios.get("/trek/" + id).then((response) => {
            setTrek(response.data[0]);
            console.log(response.data[0]);
        });
    }, []);

    if (!trek) return null;

    return (
        <div className="trek">
            <FloatingPricing
                date={trekDate}
                price={trek.price}
            />
            <div className="container">
                <Grid container className="container-grid">
                    <Grid className="trek-left-section" key="left" item xs={12} md={9}>
                        <div className="title">
                            <div className="left">
                                <h1 className="trek-name">{trek.name}</h1>
                                <div className="location">
                                    <span className="icon">
                                        <LocationOnOutlinedIcon />
                                    </span>
                                    {trek.location}
                                </div>
                            </div>
                            <div className="right">
                            </div>
                        </div>


                        <div className="details">
                            <Grid container>
                                <Grid className="details-item" key={"1"} item xs={6} sm={3} md={3}>
                                    <ScheduleIcon />
                                    <div className="details-item-info">
                                        <span className="details-item-title">
                                            Duration
                                        </span>
                                        <span>
                                            {trek.duration} Days
                                        </span>
                                    </div>
                                </Grid>
                                <Grid className="details-item" key={"2"} item xs={6} sm={3} md={3}>
                                    <PeopleOutlineIcon />
                                    <div className="details-item-info">
                                        <span className="details-item-title">
                                            Batch Size
                                        </span>
                                        <span>
                                            {trek.batchSize} People
                                        </span>
                                    </div>
                                </Grid>
                                <Grid className="details-item" key={"3"} item xs={6} sm={3} md={3}>
                                    <WhatshotIcon />
                                    <div className="details-item-info">
                                        <span className="details-item-title">
                                            Difficulty
                                        </span>
                                        <span>
                                            {trek.difficulty}
                                        </span>
                                    </div>
                                </Grid>
                                <Grid className="details-item" key={"4"} item xs={6} sm={3} md={3}>
                                    <InsertEmoticonIcon />
                                    <div className="details-item-info">
                                        <span className="details-item-title">
                                            Ratings
                                        </span>
                                        <span>
                                            5
                                        </span>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>


                        <div className="images">
                            <img src={trek.thumbnailUrl} alt={trek.name} />
                        </div>

                        <div className="highlights">
                            <h2 className="heading">
                                Highlights
                            </h2>
                            <div className="description">
                                {trek.highlights}
                                A well-facilitated campsite nestled on a lush green landscape alongside the banks of Kaluste Dam and surrounded by mystic valleys of the Western Ghats. <br />
                                Enjoy campfire with music in the evening and obtain a fun chit chat session with your dear ones to make splendid memories <br />
                                Get indulged in multiple indoor/outdoor games along with lake tubing and boating as well. <br />
                                Relish the delicious Evening Snacks, Dinner and Breakfast included in the camping in Igatpuri package to calm your hunger cravings
                            </div>
                        </div>

                        <div className="overview">
                            <h2 className="heading">
                                Overview
                            </h2>
                            <div className="description">
                                {trek.overview}
                            </div>
                        </div>

                        <div className="itinerary">
                            <h2 className="heading">
                                Itinerary
                            </h2>

                            <div className="description">
                                {(trek.trekItinerary || []).map((day, index) => {
                                    return (
                                        <div className="itenerary-day">
                                            <h4 className="itenerary-day-title">
                                                Day {index + 1}: {day.title}
                                            </h4>
                                            <ul>
                                                {day.timeline.map((element) => {
                                                    return (
                                                        <li>
                                                            {element.time}: {element.description}
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                            <div>

                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="more-details">
                            <h2 className="heading">
                                Details of the trek
                            </h2>
                            <div className="trek-info">
                                <div className="sub-heading">Trek Info</div>
                                <div className="points">
                                    Washroom facilities are common for everyone. <br />
                                    Bonfire is common for everyone. <br />
                                    Children below 5 years of age will not be charged.<br />
                                    Tents are allocated at first come first serve basis.
                                </div>
                            </div>
                            <div className="things-to-carry">
                                <div className="sub-heading">Things To Carry</div>
                                <div className="points">
                                    Back pack (50-60l) <br />
                                    Water bottle <br />
                                    Mosquito and insect repellen
                                </div>
                            </div>
                            <div className="difficulty">
                                <div className="sub-heading">Difficulty</div>
                                <div className="points">
                                    Difficulty is moderate. <br />
                                    Begginers can join. <br />
                                    Patients with heart diseases should not join the trek
                                </div>
                            </div>
                        </div>

                        <div className="included-excluded">
                            <h2 className="heading">
                                Included / Excluded
                            </h2>
                            <div className="description">
                                <Grid container spacing={3}>
                                    <Grid className="included" key={"included"} item sm={12} md={6}>
                                        {(trek.included || []).map((point) => {
                                            return (
                                                <div className="included-item">
                                                    <span className="icon">
                                                        <CheckIcon className="check-icon" />
                                                    </span>
                                                    <span>{point}</span>
                                                </div>
                                            )
                                        })}

                                    </Grid>
                                    <Grid className="excluded" key={"excluded"} item sm={12} md={6}>
                                        {(trek.excluded || []).map((point) => {
                                            return (
                                                <div className="excluded-item">
                                                    <CloseIcon className="icon cross-icon" />
                                                    <span className="excluded-item-desc">{point}</span>
                                                </div>
                                            );
                                        })}
                                    </Grid>
                                </Grid>
                            </div>
                        </div>

{/* 
                        <div className="location-map">
                            <h2 className="heading">
                                Location Map
                            </h2>
                            <div className="location-map-renderer">
                                <Map
                                    google={window.google}
                                    zoom={18}
                                    center={location}>
                                    <Marker key="marker_1"
                                        position={{
                                            lat: 47.444,
                                            lng: -122.176
                                        }}
                                    />
                                </Map>
                            </div>
                        </div> */}

                    </Grid>

                    <Grid className="trek-right-section" key="right" item xs={12} md={3}>
                        <Pricing className="pricing"
                            price={trek.price}
                            date={trekDate}
                        />
                    </Grid>
                </Grid>
            </div>




        </div>
    );
}