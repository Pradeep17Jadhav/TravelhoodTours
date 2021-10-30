import React from 'react';
import './Homepage.css';
import UpcomingTreks from '../../Modules/UpcomingTreks/UpcomingTreks';
import Holidays from '../../Modules/Holidays/Holidays';

export default function Homepage() {
    return (
        <div className="homepage">
            <UpcomingTreks></UpcomingTreks>
            <Holidays></Holidays>
        </div>
    );
}