import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <section className="about" id="about">
                <h1 className="heading">
                    {" "}
                    <span>About</span> Us{" "}
                </h1>
                <div className="row">
                    <div className="image" data-aos="fade-right">
                        <img src="./img/about-img.jpeg"/>
                    </div>
                    <div className="content" data-aos="fade-left">
                        <h3>What makes our coffee special?</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                            dignissimos adipisci ipsum harum error ab asperiores vero iste corporis
                            repellendus cum sed facilis labore fugit voluptatem corrupti iure, aut
                            quaerat.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                            dignissimos adipisci ipsum harum error ab asperiores vero iste corporis
                            repellendus cum sed facilis labore fugit voluptatem corrupti iure, aut
                            quaerat.
                        </p>
                        <a href="#" className="btn">
                            Learn more
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;