import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <section className="home" id="home">
                <div className="content" data-aos="fade-up">
                    <h3>Fresh coffee in the morning</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut beatae,
                        possimus porro sed eum optio, impedit tempora pariatur blanditiis laborum
                        totam!
                    </p>
                    <a href="#" className="btn">
                        {" "}
                        Get yours now
                    </a>
                </div>
            </section>
        );
    }
}

export default Home;