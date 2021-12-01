import React, { Component } from 'react';
import { connect } from "react-redux";

class Blogs extends Component {
    render() {
        var showBlogs = this.props.blogs.map((blog, index) => {
            return (
                <div key={index} className="box">
                        <div className="image">
                            <img src={blog.img} />
                        </div>
                        <div className="content">
                            <a href="#" className="title">
                                {blog.title}
                            </a>
                            <span>{blog.time}</span>
                            <p>
                                {blog.content}
                            </p>
                            <a href="#" className="btn">
                                Read more
                            </a>
                        </div>
                    </div>
            )
        })
        return (
            <section className="blogs" id="blogs">
                <h1 className="heading">
                    {" "}
                    Our <span>Blogs</span>{" "}
                </h1>
                <div className="box-container">
                    {showBlogs}
                </div>
            </section>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Blogs);
