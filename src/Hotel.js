import React from "react";

export default function Hotel() {
    return <React.Fragment>
        <section className="container-fluid py-4 p-md-3 p-lg-5 bg-mtd">
            <h2>Hilton Hotel</h2>
            <div>
                <img src={require('./images/hilton-singapore.jpeg')} className="img-fluid" alt="hilton hotel singapore"/>
            </div>
            <div className="mt-3 mb-5">
                <p>
                    Located in the center of Orchard Road, The Hilton Singapore Orchard offers a prime spot for exploring the city's premium shopping and entertainment district. The Hotel is within walking distance to subway train stations with various connections to Marina Bay Sands, Gardens by the Bay, and Universal Studios Singapore. Discover the many fine dining options and vibrant shopping paradise within the vicinity from luxury brands to high street stores.
                </p>
                <p>
                    Discover the newly renovated botanical-inspired interior guestrooms and modern amenities. The new rooms are sustainable with innovative room featuring eco-friendly motion sensor-controlled lighting and air-conditioning that add to another level of convenience. Relax on the chaise lounge by the windows with an abundance of natural light and sip on a cup of coffee from the in-room Nespresso coffee machine while enjoying programme on the 55-inch LED TV or stay connected with wifi. Refresh in marble bathroom which comes with bulk comfortable bath amenities, bathtub and separate walk in rain shower.
                </p>
                <p>
                    The Hilton Orchard Hotel Singapore @ 333 Orchard Road
                    <br />Singapore 238867
                    <br /><br />
                    <a href="https://www.hilton.com/en/hotels/sinorhi-hilton-singapore-orchard/" className="text-light" target="blank">
                        https://www.hilton.com/en/hotels/sinorhi-hilton-singapore-orchard/
                    </a>
                </p>
            </div>
        </section>
    </React.Fragment>
}