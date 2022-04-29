import React from "react";

export default function Itinerary() {
    return <React.Fragment>
        <section className="container-fluid py-4 bg-mtd p-md-3 p-lg-5">
            <h2>Itinerary</h2>
            <div className="d-flex">
                <a href="#day1" className="badge bg-light text-dark text-decoration-none">Arrival</a>
                <a href="#day2" className="badge bg-light text-dark text-decoration-none ms-1">Presentation Day</a>
                <a href="#day3" className="badge bg-light text-dark text-decoration-none ms-1">Departure</a>
                <a href="#dress" className="badge bg-light text-dark text-decoration-none ms-1">Dress Code</a>
            </div>
            <div className="mt-3">
                {/*  Arrival Day */}
                <div id="day1">
                    <p>15th June 2022 (Singapore), 28th June 2022 (China) - Arrival Day:</p>
                    <p>Travel to Singapore at leisure to arrive at hotel by late afternoon:</p>
                    <div className="row">
                        <div className="col-3 border-end">
                            3.00pm
                        </div>
                        <div className="col-9">
                            <p>This is the official Check-In time.</p>

                            <p>On arrival at hotel, you will be met and will be shown to the Hotel Reception where you will
                                be
                                able to check in.</p>

                            <p>"Mars Club Lounge" wiil be your lounge and waiting area where refreshments including coffee
                                breaks will be served throughout the day on MTD Evalutation Day. Please feel free to take
                                bottles of water & snacks whilst visiting and back to your room.​</p>

                            <p>After check in, please take time to relax and enjoy.</p>
                        </div>
                        <div className="col-12 p-3"></div>
                        <div className="col-3 border-end">
                            From 5.00pm
                        </div>
                        <div className="col-9">
                            <p>Please head for a relaxed welcome cocktail dinner.</p>

                            <p>Mars Crew will be on hand to show you to the venue.</p>

                            <p>Overnight.</p>
                        </div>
                    </div>
                </div>
                <hr/>
                {/* Day 2 */}
                <div id="day2" className="mt-3 py-4">
                    <p>16th June 2022 (Singapore), 29th June 2022 (China) - Project Presentation Day:</p>
                    <div className="row">
                        <div className="col-3 border-end">
                            8.00am
                        </div>
                        <div className="col-9">
                            <p>Breakfast will be served.</p>

                            <p>Refreshments will be served in the Mars Club Lounge throughout the day. Please feel free to
                                take bottles of water & snacks whilst visiting and back to your room.</p>

                            <p>International Buffet Lunch will be served from 12.00pm to 2.30pm.</p>

                            <p>The exact presentation time slots will be confirmed to you once we have received all
                                acceptance & travel time, etc. </p>
                        </div>
                        <div className="col-12 p-3"></div>
                        <div className="col-3 border-end">
                            8.00am
                        </div>
                        <div className="col-9">
                            <p>Finalists for the morning session should congregate 30 mins before your presentation time.
                                Your guests are also welcome to accompany you and stay in the lounge whilst you present your
                                projects.</p>

                            <p>Morning Presentations begin – Your exact room will be advised.</p>

                            <p>Mars Crew will be on hand to assist with any queries and will show you to the Project
                                Presentation rooms.</p>

                            <p>Once you have finished your presentations, you are free to enjoy the rest of your time at
                                leisure in, with the hotel facilities, shopping spree or tours. The choice is yours.</p>

                            <p>We will have several vehicles that will be departing outside the hotel, visiting and dropping
                                you off at various points of interest throughout Singapore which you are free to hop on &
                                off at leisure. There is no charge for this.</p>
                        </div>
                        <div className="col-12 p-3"></div>
                        <div className="col-3 border-end">
                            12.00pm - 2.30pm
                        </div>
                        <div className="col-9">
                            <p>Buffet Lunch will be served.</p>
                        </div>
                        <div className="col-3"></div>
                        <div className="col-9 p-3 mt-3">
                            <h6><b>Afternoon Presentation begin:</b></h6>
                        </div>
                        <div className="col-3 border-end">
                            From 1.00pm
                        </div>
                        <div className="col-9">
                            <p>The exact presentation time slots will be confirmed to you once we have received all
                                acceptance & travel times etc.</p>

                            <p>Once you have finished your presentations, you are free to enjoy the rest of your time at
                                leisure in, with the hotel facilities, shopping spree or tours. The choice is yours.</p>
                        </div>

                        <div className="col-3"></div>
                        <div className="col-9 p-3 mt-3">
                            <h6><b>Awards Ceremony & Evening Celebration:</b></h6>
                        </div>
                        <div className="col-3 border-end">
                            7.00pm
                        </div>
                        <div className="col-9">
                            <p>Please meet for Pre-Dinner drinks served at the Grand Ballroom located.</p>
                        </div>
                        <div className="col-12 p-3"></div>
                        <div className="col-3 border-end">
                            7.30pm
                        </div>
                        <div className="col-9">
                            <p>Dinner served. Winners will be announced this evening.</p>

                            <p>Evening ends.</p>

                            <p>Overnight.</p>
                        </div>


                    </div>
                </div>
                <hr/>
                {/* Departure Day */}
                <div id="day3" className="mt-3 py-4">
                    <p>17th June 2022 (Singapore), 30th June 2022 (China):</p>
                    <div className="row">
                        <div className="col-3 border-end">
                            9.00am
                        </div>
                        <div className="col-9">
                            <p>We will have several vehicles that will be departing outside, visiting and dropping you off at various points of interest which you are free to hop on & off at leisure. There is no charge for this.</p>
                        </div>
                        <div className="col-12 p-3"></div>
                        <div className="col-3 border-end">
                            12.00pm
                        </div>
                        <div className="col-9">
                            <p>Check-Out to be completed.</p>

                            <p>Please settle any 'Extras' e.g. mini-bar, room service etc. with the Hotel directly, prior to your departure.</p>
                        </div>
                    </div>
                </div>
                <hr/>
                {/* Dress Code */}
                <div id="dress" className="mt-3 mb-5 py-4">
                    <h6><b>Dress Code</b></h6>
                    <div className="row">
                        {/* Wednesday */}
                        <div className="col-12 mt-3">
                            <h6>Wednesday:</h6>
                        </div>
                        <div className="col-6 col-md-3 border-end">
                            <p>Arrival / Network Dinner</p>
                        </div>
                        <div className="col-6 col-md-9">
                            <p>Business Casual</p>
                        </div>
                        {/* Thursday */}
                        <div className="col-12 mt-3">
                            <h6>Thursday:</h6>
                        </div>
                        <div className="col-6 col-md-3 border-end">
                            <p>Presentation Day</p>
                        </div>
                        <div className="col-6 col-md-9">
                            <p>Business Casual</p>
                        </div>
                        <div className="col-12 p-3"></div>
                        <div className="col-6 col-md-3 border-end">
                            <p>Make the Difference Awards Ceremony In the Evening</p>
                        </div>
                        <div className="col-6 col-md-9">
                            <p>Lounge Suits or Black Tie</p>

                            <p>Evening or Cocktail Wear</p>
                        </div>

                        {/* Friday */}
                        <div className="col-12 mt-3">
                            <h6>Friday:</h6>
                        </div>
                        <div className="col-6 col-md-3 border-end">
                            <p>Free day / Departure</p>
                        </div>
                        <div className="col-6 col-md-9">
                            <p>Casual</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
}