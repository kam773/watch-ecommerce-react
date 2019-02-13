import React from 'react';
import styled from 'styled-components';

export default function Contact() {
  return (
    <section className="container-fluid">
         <h1 className="text-center text-black text-capitalize my-3">Contact us</h1>
        <FormWrapper>
          <div className="row">
            <div className="col-md-4">
                <div className="address-box my-3">
                  <div className="address my-3">
                          <h5>Address</h5>
                          <p>The company name,
                          <span>Lorem ipsum dolor,</span>
                          Glasglow Dr 40 Fe 72.</p>
                  </div>
                  <div className="address my-3">
                          <h5>Address1</h5>
                          <p>Tel:1115550001,
                          <span>Fax:190-4509-494</span>
                          Email: <a href="mailto:example@email.com">contact@example.com</a></p>
                  </div>
                </div>
            </div>
            <section className="col-md-8">
            <div className="row">
                <div className="col-md-12 mb-md-0 mb-5">
                    <form action="mail.php" id="contact-form" method="POST">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="md-form my-3">
                                <input type="text" id="name" name="name" placeholder="Your name" className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="md-form my-3">
                                <input type="text" id="email" name="email" placeholder="Email" className="form-control"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-md-12">
                        <div className="md-form my-3">
                            <input type="text" id="subject" name="subject" placeholder="Subject" className="form-control"/>
                        </div>
                    </div>
                  </div>
                    <div className="row">
                      <div className="col-md-12">
                          <div className="md-form my-3">
                              <textarea type="text" id="message" name="message" placeholder="Message" className="form-control md-textarea"></textarea>
                          </div>
                      </div>
                  </div>
               </form>
               <div className="my-3">
                    <a className="btn">Send</a>
              </div>
            </div>
          </div>
      </section>

          </div>


    </FormWrapper>
    </section>


  )
}
const FormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 0 0 30%;
.address-box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.address {
  font-size: 1.2rem;
}
textarea {
  resize: none;
  height: 6rem;
  border: 1px solid #555;
  font-size: 1.2rem;
}
input {
  height: 3rem;
  border: 1px solid #555;
  font-size: 1.2rem;

}
#contact-form {
  width: 100%;
}
.btn {
  padding: 1rem 2rem;
  border: 2px solid #555;
  background: transparent;
  color: #555;
  font-size: 1.2rem;
  font-weight: 600;
  transition: all .3s ease-in-out;
}
.btn:hover {
  background: #555;
  color: #fff!important;
}

`;