import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <section className="contact" id="contact">
                <h1 className="heading">
                    {" "}
                    <span>Contact</span> us{" "}
                </h1>
                <div className="row">
                    <iframe
                        className="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d942889.3690775798!2d105.24378815385619!3d18.360770176137255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313828a1eee9c3c7%3A0x1ac77b26b87d106b!2zSMOgIFTEqW5oLCBWaeG7h3QgTmFt!5e1!3m2!1svi!2s!4v1636537348241!5m2!1svi!2s"
                        
                        loading="lazy"
                    />
                    <form >
                        <h3>Get in touch</h3>
                        <div className="inputBox">
                            <span className="fas fa-user" />
                            <input type="text" placeholder="name" />
                        </div>
                        <div className="inputBox">
                            <span className="fas fa-envelope" />
                            <input type="email" placeholder="email" />
                        </div>
                        <div className="inputBox">
                            <span className="fas fa-phone" />
                            <input type="number" placeholder="number" />
                        </div>
                        <input type="submit" defaultValue="Contact now" className="btn" />
                    </form>
                </div>
            </section>
        );
    }
}

export default Contact;