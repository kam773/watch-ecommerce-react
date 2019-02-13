import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
    <FooterWrapper className="container-fluid mt-5">
        <div className="row">
            <div className="col-md-3 col-xs-12">
                    <h5 className="section-header text-left ml-5 mb-4 text-capitalize text-black">follow us</h5>
                    <ul className="list my-3 text-left ml-2">
                        <li className="list-item my-4"><a className="d-flex flex-row" href="#"><i className="fab fa-facebook fa-2x"></i>Facebook</a></li>
                        <li className="list-item my-4"><a className="d-flex flex-row" href="#"><i className="fab fa-twitter fa-2x"></i>Twitter</a></li>
                        <li className="list-item my-4"><a className="d-flex flex-row" href="#"><i className="fab fa-google-plus fa-2x"></i>Google Plus</a></li>
                    </ul>
            </div>
            <div className="col-md-3 col-xs-12">
                    <h5 className="section-header text-left ml-5 mb-4 text-capitalize text-black">information</h5>
                    <ul className="list text-left ml-2">
                        <li className="my-2">Specials</li>
                        <li className="my-2">New Products</li>
                        <li className="my-2">Our Stores</li>
                        <li className="my-2">Contact Us</li>
                        <li className="my-2">Top Sellers</li>
                    </ul>
            </div>
            <div className="col-md-3 col-xs-12">
                    <h5 className="section-header text-left ml-5 mb-4 text-capitalize text-black">my account</h5>
                    <ul className="list text-left ml-2">
                        <li className="my-2">My Account</li>
                        <li className="my-2">My Credit Spils</li>
                        <li className="my-2">My Merchandise returns</li>
                        <li className="my-2">My Personal info</li>
                        <li className="my-2">My Addresses</li>
                    </ul>
            </div>
            <div className="col-md-3 col-xs-12">
                    <h5 className="section-header text-left ml-5 mb-4 text-capitalize text-black">store information</h5>
                    <ul className="list text-left ml-2">
                        <li><h6>The company name,
						<span>Lorem ipsum dolor,</span>
						Glasglow Dr 40 Fe 72.</h6>
                        <h6>+955 123 4567</h6>
                        <p><a href="mailto:example@email.com">contact@example.com</a></p>
                        </li>
                    </ul>
            </div>
        </div>
        <footer className="footer pt-5 my-5">
        <div className="row">
            <div className="col-md-6">
                <div className="subscribe-from ml-5">
                    <form action="" id="subscribe-form">
                        <div className="form-inline">
                            <input type="text" placeholder="Enter your email"/>
                            <button type="submit">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-md-6">
                <div className="footer-text text-right py-2 mr-5">
                        <p className="text-right-text-black text-bold">
                            &copy; 2019 Luxury Watches. All Rights Reserved
                        </p>
                    </div>
                </div>
        </div>


        </footer>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div`
.list {
    list-style: none;
    text-align: center;
    .list-item {
        a {
            color: #000!important;
            text-decoration: none;
            .fab {
                margin-right: .3rem;
            }
        }

    }
}
.footer {
    border-top: 1px solid #999;
}
input {
    height: 2.5rem;
    border: 1px solid #000;
    width: 50%;
    font-size: 1.2rem;
    padding: .2rem;
}
button[type="submit"] {
    border: 1px solid #000;
    background: transparent;
    padding: .46rem 1rem;
    cursor: pointer;

}
`;