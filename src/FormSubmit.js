import React from "react";

export default function FormSubmit() {
    return <React.Fragment>
        <section className="container-fluid p-5 bg-mtd text-center text-md-start">
            <h2 className="d-inline-block" style={{borderBottom:'2px solid',paddingBottom:'4px'}}>Registration Completed</h2>
            
            <div className="mt-3 mb-5 " style={{height:'90vh'}}>
                <h5>Thank you for your registration, we will send you a confirmation soon.</h5>

                <p>We look forward to seeing you at the Mars Asia MTD 2022 on the 15th - 17th June 2022(Singapore), 28th - 30th June 2022(China).</p>
                <p>To view your <a href="/itinerary" className="text-light">itinerary</a>, tap on the itinerary icon in the menu above</p>
                <p>For links to information about the hotel, tap on the <a href="/hotel" className="text-light">Hotel</a> in the menu above</p>
            </div>
        </section>
    </React.Fragment>
}
