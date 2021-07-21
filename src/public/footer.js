import React, { useState } from 'react';
import USF from './USF-Green-Gold.png';
import WCER from './WCER-logo-rev.png';

export default function Footer({props}) {
    return <div className="navbar navbar-expand-sm absolute-bottom navbar-light bg-dark mx-5">
        <div className="container">
            <ul className="navbar-nav mr-auto">
                <p class="text-light text-start fs-6 mx-1 mt-1">Copyright 2020 Board of Regents of the <br /> University of Wisconsin–Madison</p>
            </ul>
            <ul className="navbar-nav ml-auto">
                <img src={USF} class="" alt=""/>
                <img src={WCER} class="mx-5" alt=""/>
            </ul>
        </div>
    </div>

}