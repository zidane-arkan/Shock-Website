import React from 'react';
import InputContact from '../ui/InputContact';
import phone from '../../assets/contactus/phone.png';
import location from '../../assets/contactus/location.png';
import globe from '../../assets/contactus/globe.png';
function ContactUs() {
    return (
        <section className="row__custom">
            <section className="row row__custom__4 row__margin__bottom ">
                <article className="contactus__1 col-sm-12 col-md-12 col-xl-12">
                    <div className="contactus__title">
                        <h2>Having Project in mind?</h2>
                    </div>
                </article>
                <section className="row row__custom__5">
                    <article className="contactus__2 col-sm-12 col-md-3 col-xl-4">
                        <section className="contactus__2__box">
                            <div className="contactus__text">
                                <img src={phone} alt="Phone" />
                                <h4>Call us</h4>
                            </div>
                            <p>+62 8555 555 555</p>
                        </section>
                        <section className="contactus__2__box">
                            <div className="contactus__text">
                                <img src={location} alt="Phone" />
                                <h4>Location</h4>
                            </div>
                            <p>Palembang, Indonesia</p>
                        </section>
                        <section className="contactus__2__box">
                            <div className="contactus__text">
                                <img src={globe} alt="Phone" />
                                <h4>Mail us</h4>
                            </div>
                            <p>shockfilm@gmail.com</p>
                        </section>
                    </article>
                    <article className="contactus__3 col-sm-12 col-md-8 col-xl-8">
                        <div className="contactus__title">
                            <h2>Contact Now</h2>
                            <p>In diam consequat nec eu. Eu sem nec vel, sollicitudin ipsum viverra sed nibh amet. Nunc, et pharetra, duis tortor dictum nisl. Id vestibulum tincidunt adipiscing gravida risus.</p>
                        </div>
                        <form className="form__contact__box" >
                            <div className="form__contact">
                                <InputContact
                                    type="text"
                                    typeName="Name"
                                    typeId="name"
                                    htmlFor="name"
                                    ariaDescribe="nameHelp"
                                />
                                <InputContact
                                    type="email"
                                    typeName="Email"
                                    typeId="email"
                                    htmlFor="email"
                                    ariaDescribe="emailHelp"
                                />
                                <InputContact
                                    type="password"
                                    typeName="Password"
                                    typeId="exampleInputPassword1"
                                    htmlFor="exampleInputPassword1"
                                    ariaDescribe="passwordHelp"
                                />
                                <InputContact
                                    type="text"
                                    typeName="Message"
                                    typeId="message"
                                    htmlFor="message"
                                    ariaDescribe="messageHelp"
                                />
                                {/* <div className="position-relative mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label label__custom">Password</label>
                                <input type="password" className="form-control form__contactus form__control__custom" id="exampleInputPassword1" />
                            </div> */}
                                {/* <div className="position-relative mb-3">
                                <label htmlFor="email" className="form-label label__custom">Email</label>
                                <input type="email" className="form-control form__contactus form__control__custom" id="email" aria-describedby="emailHelp" />
                            </div>
                            
                            <div className="position-relative mb-3">
                                <label htmlFor="message" className="form-label label__custom">Message</label>
                                <input type="text" className="form-control form__contactus form__control__custom" id="message" />
                            </div> */}
                            </div>
                            <button type="submit" className="btn btn__submit__contact">Submit</button>
                        </form>
                    </article>
                </section>
            </section>
        </section>
    );
}

export default ContactUs;