import React, { useState, useRef } from 'react'
import { useNavigate } from "react-router-dom";

const RegForm = () => {
    const [finalist, setFinalist] = useState(false);
    const [page, setPage] = useState("associate");
    const [formState, setFormState] = useState({
        // Associate
        'Title': "",
        'First_name': "",
        'Last_name': "",
        'Email': "",
        'Country': "Australia",

        'Mobile': "",
        'Office_no': "",
        'Attendee_type': "",
        'Participation_country': "",
        'Segment': "",

        'Function': "",
        'Project': "",
        'Name_passport': "",
        'Passport_no': "",
        'Passport_expiry': "",

        'Nationality': "",
        'Date_of_birth': "",
        'Country_of_birth': "Australia",
        'Diet': "",
        'Medical': "",

        'partner': "No",
        'Partner_title': "",
        'Partner_first_name': "",
        'Partner_last_name': "",
        'Relationship': "",
        'Language': "",
        'Partner_Name_passport': "",
        'Partner_Passport_no': "",
        'Partner_Passport_expiry': "",
        'Partner_Nationality': "",
        'Partner_Date_of_birth': "",
        'Partner_Country_of_birth': "Australia",
        'Gala_dinner': "",
        'Partner_Diet': "",
        'Partner_Medical': "",

        'Visa_letter': "",
        'Arrival_date': "",
        'Country_origin': "",
        'Arrival_flight_no': "",
        'Flight_ETA': "",
        'Arrival_transfer': "",
        'Departure_date': "",
        'Country_destination': "",
        'Departure_flight_no': "",
        'Flight_ETD': "",
        'Departure_transfer': "",
        'Check_in_date': "",
        'Check_out_date': "",
        'Smoking': "",
        'Bed': "",

    })
    const updateFormField = (e) => {
        setFormState(
            {
                ...formState,
                [e.target.name]: e.target.value
            }
        )
    }
    const formRef = useRef(null)
    const scriptUrl = "<put ur google key here>" // note that you need to place ur code here
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(scriptUrl, {
            method: 'POST',
            body: new FormData(formRef.current),

        }).then(res => {
            console.log("SUCCESSFULLY SUBMITTED")
            window.scrollTo(0, 0);
            navigate('/form_submit')
        })
            .catch(err => console.log(err))
    }
    const updateFinalist = (e) => {
        if (e.target.value === "Finalist") {
            setFinalist(true)
        } else {
            setFinalist(false)
        }
        setFormState(
            {
                ...formState,
                [e.target.name]: e.target.value,
            }
        )
    }
    const updatePartner = (e) => {
        if (e.target.value === "No") {
            setFormState(
                {
                    ...formState,
                    'partner': "No",
                    'Partner_title': "",
                    'Partner_first_name': "",
                    'Partner_last_name': "",
                    'Relationship': "",
                    'Language': "",
                    'Partner_Name_passport': "",
                    'Partner_Passport_no': "",
                    'Partner_Passport_expiry': "",
                    'Partner_Nationality': "",
                    'Partner_Date_of_birth': "",
                    'Partner_Country_of_birth': "Australia",
                    'Gala_dinner': "",
                    'Partner_Diet': "",
                    'Partner_Medical': ""
                }
            )
        }
        else {
            setFormState(
                {
                    ...formState,
                    [e.target.name]: e.target.value
                }
            )
        }

    }
    return (<React.Fragment>
        <section className='container-fluid p-0 bg-mtd pb-5'>
            <form ref={formRef} onSubmit={handleSubmit} name="google-sheet">
                {page === "associate" ?
                    <div className="container py-5">
                        <h5>(A) ASSOCIATE INFORMATION</h5>
                        {/* <!-- title --> */}
                        <div className="row">
                            <div className="col-4"><label htmlFor="Title" className="form-label">Title:</label></div>
                            <div className="col-8">
                                <input type="radio" name="Title" onChange={updateFormField} value="Mr" checked={formState.Title === "Mr"} /> Mr
                                <input type="radio" name="Title" onChange={updateFormField} className="ms-2" value="Ms" checked={formState.Title === "Ms"} /> Ms
                                <input type="radio" name="Title" onChange={updateFormField} className="ms-2" value="Mdm" checked={formState.Title === "Mdm"} /> Mdm
                                <input type="radio" name="Title" onChange={updateFormField} className="ms-2" value="Dr" checked={formState.Title === "Dr"} /> Dr
                            </div>
                        </div>
                        {/* <!-- first name --> */}
                        <div className="row mt-2">
                            <div className="col-4"><label htmlFor="First_name" className="form-label">First Name:</label></div>
                            <div className="col-8">
                                <input type="text" name="First_name" onChange={updateFormField} value={formState.First_name} className="form-control form-control-sm" placeholder="first name" />
                            </div>
                        </div>
                        {/* <!-- last name --> */}
                        <div className="row mt-2">
                            <div className="col-4"><label htmlFor="Last_name" className="form-label">Last Name:</label></div>
                            <div className="col-8">
                                <input type="text" name="Last_name" onChange={updateFormField} value={formState.Last_name} className="form-control form-control-sm" placeholder="last name (surname)" />
                            </div>
                        </div>
                        {/* <!-- Email --> */}
                        <div className="row mt-2">
                            <div className="col-4"><label htmlFor="Email" className="form-label">Email:</label></div>
                            <div className="col-8">
                                <input type="email" name="Email" onChange={updateFormField} value={formState.Email} className="form-control form-control-sm" placeholder="email" />
                            </div>
                        </div>
                        {/* <!-- Country --> */}
                        <div className="row mt-2">
                            <div className="col-4"><label htmlFor="Country" className="form-label">Country:</label></div>
                            <div className="col-8">
                                <select name="Country" onChange={updateFormField} value={formState.Country} className="form-control form-control-sm">
                                    <option value="Afganistan">Afghanistan</option>
                                    <option value="Albania">Albania</option>
                                    <option value="Algeria">Algeria</option>
                                    <option value="American Samoa">American Samoa</option>
                                    <option value="Andorra">Andorra</option>
                                    <option value="Angola">Angola</option>
                                    <option value="Anguilla">Anguilla</option>
                                    <option value="Antigua & Barbuda">Antigua & Barbuda</option>
                                    <option value="Argentina">Argentina</option>
                                    <option value="Armenia">Armenia</option>
                                    <option value="Aruba">Aruba</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Austria">Austria</option>
                                    <option value="Azerbaijan">Azerbaijan</option>
                                    <option value="Bahamas">Bahamas</option>
                                    <option value="Bahrain">Bahrain</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Barbados">Barbados</option>
                                    <option value="Belarus">Belarus</option>
                                    <option value="Belgium">Belgium</option>
                                    <option value="Belize">Belize</option>
                                    <option value="Benin">Benin</option>
                                    <option value="Bermuda">Bermuda</option>
                                    <option value="Bhutan">Bhutan</option>
                                    <option value="Bolivia">Bolivia</option>
                                    <option value="Bonaire">Bonaire</option>
                                    <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
                                    <option value="Botswana">Botswana</option>
                                    <option value="Brazil">Brazil</option>
                                    <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
                                    <option value="Brunei">Brunei</option>
                                    <option value="Bulgaria">Bulgaria</option>
                                    <option value="Burkina Faso">Burkina Faso</option>
                                    <option value="Burundi">Burundi</option>
                                    <option value="Cambodia">Cambodia</option>
                                    <option value="Cameroon">Cameroon</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Canary Islands">Canary Islands</option>
                                    <option value="Cape Verde">Cape Verde</option>
                                    <option value="Cayman Islands">Cayman Islands</option>
                                    <option value="Central African Republic">Central African Republic</option>
                                    <option value="Chad">Chad</option>
                                    <option value="Channel Islands">Channel Islands</option>
                                    <option value="Chile">Chile</option>
                                    <option value="China">China</option>
                                    <option value="Christmas Island">Christmas Island</option>
                                    <option value="Cocos Island">Cocos Island</option>
                                    <option value="Colombia">Colombia</option>
                                    <option value="Comoros">Comoros</option>
                                    <option value="Congo">Congo</option>
                                    <option value="Cook Islands">Cook Islands</option>
                                    <option value="Costa Rica">Costa Rica</option>
                                    <option value="Cote DIvoire">Cote DIvoire</option>
                                    <option value="Croatia">Croatia</option>
                                    <option value="Cuba">Cuba</option>
                                    <option value="Curaco">Curacao</option>
                                    <option value="Cyprus">Cyprus</option>
                                    <option value="Czech Republic">Czech Republic</option>
                                    <option value="Denmark">Denmark</option>
                                    <option value="Djibouti">Djibouti</option>
                                    <option value="Dominica">Dominica</option>
                                    <option value="Dominican Republic">Dominican Republic</option>
                                    <option value="East Timor">East Timor</option>
                                    <option value="Ecuador">Ecuador</option>
                                    <option value="Egypt">Egypt</option>
                                    <option value="El Salvador">El Salvador</option>
                                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                                    <option value="Eritrea">Eritrea</option>
                                    <option value="Estonia">Estonia</option>
                                    <option value="Ethiopia">Ethiopia</option>
                                    <option value="Falkland Islands">Falkland Islands</option>
                                    <option value="Faroe Islands">Faroe Islands</option>
                                    <option value="Fiji">Fiji</option>
                                    <option value="Finland">Finland</option>
                                    <option value="France">France</option>
                                    <option value="French Guiana">French Guiana</option>
                                    <option value="French Polynesia">French Polynesia</option>
                                    <option value="French Southern Ter">French Southern Ter</option>
                                    <option value="Gabon">Gabon</option>
                                    <option value="Gambia">Gambia</option>
                                    <option value="Georgia">Georgia</option>
                                    <option value="Germany">Germany</option>
                                    <option value="Ghana">Ghana</option>
                                    <option value="Gibraltar">Gibraltar</option>
                                    <option value="Great Britain">Great Britain</option>
                                    <option value="Greece">Greece</option>
                                    <option value="Greenland">Greenland</option>
                                    <option value="Grenada">Grenada</option>
                                    <option value="Guadeloupe">Guadeloupe</option>
                                    <option value="Guam">Guam</option>
                                    <option value="Guatemala">Guatemala</option>
                                    <option value="Guinea">Guinea</option>
                                    <option value="Guyana">Guyana</option>
                                    <option value="Haiti">Haiti</option>
                                    <option value="Hawaii">Hawaii</option>
                                    <option value="Honduras">Honduras</option>
                                    <option value="Hong Kong">Hong Kong</option>
                                    <option value="Hungary">Hungary</option>
                                    <option value="Iceland">Iceland</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="India">India</option>
                                    <option value="Iran">Iran</option>
                                    <option value="Iraq">Iraq</option>
                                    <option value="Ireland">Ireland</option>
                                    <option value="Isle of Man">Isle of Man</option>
                                    <option value="Israel">Israel</option>
                                    <option value="Italy">Italy</option>
                                    <option value="Jamaica">Jamaica</option>
                                    <option value="Japan">Japan</option>
                                    <option value="Jordan">Jordan</option>
                                    <option value="Kazakhstan">Kazakhstan</option>
                                    <option value="Kenya">Kenya</option>
                                    <option value="Kiribati">Kiribati</option>
                                    <option value="Korea North">Korea North</option>
                                    <option value="Korea Sout">Korea South</option>
                                    <option value="Kuwait">Kuwait</option>
                                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                                    <option value="Laos">Laos</option>
                                    <option value="Latvia">Latvia</option>
                                    <option value="Lebanon">Lebanon</option>
                                    <option value="Lesotho">Lesotho</option>
                                    <option value="Liberia">Liberia</option>
                                    <option value="Libya">Libya</option>
                                    <option value="Liechtenstein">Liechtenstein</option>
                                    <option value="Lithuania">Lithuania</option>
                                    <option value="Luxembourg">Luxembourg</option>
                                    <option value="Macau">Macau</option>
                                    <option value="Macedonia">Macedonia</option>
                                    <option value="Madagascar">Madagascar</option>
                                    <option value="Malaysia">Malaysia</option>
                                    <option value="Malawi">Malawi</option>
                                    <option value="Maldives">Maldives</option>
                                    <option value="Mali">Mali</option>
                                    <option value="Malta">Malta</option>
                                    <option value="Marshall Islands">Marshall Islands</option>
                                    <option value="Martinique">Martinique</option>
                                    <option value="Mauritania">Mauritania</option>
                                    <option value="Mauritius">Mauritius</option>
                                    <option value="Mayotte">Mayotte</option>
                                    <option value="Mexico">Mexico</option>
                                    <option value="Midway Islands">Midway Islands</option>
                                    <option value="Moldova">Moldova</option>
                                    <option value="Monaco">Monaco</option>
                                    <option value="Mongolia">Mongolia</option>
                                    <option value="Montserrat">Montserrat</option>
                                    <option value="Morocco">Morocco</option>
                                    <option value="Mozambique">Mozambique</option>
                                    <option value="Myanmar">Myanmar</option>
                                    <option value="Nambia">Nambia</option>
                                    <option value="Nauru">Nauru</option>
                                    <option value="Nepal">Nepal</option>
                                    <option value="Netherland Antilles">Netherland Antilles</option>
                                    <option value="Netherlands">Netherlands (Holland, Europe)</option>
                                    <option value="Nevis">Nevis</option>
                                    <option value="New Caledonia">New Caledonia</option>
                                    <option value="New Zealand">New Zealand</option>
                                    <option value="Nicaragua">Nicaragua</option>
                                    <option value="Niger">Niger</option>
                                    <option value="Nigeria">Nigeria</option>
                                    <option value="Niue">Niue</option>
                                    <option value="Norfolk Island">Norfolk Island</option>
                                    <option value="Norway">Norway</option>
                                    <option value="Oman">Oman</option>
                                    <option value="Pakistan">Pakistan</option>
                                    <option value="Palau Island">Palau Island</option>
                                    <option value="Palestine">Palestine</option>
                                    <option value="Panama">Panama</option>
                                    <option value="Papua New Guinea">Papua New Guinea</option>
                                    <option value="Paraguay">Paraguay</option>
                                    <option value="Peru">Peru</option>
                                    <option value="Phillipines">Philippines</option>
                                    <option value="Pitcairn Island">Pitcairn Island</option>
                                    <option value="Poland">Poland</option>
                                    <option value="Portugal">Portugal</option>
                                    <option value="Puerto Rico">Puerto Rico</option>
                                    <option value="Qatar">Qatar</option>
                                    <option value="Republic of Montenegro">Republic of Montenegro</option>
                                    <option value="Republic of Serbia">Republic of Serbia</option>
                                    <option value="Reunion">Reunion</option>
                                    <option value="Romania">Romania</option>
                                    <option value="Russia">Russia</option>
                                    <option value="Rwanda">Rwanda</option>
                                    <option value="St Barthelemy">St Barthelemy</option>
                                    <option value="St Eustatius">St Eustatius</option>
                                    <option value="St Helena">St Helena</option>
                                    <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                                    <option value="St Lucia">St Lucia</option>
                                    <option value="St Maarten">St Maarten</option>
                                    <option value="St Pierre & Miquelon">St Pierre & Miquelon</option>
                                    <option value="St Vincent & Grenadines">St Vincent & Grenadines</option>
                                    <option value="Saipan">Saipan</option>
                                    <option value="Samoa">Samoa</option>
                                    <option value="Samoa American">Samoa American</option>
                                    <option value="San Marino">San Marino</option>
                                    <option value="Sao Tome & Principe">Sao Tome & Principe</option>
                                    <option value="Saudi Arabia">Saudi Arabia</option>
                                    <option value="Senegal">Senegal</option>
                                    <option value="Seychelles">Seychelles</option>
                                    <option value="Sierra Leone">Sierra Leone</option>
                                    <option value="Singapore">Singapore</option>
                                    <option value="Slovakia">Slovakia</option>
                                    <option value="Slovenia">Slovenia</option>
                                    <option value="Solomon Islands">Solomon Islands</option>
                                    <option value="Somalia">Somalia</option>
                                    <option value="South Africa">South Africa</option>
                                    <option value="Spain">Spain</option>
                                    <option value="Sri Lanka">Sri Lanka</option>
                                    <option value="Sudan">Sudan</option>
                                    <option value="Suriname">Suriname</option>
                                    <option value="Swaziland">Swaziland</option>
                                    <option value="Sweden">Sweden</option>
                                    <option value="Switzerland">Switzerland</option>
                                    <option value="Syria">Syria</option>
                                    <option value="Tahiti">Tahiti</option>
                                    <option value="Taiwan">Taiwan</option>
                                    <option value="Tajikistan">Tajikistan</option>
                                    <option value="Tanzania">Tanzania</option>
                                    <option value="Thailand">Thailand</option>
                                    <option value="Togo">Togo</option>
                                    <option value="Tokelau">Tokelau</option>
                                    <option value="Tonga">Tonga</option>
                                    <option value="Trinidad & Tobago">Trinidad & Tobago</option>
                                    <option value="Tunisia">Tunisia</option>
                                    <option value="Turkey">Turkey</option>
                                    <option value="Turkmenistan">Turkmenistan</option>
                                    <option value="Turks & Caicos Is">Turks & Caicos Is</option>
                                    <option value="Tuvalu">Tuvalu</option>
                                    <option value="Uganda">Uganda</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="Ukraine">Ukraine</option>
                                    <option value="United Arab Erimates">United Arab Emirates</option>
                                    <option value="United States of America">United States of America</option>
                                    <option value="Uraguay">Uruguay</option>
                                    <option value="Uzbekistan">Uzbekistan</option>
                                    <option value="Vanuatu">Vanuatu</option>
                                    <option value="Vatican City State">Vatican City State</option>
                                    <option value="Venezuela">Venezuela</option>
                                    <option value="Vietnam">Vietnam</option>
                                    <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
                                    <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
                                    <option value="Wake Island">Wake Island</option>
                                    <option value="Wallis & Futana Is">Wallis & Futana Is</option>
                                    <option value="Yemen">Yemen</option>
                                    <option value="Zaire">Zaire</option>
                                    <option value="Zambia">Zambia</option>
                                    <option value="Zimbabwe">Zimbabwe</option>
                                </select>
                            </div>
                        </div>
                        {/* <!-- Mobile --> */}
                        <div className="row mt-2">
                            <div className="col-4"><label htmlFor="Mobile" className="form-label">Mobile:</label></div>
                            <div className="col-8">
                                <input type="text" name="Mobile" onChange={updateFormField} value={formState.Mobile} className="form-control form-control-sm" placeholder="mobile" />
                            </div>
                        </div>
                        {/* <!-- Office Phone --> */}
                        <div className="row mt-2">
                            <div className="col-4"><label htmlFor="Office_no" className="form-label">Office No:</label></div>
                            <div className="col-8">
                                <input type="text" name="Office_no" onChange={updateFormField} value={formState.Office_no} className="form-control form-control-sm" placeholder="office Number" />
                            </div>
                        </div>
                        {/* <!-- Attendee type --> */}
                        <div className="row mt-2">
                            <div className="col-4"><label htmlFor="Attendee_type" className="form-label">Attendee Type:</label></div>
                            <div className="col-8">
                                <select name="Attendee_type" value={formState.Attendee_type}
                                    onChange={updateFinalist}
                                    className="form-control form-control-sm">
                                    <option value="nil">-- Please select one --</option>
                                    <option value="Finalist">Finalist</option>
                                    <option value="Evaluator">Evaluator</option>
                                    <option value="Country Champion">Country Champion</option>
                                    <option value="Translator">Translator</option>
                                    <option value="Observer">Observer</option>
                                </select>
                            </div>
                        </div>

                        {/* <!-- Participation Country --> */}
                        <div className="row mt-2">
                            <div className="col-4"><label htmlFor="Participation_country" className="form-label">Participating in which country:</label></div>
                            <div className="col-8">
                                <input type="radio" name="Participation_country" onChange={updateFormField} value="Singapore" checked={formState.Participation_country === "Singapore"} /> Singapore <br />
                                <input type="radio" name="Participation_country" onChange={updateFormField} value="China" checked={formState.Participation_country === "China"} /> China <br />
                                <input type="radio" name="Participation_country" onChange={updateFormField} value="Virtual-Online" checked={formState.Participation_country === "Virtual-Online"} /> Virtual Online
                            </div>
                        </div>
                        {/* <!-- Segment --> */}
                        <div className="row mt-2">
                            <div className="col-4"><label htmlFor="Segment" className="form-label">Segment:</label></div>
                            <div className="col-8">
                                <select name="Segment" onChange={updateFormField} value={formState.Segment} className="form-control form-control-sm">
                                    <option value="nil">-- Please select one --</option>
                                    <option value="MW">MW</option>
                                    <option value="PM">PM</option>
                                    <option value="RC">RC</option>
                                    <option value="MGS">MGS</option>
                                    <option value="COR">COR</option>
                                    <option value="FD">FD</option>
                                    <option value="MS">MS</option>
                                </select>
                            </div>
                        </div>
                        {/* <!-- Function --> */}
                        <div className="row mt-2">
                            <div className="col-4"><label htmlFor="Function" className="form-label">Function:</label></div>
                            <div className="col-8">
                                <input type="text" name="Function" onChange={updateFormField} value={formState.Function} className="form-control form-control-sm" placeholder="function" />
                            </div>
                        </div>
                        {/* <!-- Project Name --> */}
                        <div className="row mt-2">
                            <div className="col-4"><label htmlFor="Project" className="form-label">Project Name:</label></div>
                            <div className="col-8">
                                <input type="text" name="Project" onChange={updateFormField} value={formState.Project} className="form-control form-control-sm" placeholder="project name" />
                            </div>
                        </div>

                        <hr />
                        <h5>Passport Details</h5>
                        {/* <!-- Name in passport --> */}
                        <div className="row mt-2">
                            <div className="col-4"><label htmlFor="Name_passport" className="form-label">Name in passport:</label></div>
                            <div className="col-8">
                                <input type="text" name="Name_passport" onChange={updateFormField} value={formState.Name_passport} className="form-control form-control-sm" placeholder="name in passport" />
                            </div>
                        </div>
                        {/* <!-- passport number--> */}
                        <div className="row mt-2">
                            <div className="col-4"><label htmlFor="Passport_no" className="form-label">Passport No:</label></div>
                            <div className="col-8">
                                <input type="text" name="Passport_no" onChange={updateFormField} value={formState.Passport_no} className="form-control form-control-sm" placeholder="passport number" />
                            </div>
                        </div>
                        {/* <!-- passport date of expiry--> */}
                        <div className="row mt-2">
                            <div className="col-4"><label htmlFor="Passport_expiry" className="form-label">Passport Expiry:</label></div>
                            <div className="col-8">
                                <input type="date" name="Passport_expiry" onChange={updateFormField} value={formState.Passport_expiry} />
                            </div>
                        </div>
                        {/* <!-- nationality --> */}
                        <div className="row mt-2">
                            <div className="col-4"><label htmlFor="Nationality" className="form-label">Nationality:</label></div>
                            <div className="col-8">
                                <input type="text" name="Nationality" onChange={updateFormField} value={formState.Nationality} className="form-control form-control-sm" placeholder="nationality" />
                            </div>
                        </div>
                        {/* <!-- Date of Birth--> */}
                        <div className="row mt-2">
                            <div className="col-4"><label htmlFor="Date_of_birth" className="form-label">Date of Birth:</label></div>
                            <div className="col-8">
                                <input type="date" name="Date_of_birth" onChange={updateFormField} value={formState.Date_of_birth} />
                            </div>
                        </div>
                        {/* <!-- Country of Birth--> */}
                        <div className="row mt-2">
                            <div className="col-4"><label htmlFor="Country_of_birth" className="form-label">Country of Birth:</label></div>
                            <div className="col-8">
                                <select name="Country_of_birth" className="form-control form-control-sm" onChange={updateFormField} value={formState.Country_of_birth}>
                                    <option value="Afganistan">Afghanistan</option>
                                    <option value="Albania">Albania</option>
                                    <option value="Algeria">Algeria</option>
                                    <option value="American Samoa">American Samoa</option>
                                    <option value="Andorra">Andorra</option>
                                    <option value="Angola">Angola</option>
                                    <option value="Anguilla">Anguilla</option>
                                    <option value="Antigua & Barbuda">Antigua & Barbuda</option>
                                    <option value="Argentina">Argentina</option>
                                    <option value="Armenia">Armenia</option>
                                    <option value="Aruba">Aruba</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Austria">Austria</option>
                                    <option value="Azerbaijan">Azerbaijan</option>
                                    <option value="Bahamas">Bahamas</option>
                                    <option value="Bahrain">Bahrain</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Barbados">Barbados</option>
                                    <option value="Belarus">Belarus</option>
                                    <option value="Belgium">Belgium</option>
                                    <option value="Belize">Belize</option>
                                    <option value="Benin">Benin</option>
                                    <option value="Bermuda">Bermuda</option>
                                    <option value="Bhutan">Bhutan</option>
                                    <option value="Bolivia">Bolivia</option>
                                    <option value="Bonaire">Bonaire</option>
                                    <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
                                    <option value="Botswana">Botswana</option>
                                    <option value="Brazil">Brazil</option>
                                    <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
                                    <option value="Brunei">Brunei</option>
                                    <option value="Bulgaria">Bulgaria</option>
                                    <option value="Burkina Faso">Burkina Faso</option>
                                    <option value="Burundi">Burundi</option>
                                    <option value="Cambodia">Cambodia</option>
                                    <option value="Cameroon">Cameroon</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Canary Islands">Canary Islands</option>
                                    <option value="Cape Verde">Cape Verde</option>
                                    <option value="Cayman Islands">Cayman Islands</option>
                                    <option value="Central African Republic">Central African Republic</option>
                                    <option value="Chad">Chad</option>
                                    <option value="Channel Islands">Channel Islands</option>
                                    <option value="Chile">Chile</option>
                                    <option value="China">China</option>
                                    <option value="Christmas Island">Christmas Island</option>
                                    <option value="Cocos Island">Cocos Island</option>
                                    <option value="Colombia">Colombia</option>
                                    <option value="Comoros">Comoros</option>
                                    <option value="Congo">Congo</option>
                                    <option value="Cook Islands">Cook Islands</option>
                                    <option value="Costa Rica">Costa Rica</option>
                                    <option value="Cote DIvoire">Cote DIvoire</option>
                                    <option value="Croatia">Croatia</option>
                                    <option value="Cuba">Cuba</option>
                                    <option value="Curaco">Curacao</option>
                                    <option value="Cyprus">Cyprus</option>
                                    <option value="Czech Republic">Czech Republic</option>
                                    <option value="Denmark">Denmark</option>
                                    <option value="Djibouti">Djibouti</option>
                                    <option value="Dominica">Dominica</option>
                                    <option value="Dominican Republic">Dominican Republic</option>
                                    <option value="East Timor">East Timor</option>
                                    <option value="Ecuador">Ecuador</option>
                                    <option value="Egypt">Egypt</option>
                                    <option value="El Salvador">El Salvador</option>
                                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                                    <option value="Eritrea">Eritrea</option>
                                    <option value="Estonia">Estonia</option>
                                    <option value="Ethiopia">Ethiopia</option>
                                    <option value="Falkland Islands">Falkland Islands</option>
                                    <option value="Faroe Islands">Faroe Islands</option>
                                    <option value="Fiji">Fiji</option>
                                    <option value="Finland">Finland</option>
                                    <option value="France">France</option>
                                    <option value="French Guiana">French Guiana</option>
                                    <option value="French Polynesia">French Polynesia</option>
                                    <option value="French Southern Ter">French Southern Ter</option>
                                    <option value="Gabon">Gabon</option>
                                    <option value="Gambia">Gambia</option>
                                    <option value="Georgia">Georgia</option>
                                    <option value="Germany">Germany</option>
                                    <option value="Ghana">Ghana</option>
                                    <option value="Gibraltar">Gibraltar</option>
                                    <option value="Great Britain">Great Britain</option>
                                    <option value="Greece">Greece</option>
                                    <option value="Greenland">Greenland</option>
                                    <option value="Grenada">Grenada</option>
                                    <option value="Guadeloupe">Guadeloupe</option>
                                    <option value="Guam">Guam</option>
                                    <option value="Guatemala">Guatemala</option>
                                    <option value="Guinea">Guinea</option>
                                    <option value="Guyana">Guyana</option>
                                    <option value="Haiti">Haiti</option>
                                    <option value="Hawaii">Hawaii</option>
                                    <option value="Honduras">Honduras</option>
                                    <option value="Hong Kong">Hong Kong</option>
                                    <option value="Hungary">Hungary</option>
                                    <option value="Iceland">Iceland</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="India">India</option>
                                    <option value="Iran">Iran</option>
                                    <option value="Iraq">Iraq</option>
                                    <option value="Ireland">Ireland</option>
                                    <option value="Isle of Man">Isle of Man</option>
                                    <option value="Israel">Israel</option>
                                    <option value="Italy">Italy</option>
                                    <option value="Jamaica">Jamaica</option>
                                    <option value="Japan">Japan</option>
                                    <option value="Jordan">Jordan</option>
                                    <option value="Kazakhstan">Kazakhstan</option>
                                    <option value="Kenya">Kenya</option>
                                    <option value="Kiribati">Kiribati</option>
                                    <option value="Korea North">Korea North</option>
                                    <option value="Korea Sout">Korea South</option>
                                    <option value="Kuwait">Kuwait</option>
                                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                                    <option value="Laos">Laos</option>
                                    <option value="Latvia">Latvia</option>
                                    <option value="Lebanon">Lebanon</option>
                                    <option value="Lesotho">Lesotho</option>
                                    <option value="Liberia">Liberia</option>
                                    <option value="Libya">Libya</option>
                                    <option value="Liechtenstein">Liechtenstein</option>
                                    <option value="Lithuania">Lithuania</option>
                                    <option value="Luxembourg">Luxembourg</option>
                                    <option value="Macau">Macau</option>
                                    <option value="Macedonia">Macedonia</option>
                                    <option value="Madagascar">Madagascar</option>
                                    <option value="Malaysia">Malaysia</option>
                                    <option value="Malawi">Malawi</option>
                                    <option value="Maldives">Maldives</option>
                                    <option value="Mali">Mali</option>
                                    <option value="Malta">Malta</option>
                                    <option value="Marshall Islands">Marshall Islands</option>
                                    <option value="Martinique">Martinique</option>
                                    <option value="Mauritania">Mauritania</option>
                                    <option value="Mauritius">Mauritius</option>
                                    <option value="Mayotte">Mayotte</option>
                                    <option value="Mexico">Mexico</option>
                                    <option value="Midway Islands">Midway Islands</option>
                                    <option value="Moldova">Moldova</option>
                                    <option value="Monaco">Monaco</option>
                                    <option value="Mongolia">Mongolia</option>
                                    <option value="Montserrat">Montserrat</option>
                                    <option value="Morocco">Morocco</option>
                                    <option value="Mozambique">Mozambique</option>
                                    <option value="Myanmar">Myanmar</option>
                                    <option value="Nambia">Nambia</option>
                                    <option value="Nauru">Nauru</option>
                                    <option value="Nepal">Nepal</option>
                                    <option value="Netherland Antilles">Netherland Antilles</option>
                                    <option value="Netherlands">Netherlands (Holland, Europe)</option>
                                    <option value="Nevis">Nevis</option>
                                    <option value="New Caledonia">New Caledonia</option>
                                    <option value="New Zealand">New Zealand</option>
                                    <option value="Nicaragua">Nicaragua</option>
                                    <option value="Niger">Niger</option>
                                    <option value="Nigeria">Nigeria</option>
                                    <option value="Niue">Niue</option>
                                    <option value="Norfolk Island">Norfolk Island</option>
                                    <option value="Norway">Norway</option>
                                    <option value="Oman">Oman</option>
                                    <option value="Pakistan">Pakistan</option>
                                    <option value="Palau Island">Palau Island</option>
                                    <option value="Palestine">Palestine</option>
                                    <option value="Panama">Panama</option>
                                    <option value="Papua New Guinea">Papua New Guinea</option>
                                    <option value="Paraguay">Paraguay</option>
                                    <option value="Peru">Peru</option>
                                    <option value="Phillipines">Philippines</option>
                                    <option value="Pitcairn Island">Pitcairn Island</option>
                                    <option value="Poland">Poland</option>
                                    <option value="Portugal">Portugal</option>
                                    <option value="Puerto Rico">Puerto Rico</option>
                                    <option value="Qatar">Qatar</option>
                                    <option value="Republic of Montenegro">Republic of Montenegro</option>
                                    <option value="Republic of Serbia">Republic of Serbia</option>
                                    <option value="Reunion">Reunion</option>
                                    <option value="Romania">Romania</option>
                                    <option value="Russia">Russia</option>
                                    <option value="Rwanda">Rwanda</option>
                                    <option value="St Barthelemy">St Barthelemy</option>
                                    <option value="St Eustatius">St Eustatius</option>
                                    <option value="St Helena">St Helena</option>
                                    <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                                    <option value="St Lucia">St Lucia</option>
                                    <option value="St Maarten">St Maarten</option>
                                    <option value="St Pierre & Miquelon">St Pierre & Miquelon</option>
                                    <option value="St Vincent & Grenadines">St Vincent & Grenadines</option>
                                    <option value="Saipan">Saipan</option>
                                    <option value="Samoa">Samoa</option>
                                    <option value="Samoa American">Samoa American</option>
                                    <option value="San Marino">San Marino</option>
                                    <option value="Sao Tome & Principe">Sao Tome & Principe</option>
                                    <option value="Saudi Arabia">Saudi Arabia</option>
                                    <option value="Senegal">Senegal</option>
                                    <option value="Seychelles">Seychelles</option>
                                    <option value="Sierra Leone">Sierra Leone</option>
                                    <option value="Singapore">Singapore</option>
                                    <option value="Slovakia">Slovakia</option>
                                    <option value="Slovenia">Slovenia</option>
                                    <option value="Solomon Islands">Solomon Islands</option>
                                    <option value="Somalia">Somalia</option>
                                    <option value="South Africa">South Africa</option>
                                    <option value="Spain">Spain</option>
                                    <option value="Sri Lanka">Sri Lanka</option>
                                    <option value="Sudan">Sudan</option>
                                    <option value="Suriname">Suriname</option>
                                    <option value="Swaziland">Swaziland</option>
                                    <option value="Sweden">Sweden</option>
                                    <option value="Switzerland">Switzerland</option>
                                    <option value="Syria">Syria</option>
                                    <option value="Tahiti">Tahiti</option>
                                    <option value="Taiwan">Taiwan</option>
                                    <option value="Tajikistan">Tajikistan</option>
                                    <option value="Tanzania">Tanzania</option>
                                    <option value="Thailand">Thailand</option>
                                    <option value="Togo">Togo</option>
                                    <option value="Tokelau">Tokelau</option>
                                    <option value="Tonga">Tonga</option>
                                    <option value="Trinidad & Tobago">Trinidad & Tobago</option>
                                    <option value="Tunisia">Tunisia</option>
                                    <option value="Turkey">Turkey</option>
                                    <option value="Turkmenistan">Turkmenistan</option>
                                    <option value="Turks & Caicos Is">Turks & Caicos Is</option>
                                    <option value="Tuvalu">Tuvalu</option>
                                    <option value="Uganda">Uganda</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="Ukraine">Ukraine</option>
                                    <option value="United Arab Erimates">United Arab Emirates</option>
                                    <option value="United States of America">United States of America</option>
                                    <option value="Uraguay">Uruguay</option>
                                    <option value="Uzbekistan">Uzbekistan</option>
                                    <option value="Vanuatu">Vanuatu</option>
                                    <option value="Vatican City State">Vatican City State</option>
                                    <option value="Venezuela">Venezuela</option>
                                    <option value="Vietnam">Vietnam</option>
                                    <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
                                    <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
                                    <option value="Wake Island">Wake Island</option>
                                    <option value="Wallis & Futana Is">Wallis & Futana Is</option>
                                    <option value="Yemen">Yemen</option>
                                    <option value="Zaire">Zaire</option>
                                    <option value="Zambia">Zambia</option>
                                    <option value="Zimbabwe">Zimbabwe</option>
                                </select>
                            </div>
                        </div>

                        <hr />
                        <h5>Diet & Medical</h5>
                        {/* <!-- Diet --> */}
                        <div className="row mt-2">
                            <div className="col-12 col-md-4"><label htmlFor="Diet" className="form-label">
                                Please give details of special dietary requirements (eg. Vegetarian, Food Allergies, etc):
                            </label></div>
                            <div className="col-12 col-md-8">
                                <div>
                                    <textarea className="form-control" name="Diet" value={formState.Diet} onChange={updateFormField} placeholder="eg. Vegetarian, Food Allergies, etc"></textarea>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Medical --> */}
                        <div className="row mt-2">
                            <div className="col-12 col-md-4"><label htmlFor="Medical" className="form-label">
                                Please enter any other special requirements e.g. medical conditions, mobility:
                            </label></div>
                            <div className="col-12 col-md-8">
                                <div>
                                    <textarea className="form-control" name="Medical" onChange={updateFormField} placeholder=" e.g. medical conditions, mobility, etc"></textarea>
                                </div>
                            </div>
                        </div>
                        <hr />
                        {/* Add Partners ? */}
                        {finalist && formState.Participation_country !== "Virtual-Online"?

                            <div className="row mt-2">

                                <div className="col-6"><label htmlFor="partner" className="form-label fw-bold"><span className='text-danger'>*</span> Add Partner:</label></div>
                                <div className="col-6">
                                    <input type="radio" name="partner" onChange={updatePartner} checked={formState.partner === "Yes"} value="Yes" /> Yes
                                    <input type="radio" name="partner" onChange={updatePartner} checked={formState.partner === "No"} className="ms-2" value="No" /> No
                                </div>
                            </div> : null}

                        {/* Submit button */}
                        <div className='mt-5 d-flex justify-content-end'>
                            {
                                finalist && formState.partner==="Yes" && formState.Participation_country !== "Virtual-Online" ?
                                    <div className='btn btn-sm bg-green fw-bolder' onClick={() => {
                                        setPage("partner");
                                        window.scrollTo(0, 0);
                                    }} >Partner details &gt;&gt;</div> :
                                    formState.Participation_country === "Virtual-Online" ?
                                        <input type="submit" className='btn btn-sm bg-green' value="Submit" /> :
                                        <div className='btn btn-sm bg-green fw-bolder' onClick={() => {
                                            setPage("flight");
                                            window.scrollTo(0, 0);
                                        }}>Flight details &gt;&gt;</div>
                            }

                        </div>
                    </div> : null
                }
                {page === "partner" ?
                    <div className="container py-5">
                        <h2>PARTNER INFORMATION</h2>
                        {/* <!-- title --> */}
                        <div className="row">
                            <div className="col-4"><label htmlFor="Partner_title" className="form-label">Title:</label></div>
                            <div className="col-8">
                                <input type="radio" name="Partner_title" onChange={updateFormField} checked={formState.Partner_title === "Mr"} value="Mr" /> Mr
                                <input type="radio" name="Partner_title" onChange={updateFormField} checked={formState.Partner_title === "Ms"} className="ms-2" value="Ms" /> Ms
                                <input type="radio" name="Partner_title" onChange={updateFormField} checked={formState.Partner_title === "Mdm"} className="ms-2" value="Mdm" /> Mdm
                                <input type="radio" name="Partner_title" onChange={updateFormField} checked={formState.Partner_title === "Dr"} className="ms-2" value="Dr" /> Dr
                            </div>
                        </div>
                        {/* <!-- first name --> */}
                        <div className="row mt-2">
                            <div className="col-4"><label htmlFor="Partner_first_name" className="form-label">First Name:</label></div>
                            <div className="col-8">
                                <input type="text" name="Partner_first_name" onChange={updateFormField} value={formState.Partner_first_name} className="form-control form-control-sm" placeholder="first name" />
                            </div>
                        </div>
                        {/* <!-- last name --> */}
                        <div className="row mt-2">
                            <div className="col-4"><label htmlFor="Partner_last_name" className="form-label">Last Name:</label></div>
                            <div className="col-8">
                                <input type="text" name="Partner_last_name" onChange={updateFormField} value={formState.Partner_last_name} className="form-control form-control-sm" placeholder="last name (surname)" />
                            </div>
                        </div>
                        {/* <!-- Relationship --> */}
                        <div className="row mt-2">
                            <div className="col-4"><label htmlFor="Relationship" className="form-label">Relationship with Associate:</label></div>
                            <div className="col-8">
                                <input type="text" name="Relationship" onChange={updateFormField} value={formState.Relationship} className="form-control form-control-sm" placeholder="relationship (e.g spouse etc)" />
                            </div>
                        </div>

                        {/* <!-- Language --> */}
                        <div className="row mt-2">
                            <div className="col-4"><label htmlFor="Language" className="form-label">Language spoken (please list):</label></div>
                            <div className="col-8">
                                <input type="text" name="Language" onChange={updateFormField} value={formState.Language} className="form-control form-control-sm" placeholder="e.g English, Mandarin" />
                            </div>
                        </div>
                        <h5>Partner Passport Details</h5>
                        {/* <!-- Name in passport --> */}
                        <div className="row mt-2">
                            <div className="col-4"><label htmlFor="Partner_Name_passport" className="form-label">Name in passport:</label></div>
                            <div className="col-8">
                                <input type="text" name="Partner_Name_passport" onChange={updateFormField} value={formState.Partner_Name_passport} className="form-control form-control-sm" placeholder="name in passport" />
                            </div>
                        </div>
                        {/* <!-- passport number--> */}
                        <div className="row mt-2">
                            <div className="col-4"><label htmlFor="Partner_Passport_no" className="form-label">Passport No:</label></div>
                            <div className="col-8">
                                <input type="text" name="Partner_Passport_no" onChange={updateFormField} value={formState.Partner_Passport_no} className="form-control form-control-sm" placeholder="passport number" />
                            </div>
                        </div>
                        {/* <!-- passport date of expiry--> */}
                        <div className="row mt-2">
                            <div className="col-4"><label htmlFor="Partner_Passport_expiry" className="form-label">Passport Expiry:</label></div>
                            <div className="col-8">
                                <input type="date" name="Partner_Passport_expiry" onChange={updateFormField} value={formState.Partner_Passport_expiry} />
                            </div>
                        </div>
                        {/* <!-- nationality --> */}
                        <div className="row mt-2">
                            <div className="col-4"><label htmlFor="Partner_Nationality" className="form-label">Nationality:</label></div>
                            <div className="col-8">
                                <input type="text" name="Partner_Nationality" onChange={updateFormField} value={formState.Partner_Nationality} className="form-control form-control-sm" placeholder="nationality" />
                            </div>
                        </div>
                        {/* <!-- Date of Birth--> */}
                        <div className="row mt-2">
                            <div className="col-4"><label htmlFor="Partner_Date_of_birth" className="form-label">Date of Birth:</label></div>
                            <div className="col-8">
                                <input type="date" name="Partner_Date_of_birth" onChange={updateFormField} value={formState.Partner_Date_of_birth} />
                            </div>
                        </div>
                        {/* <!-- Country of Birth--> */}
                        <div className="row mt-2">
                            <div className="col-4"><label htmlFor="Partner_Country_of_birth" className="form-label">Country of Birth:</label></div>
                            <div className="col-8">
                                <select name="Partner_Country_of_birth" onChange={updateFormField} value={formState.Partner_Country_of_birth} className="form-control form-control-sm">
                                    <option value="Afganistan">Afghanistan</option>
                                    <option value="Albania">Albania</option>
                                    <option value="Algeria">Algeria</option>
                                    <option value="American Samoa">American Samoa</option>
                                    <option value="Andorra">Andorra</option>
                                    <option value="Angola">Angola</option>
                                    <option value="Anguilla">Anguilla</option>
                                    <option value="Antigua & Barbuda">Antigua & Barbuda</option>
                                    <option value="Argentina">Argentina</option>
                                    <option value="Armenia">Armenia</option>
                                    <option value="Aruba">Aruba</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Austria">Austria</option>
                                    <option value="Azerbaijan">Azerbaijan</option>
                                    <option value="Bahamas">Bahamas</option>
                                    <option value="Bahrain">Bahrain</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Barbados">Barbados</option>
                                    <option value="Belarus">Belarus</option>
                                    <option value="Belgium">Belgium</option>
                                    <option value="Belize">Belize</option>
                                    <option value="Benin">Benin</option>
                                    <option value="Bermuda">Bermuda</option>
                                    <option value="Bhutan">Bhutan</option>
                                    <option value="Bolivia">Bolivia</option>
                                    <option value="Bonaire">Bonaire</option>
                                    <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
                                    <option value="Botswana">Botswana</option>
                                    <option value="Brazil">Brazil</option>
                                    <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
                                    <option value="Brunei">Brunei</option>
                                    <option value="Bulgaria">Bulgaria</option>
                                    <option value="Burkina Faso">Burkina Faso</option>
                                    <option value="Burundi">Burundi</option>
                                    <option value="Cambodia">Cambodia</option>
                                    <option value="Cameroon">Cameroon</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Canary Islands">Canary Islands</option>
                                    <option value="Cape Verde">Cape Verde</option>
                                    <option value="Cayman Islands">Cayman Islands</option>
                                    <option value="Central African Republic">Central African Republic</option>
                                    <option value="Chad">Chad</option>
                                    <option value="Channel Islands">Channel Islands</option>
                                    <option value="Chile">Chile</option>
                                    <option value="China">China</option>
                                    <option value="Christmas Island">Christmas Island</option>
                                    <option value="Cocos Island">Cocos Island</option>
                                    <option value="Colombia">Colombia</option>
                                    <option value="Comoros">Comoros</option>
                                    <option value="Congo">Congo</option>
                                    <option value="Cook Islands">Cook Islands</option>
                                    <option value="Costa Rica">Costa Rica</option>
                                    <option value="Cote DIvoire">Cote DIvoire</option>
                                    <option value="Croatia">Croatia</option>
                                    <option value="Cuba">Cuba</option>
                                    <option value="Curaco">Curacao</option>
                                    <option value="Cyprus">Cyprus</option>
                                    <option value="Czech Republic">Czech Republic</option>
                                    <option value="Denmark">Denmark</option>
                                    <option value="Djibouti">Djibouti</option>
                                    <option value="Dominica">Dominica</option>
                                    <option value="Dominican Republic">Dominican Republic</option>
                                    <option value="East Timor">East Timor</option>
                                    <option value="Ecuador">Ecuador</option>
                                    <option value="Egypt">Egypt</option>
                                    <option value="El Salvador">El Salvador</option>
                                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                                    <option value="Eritrea">Eritrea</option>
                                    <option value="Estonia">Estonia</option>
                                    <option value="Ethiopia">Ethiopia</option>
                                    <option value="Falkland Islands">Falkland Islands</option>
                                    <option value="Faroe Islands">Faroe Islands</option>
                                    <option value="Fiji">Fiji</option>
                                    <option value="Finland">Finland</option>
                                    <option value="France">France</option>
                                    <option value="French Guiana">French Guiana</option>
                                    <option value="French Polynesia">French Polynesia</option>
                                    <option value="French Southern Ter">French Southern Ter</option>
                                    <option value="Gabon">Gabon</option>
                                    <option value="Gambia">Gambia</option>
                                    <option value="Georgia">Georgia</option>
                                    <option value="Germany">Germany</option>
                                    <option value="Ghana">Ghana</option>
                                    <option value="Gibraltar">Gibraltar</option>
                                    <option value="Great Britain">Great Britain</option>
                                    <option value="Greece">Greece</option>
                                    <option value="Greenland">Greenland</option>
                                    <option value="Grenada">Grenada</option>
                                    <option value="Guadeloupe">Guadeloupe</option>
                                    <option value="Guam">Guam</option>
                                    <option value="Guatemala">Guatemala</option>
                                    <option value="Guinea">Guinea</option>
                                    <option value="Guyana">Guyana</option>
                                    <option value="Haiti">Haiti</option>
                                    <option value="Hawaii">Hawaii</option>
                                    <option value="Honduras">Honduras</option>
                                    <option value="Hong Kong">Hong Kong</option>
                                    <option value="Hungary">Hungary</option>
                                    <option value="Iceland">Iceland</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="India">India</option>
                                    <option value="Iran">Iran</option>
                                    <option value="Iraq">Iraq</option>
                                    <option value="Ireland">Ireland</option>
                                    <option value="Isle of Man">Isle of Man</option>
                                    <option value="Israel">Israel</option>
                                    <option value="Italy">Italy</option>
                                    <option value="Jamaica">Jamaica</option>
                                    <option value="Japan">Japan</option>
                                    <option value="Jordan">Jordan</option>
                                    <option value="Kazakhstan">Kazakhstan</option>
                                    <option value="Kenya">Kenya</option>
                                    <option value="Kiribati">Kiribati</option>
                                    <option value="Korea North">Korea North</option>
                                    <option value="Korea Sout">Korea South</option>
                                    <option value="Kuwait">Kuwait</option>
                                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                                    <option value="Laos">Laos</option>
                                    <option value="Latvia">Latvia</option>
                                    <option value="Lebanon">Lebanon</option>
                                    <option value="Lesotho">Lesotho</option>
                                    <option value="Liberia">Liberia</option>
                                    <option value="Libya">Libya</option>
                                    <option value="Liechtenstein">Liechtenstein</option>
                                    <option value="Lithuania">Lithuania</option>
                                    <option value="Luxembourg">Luxembourg</option>
                                    <option value="Macau">Macau</option>
                                    <option value="Macedonia">Macedonia</option>
                                    <option value="Madagascar">Madagascar</option>
                                    <option value="Malaysia">Malaysia</option>
                                    <option value="Malawi">Malawi</option>
                                    <option value="Maldives">Maldives</option>
                                    <option value="Mali">Mali</option>
                                    <option value="Malta">Malta</option>
                                    <option value="Marshall Islands">Marshall Islands</option>
                                    <option value="Martinique">Martinique</option>
                                    <option value="Mauritania">Mauritania</option>
                                    <option value="Mauritius">Mauritius</option>
                                    <option value="Mayotte">Mayotte</option>
                                    <option value="Mexico">Mexico</option>
                                    <option value="Midway Islands">Midway Islands</option>
                                    <option value="Moldova">Moldova</option>
                                    <option value="Monaco">Monaco</option>
                                    <option value="Mongolia">Mongolia</option>
                                    <option value="Montserrat">Montserrat</option>
                                    <option value="Morocco">Morocco</option>
                                    <option value="Mozambique">Mozambique</option>
                                    <option value="Myanmar">Myanmar</option>
                                    <option value="Nambia">Nambia</option>
                                    <option value="Nauru">Nauru</option>
                                    <option value="Nepal">Nepal</option>
                                    <option value="Netherland Antilles">Netherland Antilles</option>
                                    <option value="Netherlands">Netherlands (Holland, Europe)</option>
                                    <option value="Nevis">Nevis</option>
                                    <option value="New Caledonia">New Caledonia</option>
                                    <option value="New Zealand">New Zealand</option>
                                    <option value="Nicaragua">Nicaragua</option>
                                    <option value="Niger">Niger</option>
                                    <option value="Nigeria">Nigeria</option>
                                    <option value="Niue">Niue</option>
                                    <option value="Norfolk Island">Norfolk Island</option>
                                    <option value="Norway">Norway</option>
                                    <option value="Oman">Oman</option>
                                    <option value="Pakistan">Pakistan</option>
                                    <option value="Palau Island">Palau Island</option>
                                    <option value="Palestine">Palestine</option>
                                    <option value="Panama">Panama</option>
                                    <option value="Papua New Guinea">Papua New Guinea</option>
                                    <option value="Paraguay">Paraguay</option>
                                    <option value="Peru">Peru</option>
                                    <option value="Phillipines">Philippines</option>
                                    <option value="Pitcairn Island">Pitcairn Island</option>
                                    <option value="Poland">Poland</option>
                                    <option value="Portugal">Portugal</option>
                                    <option value="Puerto Rico">Puerto Rico</option>
                                    <option value="Qatar">Qatar</option>
                                    <option value="Republic of Montenegro">Republic of Montenegro</option>
                                    <option value="Republic of Serbia">Republic of Serbia</option>
                                    <option value="Reunion">Reunion</option>
                                    <option value="Romania">Romania</option>
                                    <option value="Russia">Russia</option>
                                    <option value="Rwanda">Rwanda</option>
                                    <option value="St Barthelemy">St Barthelemy</option>
                                    <option value="St Eustatius">St Eustatius</option>
                                    <option value="St Helena">St Helena</option>
                                    <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                                    <option value="St Lucia">St Lucia</option>
                                    <option value="St Maarten">St Maarten</option>
                                    <option value="St Pierre & Miquelon">St Pierre & Miquelon</option>
                                    <option value="St Vincent & Grenadines">St Vincent & Grenadines</option>
                                    <option value="Saipan">Saipan</option>
                                    <option value="Samoa">Samoa</option>
                                    <option value="Samoa American">Samoa American</option>
                                    <option value="San Marino">San Marino</option>
                                    <option value="Sao Tome & Principe">Sao Tome & Principe</option>
                                    <option value="Saudi Arabia">Saudi Arabia</option>
                                    <option value="Senegal">Senegal</option>
                                    <option value="Seychelles">Seychelles</option>
                                    <option value="Sierra Leone">Sierra Leone</option>
                                    <option value="Singapore">Singapore</option>
                                    <option value="Slovakia">Slovakia</option>
                                    <option value="Slovenia">Slovenia</option>
                                    <option value="Solomon Islands">Solomon Islands</option>
                                    <option value="Somalia">Somalia</option>
                                    <option value="South Africa">South Africa</option>
                                    <option value="Spain">Spain</option>
                                    <option value="Sri Lanka">Sri Lanka</option>
                                    <option value="Sudan">Sudan</option>
                                    <option value="Suriname">Suriname</option>
                                    <option value="Swaziland">Swaziland</option>
                                    <option value="Sweden">Sweden</option>
                                    <option value="Switzerland">Switzerland</option>
                                    <option value="Syria">Syria</option>
                                    <option value="Tahiti">Tahiti</option>
                                    <option value="Taiwan">Taiwan</option>
                                    <option value="Tajikistan">Tajikistan</option>
                                    <option value="Tanzania">Tanzania</option>
                                    <option value="Thailand">Thailand</option>
                                    <option value="Togo">Togo</option>
                                    <option value="Tokelau">Tokelau</option>
                                    <option value="Tonga">Tonga</option>
                                    <option value="Trinidad & Tobago">Trinidad & Tobago</option>
                                    <option value="Tunisia">Tunisia</option>
                                    <option value="Turkey">Turkey</option>
                                    <option value="Turkmenistan">Turkmenistan</option>
                                    <option value="Turks & Caicos Is">Turks & Caicos Is</option>
                                    <option value="Tuvalu">Tuvalu</option>
                                    <option value="Uganda">Uganda</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="Ukraine">Ukraine</option>
                                    <option value="United Arab Erimates">United Arab Emirates</option>
                                    <option value="United States of America">United States of America</option>
                                    <option value="Uraguay">Uruguay</option>
                                    <option value="Uzbekistan">Uzbekistan</option>
                                    <option value="Vanuatu">Vanuatu</option>
                                    <option value="Vatican City State">Vatican City State</option>
                                    <option value="Venezuela">Venezuela</option>
                                    <option value="Vietnam">Vietnam</option>
                                    <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
                                    <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
                                    <option value="Wake Island">Wake Island</option>
                                    <option value="Wallis & Futana Is">Wallis & Futana Is</option>
                                    <option value="Yemen">Yemen</option>
                                    <option value="Zaire">Zaire</option>
                                    <option value="Zambia">Zambia</option>
                                    <option value="Zimbabwe">Zimbabwe</option>
                                </select>
                            </div>
                        </div>

                        {/* Gala Dinner ? */}
                        <div className="row">
                            <div className="col-4"><label htmlFor="Gala_dinner" className="form-label">Partner to join Gala Dinner:</label></div>
                            <div className="col-8">
                                <input type="radio" name="Gala_dinner" onChange={updateFormField} checked={formState.Gala_dinner === "Yes"} value="Yes" /> Yes
                                <input type="radio" name="Gala_dinner" onChange={updateFormField} checked={formState.Gala_dinner === "No"} className="ms-2" value="No" /> No
                            </div>
                        </div>


                        <hr />
                        <h5>Diet & Medical</h5>
                        {/* <!-- Diet --> */}
                        <div className="row mt-2">
                            <div className="col-12 col-md-4"><label htmlFor="Partner_Diet" className="form-label">
                                Please give details of special dietary requirements (eg. Vegetarian, Food Allergies, etc):
                            </label></div>
                            <div className="col-12 col-md-8">
                                <div>
                                    <textarea className="form-control" name="Partner_Diet" value={formState.Partner_Diet} onChange={updateFormField} placeholder="eg. Vegetarian, Food Allergies, etc"></textarea>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Medical --> */}
                        <div className="row mt-3">
                            <div className="col-12 col-md-4"><label htmlFor="Partner_Medical" className="form-label">
                                Please enter any other special requirements e.g. medical conditions, mobility:
                            </label></div>
                            <div className="col-12 col-md-8">
                                <div>
                                    <textarea className="form-control" name="Partner_Medical" value={formState.Partner_Medical} onChange={updateFormField} placeholder=" e.g. medical conditions, mobility, etc"></textarea>
                                </div>
                            </div>
                        </div>

                        <div className='mt-5 d-flex justify-content-between'>
                            <div className='btn btn-sm bg-yellow fw-bolder' onClick={() => {
                                setPage("associate");
                                window.scrollTo(0, 0);
                            }} >&lt;&lt; Associate details</div>
                            <div className='btn btn-sm bg-green fw-bolder' onClick={() => {
                                setPage("flight");
                                window.scrollTo(0, 0);
                            }}>Flight details &gt;&gt;</div>
                        </div>

                    </div> : null
                }
                {page === "flight" ?

                    <div className="container py-5">
                        <input type='hidden' name='Title' value={formState.Title} />
                        <input type='hidden' name='First_name' value={formState.First_name} />
                        <input type='hidden' name='Last_name' value={formState.Last_name} />
                        <input type='hidden' name='Email' value={formState.Email} />
                        <input type='hidden' name='Country' value={formState.Country} />

                        <input type='hidden' name='Mobile' value={formState.Mobile} />
                        <input type='hidden' name='Office_no' value={formState.Office_no} />
                        <input type='hidden' name='Attendee_type' value={formState.Attendee_type} />
                        <input type='hidden' name='Participation_country' value={formState.Participation_country} />
                        <input type='hidden' name='Segment' value={formState.Segment} />

                        <input type='hidden' name='Function' value={formState.Function} />
                        <input type='hidden' name='Project' value={formState.Project} />
                        <input type='hidden' name='Name_passport' value={formState.Name_passport} />
                        <input type='hidden' name='Passport_no' value={formState.Passport_no} />
                        <input type='hidden' name='Passport_expiry' value={formState.Passport_expiry} />

                        <input type='hidden' name='Nationality' value={formState.Nationality} />
                        <input type='hidden' name='Date_of_birth' value={formState.Date_of_birth} />
                        <input type='hidden' name='Country_of_birth' value={formState.Country_of_birth} />
                        <input type='hidden' name='Diet' value={formState.Diet} />
                        <input type='hidden' name='Medical' value={formState.Medical} />


                        <input type='hidden' name='partner' value={formState.partner} />
                        <input type='hidden' name='Partner_title' value={formState.Partner_title} />
                        <input type='hidden' name='Partner_first_name' value={formState.Partner_first_name} />
                        <input type='hidden' name='Partner_last_name' value={formState.Partner_last_name} />
                        <input type='hidden' name='Relationship' value={formState.Relationship} />
                        <input type='hidden' name='Language' value={formState.Language} />
                        <input type='hidden' name='Partner_Name_passport' value={formState.Partner_Name_passport} />
                        <input type='hidden' name='Partner_Passport_no' value={formState.Partner_Passport_no} />
                        <input type='hidden' name='Partner_Passport_expiry' value={formState.Partner_Passport_expiry} />
                        <input type='hidden' name='Partner_Nationality' value={formState.Partner_Nationality} />
                        <input type='hidden' name='Partner_Date_of_birth' value={formState.Partner_Date_of_birth} />
                        <input type='hidden' name='Partner_Country_of_birth' value={formState.Partner_Country_of_birth} />
                        <input type='hidden' name='Gala_dinner' value={formState.Gala_dinner} />
                        <input type='hidden' name='Partner_Diet' value={formState.Partner_Diet} />
                        <input type='hidden' name='Partner_Medical' value={formState.Partner_Medical} />

                        <h2>TRAVEL INFORMATION</h2>
                        <small>(Note: Each individual is responsible for his/her own airline bookings and Visa applications)</small>

                        {/* invite letter for VISA */}
                        <div className="row mt-4">
                            <div className="col-12 col-md-4"><label htmlFor="Visa_letter" className="form-label">Do you require Invitation Letter for VISA application?</label></div>
                            <div className="col-8">
                                <input type="radio" name="Visa_letter" onChange={updateFormField} checked={formState.Visa_letter === "Yes"} value="Yes" /> Yes
                                <input type="radio" name="Visa_letter" onChange={updateFormField} checked={formState.Visa_letter === "No"} className="ms-2" value="No" /> No
                            </div>
                        </div>
                        <hr />
                        <h5>ARRIVAL FLIGHT DETAILS</h5>
                        {/* <!-- passport date of expiry--> */}
                        <div className="row mt-2">
                            <div className="col-4"><label htmlFor="Arrival_date" className="form-label">Arrival Date:</label></div>
                            <div className="col-8">
                                <input type="date" name="Arrival_date" onChange={updateFormField} value={formState.Arrival_date} />
                            </div>
                        </div>
                        {/* Country of Origin */}
                        <div className="row mt-2">
                            <div className="col-4"><label htmlFor="Country_origin" className="form-label">From (City/Country):</label></div>
                            <div className="col-8">
                                <input type="text" name="Country_origin" onChange={updateFormField} value={formState.Country_origin} className="form-control form-control-sm" placeholder="e.g London/UK" />
                            </div>
                        </div>
                        {/* Flight Number */}
                        <div className="row mt-2">
                            <div className="col-4"><label htmlFor="Arrival_flight_no" className="form-label">Flight Number:</label></div>
                            <div className="col-8">
                                <input type="text" name="Arrival_flight_no" onChange={updateFormField} value={formState.Arrival_flight_no} className="form-control form-control-sm" placeholder="e.g SQ747" />
                            </div>
                        </div>
                        {/* Flight Number */}
                        <div className="row mt-2">
                            <div className="col-4"><label htmlFor="Flight_ETA" className="form-label">Flight Arrival Time (ETA):</label></div>
                            <div className="col-8">
                                <input type="text" name="Flight_ETA" onChange={updateFormField} value={formState.Flight_ETA} className="form-control form-control-sm" placeholder="e.g 15/6/2022 2200hr" />
                            </div>
                        </div>
                        {/* Arrival Transfer Required */}
                        <div className="row">
                            <div className="col-12 col-md-4"><label htmlFor="Arrival_transfer" className="form-label">Arrival Transfer Required</label></div>
                            <div className="col-8">
                                <input type="radio" name="Arrival_transfer" onChange={updateFormField} checked={formState.Arrival_transfer === "Yes"} value="Yes" /> Yes
                                <input type="radio" name="Arrival_transfer" onChange={updateFormField} checked={formState.Arrival_transfer === "No"} className="ms-2" value="No" /> No
                            </div>
                        </div>
                        <hr />
                        <h5>DEPARTURE FLIGHT DETAILS</h5>
                        {/* <!-- passport date of expiry--> */}
                        <div className="row mt-2">
                            <div className="col-4"><label htmlFor="Departure_date" className="form-label">Departure Date:</label></div>
                            <div className="col-8">
                                <input type="date" name="Departure_date" onChange={updateFormField} value={formState.Departure_date} />
                            </div>
                        </div>
                        {/* Country of Destination */}
                        <div className="row mt-2">
                            <div className="col-4"><label htmlFor="Country_destination" className="form-label">To (City/Country):</label></div>
                            <div className="col-8">
                                <input type="text" name="Country_destination" onChange={updateFormField} value={formState.Country_destination} className="form-control form-control-sm" placeholder="e.g London/UK" />
                            </div>
                        </div>
                        {/* Flight Number */}
                        <div className="row mt-2">
                            <div className="col-4"><label htmlFor="Departure_flight_no" className="form-label">Flight Number:</label></div>
                            <div className="col-8">
                                <input type="text" name="Departure_flight_no" onChange={updateFormField} value={formState.Departure_flight_no} className="form-control form-control-sm" placeholder="e.g SQ747" />
                            </div>
                        </div>
                        {/* Flight Departure Date Time */}
                        <div className="row mt-2">
                            <div className="col-4"><label htmlFor="Flight_ETD" className="form-label">Flight Departure (ETD):</label></div>
                            <div className="col-8">
                                <input type="text" name="Flight_ETD" onChange={updateFormField} value={formState.Flight_ETD} className="form-control form-control-sm" placeholder="e.g 15/6/2022 2200hr" />
                            </div>
                        </div>
                        {/* Departure Transfer Required */}
                        <div className="row">
                            <div className="col-12 col-md-4"><label htmlFor="Departure_transfer" className="form-label">Departure Transfer Required</label></div>
                            <div className="col-8">
                                <input type="radio" name="Departure_transfer" onChange={updateFormField} checked={formState.Departure_transfer === "Yes"} value="Yes" /> Yes
                                <input type="radio" name="Departure_transfer" onChange={updateFormField} checked={formState.Departure_transfer === "No"} className="ms-2" value="No" /> No
                            </div>
                        </div>

                        <p className='mt-5'>Please note that transfers will be pre-arranged to and from airport only on the official date 15th & 17th June 2022, except for Evaluators/Champions.  Please kindly make your own separate arrangement if you are extending your stay in Singapore.</p>

                        <hr />
                        <h5>ACCOMODATION BOOKINGS</h5>
                        <p className='mt-4'>Please supply the following information:</p>
                        {/* <!-- check in date --> */}
                        <div className="row mt-2">
                            <div className="col-5"><label htmlFor="Check_in_date" className="form-label">Check in Date:</label></div>
                            <div className="col-7">
                                <input type="date" name="Check_in_date" onChange={updateFormField} value={formState.Check_in_date} />
                            </div>
                        </div>
                        {/* <!-- check out date --> */}
                        <div className="row mt-2">
                            <div className="col-5"><label htmlFor="Check_out_date" className="form-label">Check out Date:</label></div>
                            <div className="col-7">
                                <input type="date" name="Check_out_date" onChange={updateFormField} value={formState.Check_out_date} />
                            </div>
                        </div>
                        {/* Smoking Required */}
                        <div className='mt-2'>
                            <span className='mt-2'><h6>Accommodation Preference
                                <small className='fst-italic'>(subject to availability)</small></h6></span>
                        </div>
                        <hr />
                        <div className='mt-2 row'>
                            <div className='col-4'>
                                Room type:
                            </div>
                            <div className='col-4 text-center'>
                                <input type="radio" className="btn-check" name="Smoking" onChange={updateFormField} checked={formState.Smoking === "Smoking"} id="smoke1" value="Smoking" />
                                <label className={formState.Smoking === "Smoking" ? "btn btn-radio bg-yellow w-100" : "btn btn-radio btn-light w-100"} htmlFor='smoke1' ><i className="fa-solid fa-smoking"></i></label>
                            </div>
                            <div className='col-4 text-center'>
                                <input type="radio" className="btn-check" name="Smoking" onChange={updateFormField} checked={formState.Smoking === "Non-Smoking"} id="smoke2" value="Non-Smoking" />
                                <label className={formState.Smoking === "Non-Smoking" ? "btn btn-radio bg-yellow w-100" : "btn btn-radio btn-light w-100"} htmlFor='smoke2' ><i className="fa-solid fa-ban-smoking"></i></label>
                            </div>
                        </div>
                        {/* Bed Required */}
                        <hr />
                        <div className='mt-2 row'>
                            <div className='col-4'>
                                Bed type:
                            </div>
                            <div className='col-4 text-center'>
                                <input type="radio" className="btn-check" name="Bed" onChange={updateFormField} checked={formState.Bed === "Single"} id="bed1" value="Single" />
                                <label className={formState.Bed === "Single" ? "btn btn-radio bg-yellow w-100" : "btn btn-radio btn-light w-100"} htmlFor="bed1">Single</label>
                            </div>
                            <div className='col-4 text-center'>
                                <input type="radio" className="btn-check" name="Bed" onChange={updateFormField} checked={formState.Bed === "Twin"} id="bed2" value="Twin" />
                                <label className={formState.Bed === "Twin" ? "btn btn-radio bg-yellow w-100" : "btn btn-radio btn-light w-100"} htmlFor="bed2">Twin</label>
                            </div>
                        </div>
                        {/* Submission */}

                        <div className='mt-5 d-flex justify-content-between'>
                            {
                                finalist && formState.partner === "Yes" ?
                                    <div className='btn btn-sm bg-yellow fw-bolder' onClick={() => {
                                        setPage("partner");
                                        window.scrollTo(0, 0);
                                    }} >&lt;&lt; Partner details</div> :
                                    <div className='btn btn-sm btn-light fw-bolder' onClick={() => {
                                        setPage("associate");
                                        window.scrollTo(0, 0);
                                    }} >Associate details</div>
                            }

                            <input type="submit" className='btn btn-sm bg-green'
                                value="Submit" />

                        </div>
                    </div> : null
                }
            </form>
        </section>
    </React.Fragment >
    )
}

export default RegForm