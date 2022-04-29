import React from "react";

export default function Home(props) {
    return <React.Fragment>
        <section className="container-fluid py-4 p-0">
            <div className="d-flex justify-content-center">
                <img src="https://miro.medium.com/max/1272/0*TFmFug4zhzfbKsd5.jpg" className="img-fluid" alt="" />
            </div>

            <div className="bg-mtd pt-4 px-2 p-md-3 p-lg-5">
                <div className="text-center pb-4">
                    <div className="scroll-frame mb-3">
                        <div className="scroll-text">
                            <h2>
                                Welcome to 
                                Make the Difference Asia Regional Finalists 
                                in Singapore / China
                            </h2>
                        </div>
                    </div>
                    
                    <a href="/register" className="btn bg-yellow text-dark fw-bolder bg-reg">Proceed to Register</a>                    
                    {/* Link is internationally removed */}
                    <a href="/" className="btn bg-green text-dark fw-bolder m-2 bg-reg">Mobile App</a>
                </div>
                <p>Checklist for Entry to Singapore</p>
                <ul className="checklist">
                    <li>
                        <span>Prioritization (VTL Lanes moving on to a simplified travel framework for all fully vaccinated
                            travelers wef 1 Apr 2022). Please kindly ensure your vaccination proof document is in order. Your
                            vaccination certificate can be digitally verified and recognised by Singapore authorities.</span>

                        <span>List of Digitally Verifiable COVID-19 Vaccination Certificates Currently Recognised by Singapore</span>

                        <span>You will receive a vaccination acceptance letter if the verification is successful, which you can use
                            as proof to ensure smooth and quicker boarding and immigration checks. Alternatively, travelers can
                            also show their vaccination app or vaccination certificates as proof of vaccination upon arrival but
                            it will be subject to a longer manual immigration counter officers’ queue verification and
                            authentication.</span>

                    </li>
                    <li>
                        <span>A mandatory pre-departure test (PDT) must be taken within 2 days before departing for Singapore and
                            obtain a negative test result administered by approved providers of your country.</span>

                        <span>There is a list of internationally accredited, recognized lab/clinic/medical facility below;
                            Accreditation bodies for COVID-19 testing</span>

                        <span>ie. If you are departing for Singapore on 13 June before 2359 hour flight, the earliest you can take
                            your PDT is on 11 June 0001hr.</span>

                        <span>ie. if you are departing for Singapore on 14 June before 2359 hours flight, the earliest you can take
                            your PDT is on 12 June 0001 hr.</span>

                        <span>ie. if you are departing for Singapore on 15 June before 2359 hours flight, the earliest you can take
                            your PDT is on 13 June 0001 hr.</span>

                        <span>Please note that PDT is not required if you are tested positive for COVID-19 between 7 to 90 days
                            before your date of departure for Singapore, please view the link to check if your pre-departure
                            test can be waived, and the documentation required to prove your recovery.</span>

                        <span>Exemption from Pre-Departure Test and Border Measures for Recently-Recovered Travellers</span>

                        <span>For all Vaccination Proofs & PDT it has to be in English or accompanied with a notarised English
                            Translation containing traveler’s full name, date or birth, passport number used to travel to
                            Singapore (minimum 6 months validity) and reflect the date, country of vaccination and result of
                            your Covid-19 test.</span>
                    </li>
                    <li>
                        <span>
                            Purchase a travel Insurance with minimum coverage of S$30,000 for COVID-19-related medical treatment
                            and hospitalization costs during your stay in Singapore including any extension stay.
                        </span>
                    </li>
                    <li>
                        <span>Complete a SGAC (Singapore Arrival Card) with electronic health declaration and upload online your
                            vaccination certificate 3 days before arrivals to Singapore.</span>

                        <span>SG Arrival Card</span>

                        <span>You will receive an email acknowledgement which you can use for clearance at preboarding and custom
                            immigration checkpoint.</span>
                    </li>
                </ul>
                <p className="mt-5">Above checklist is subject to changes and updates.</p>
                <p>You may be subject to border restrictions;</p>
                <ol>
                    <li>If you experience onset any COVID-19 symptoms in the last 7 days before departure. This may include fever, cough, runny nose, sore throat, loss of taste or smell.</li>
                    <li>If your 7 days travel history includes at least one restricted category country that you’ve travelled to before arriving Singapore.</li>
                </ol>
            </div>
        </section>
    </React.Fragment>
}