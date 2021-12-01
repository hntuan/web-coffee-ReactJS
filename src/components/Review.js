import React, { Component } from 'react';
import { connect } from "react-redux";

class Review extends Component {
    render() {
        var showReview = this.props.review.map((review, index) => {
            return (
                <div key={index} className="box">
                    <img src={review.img1} className="quote" />
                    <p>
                       {review.content}
                    </p>
                    <img src={review.img2} className="user"  />
                    <h3>{review.name}</h3>
                    <div className="stars">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                    </div>
                </div>
            )
        })
        return (
            <section className="review" id="review">
                <h1 className="heading">
                    {" "}
                    Customer's <span>reviews</span>{" "}
                </h1>
                <div className="box-container">

                   {showReview}
                </div>
            </section>

        );
    }
}
const mapStateToProps = (state) => {
    return {
        review: state.review,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Review);
