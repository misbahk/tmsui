import React, { useState }  from 'react';
import { Link, useNavigate } from "react-router-dom";
import FormU from "../../utilities/Forms";
import '../../css/login.css';
import loginlogo from "../../assets/3sclogo.png";
import { Card, Button, Container, Row, Col, InputGroup, Form } from "react-bootstrap";

const Login = () => {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [validate, setValidate] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validateLogin = () => {
    let isValid = true;

    let validator = FormU.validator({
      email: {
        value: email,
        isRequired: true,
        isEmail: true,
      },
      password: {
        value: password,
        isRequired: true,
        minLength: 6,
      },
    });

    if (validator !== null) {
      setValidate({
        validate: validator.errors,
      });

      isValid = false;
    }
    return isValid;
  };

  const login = () => {
   
    history('/sidebar');
  };

  const authenticate = (e) => {
    e.preventDefault();

    const validate = validateLogin();

    if (validate) {
      setValidate({});
      setEmail("");
      setPassword("");
      alert("Successfully Login");
      login();
    }
  };

  const togglePassword = (e) => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  return (
    <>
      {/* <div style={{justifyContent:"center", display:"flex"}}>
<Row className="m-auto align-self-center">
    <Col >
    <img src={loginlogo} alt="loginlogo" class="img-fluid" style={{width:"9rem", height:"9rem"}} />
    </Col>
</Row>
</div> */}
      <div className="center">
        <Container className="d-flex">
          <Row className="m-auto align-self-center">
            <Col>
              <Card style={{ width: "27rem" , border:"2px solid #d1d1d1"}}>
                <Card.Img
                  variant="top"
                  src={loginlogo}
                  alt="loginlogo"
                  style={{
                    width: "9rem",
                    height: "9rem",
                    display: "flex",
                    alignSelf: "center",
                  }}
                />
                <Card.Body>
                  <p style={{color:"rgb(41 38 102)",fontSize:"18px", fontWeight:"500" }}>Welcome to 3SC TMS Solution</p>
                  <p style={{color:"#d1d1d1"}}> Sign in into your account</p>
                  <div className="auth-form-container text-start">
                    <form
                      className="auth-form"
                      method="POST"
                      onSubmit={authenticate}
                      autoComplete={"off"}
                    >

<InputGroup className="mb-3">
       
       <Form.Control
         placeholder="Username"
         type="email"
         className={`form-control ${
           validate.validate && validate.validate.email
             ? "is-invalid "
             : ""
         }`}
         id="email"
         name="email"
         value={email}
       
         onChange={(e) => setEmail(e.target.value)}
       />
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
     </InputGroup>

     <div className="email mb-3">
                     
                  

                     <div
                       className={`invalid-feedback text-start ${
                         validate.validate && validate.validate.email
                           ? "d-block"
                           : "d-none"
                       }`}
                     >
                       {validate.validate && validate.validate.email
                         ? validate.validate.email[0]
                         : ""}
                     </div>
                   </div>



                   <InputGroup className="mb-3">
       
       <Form.Control
         type={showPassword ? "text" : "password"}
         className={`form-control ${
           validate.validate && validate.validate.password
             ? "is-invalid "
             : ""
         }`}
         name="password"
         id="password"
         value={password}
         placeholder="Password"
         onChange={(e) => setPassword(e.target.value)}
       />
        <InputGroup.Text id="basic-addon1"   type="button"
                           
                            onClick={(e) => togglePassword(e)}> 
                          
                          
                            <i
                              className={
                                showPassword ? "far fa-eye" : "far fa-eye-slash"
                              }
                            ></i>{" "}
                         </InputGroup.Text>
     </InputGroup>
     <div
                            className={`invalid-feedback text-start ${
                              validate.validate && validate.validate.password
                                ? "d-block"
                                : "d-none"
                            }`}
                          >
                            {validate.validate && validate.validate.password
                              ? validate.validate.password[0]
                              : ""}
                          </div>



                      <div className="password mb-3">
                        

                        <div className="extra mt-3 row justify-content-between">
                          <div className="col-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="remember"
                                checked={remember}
                                onChange={(e) =>
                                  setRemember(e.currentTarget.checked)
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="remember"
                              >
                                Remember me
                              </label>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="forgot-password text-end">
                              <Link to="/forgot-password">
                                Forgot password?
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <button
                          type="submit"
                          className="btn btn-primary w-100 theme-btn mx-auto"
                        >
                          Log In
                        </button>
                      </div>
                    </form>

                    <hr />
                    <div className="auth-option text-center pt-2">
                      No Account?{" "}
                      <Link className="text-link" to="/register">
                        Sign up{" "}
                      </Link>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
    // <div className="row g-0 auth-wrapper">

    //     <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center">
    //     <Card responsive>

    //         <div className="d-flex flex-column align-content-end">
    //             <div className="auth-body mx-auto">
    //                 <p>Login to your account</p>
    //                 <div className="auth-form-container text-start">
    //                     <form className="auth-form" method="POST" onSubmit={authenticate} autoComplete={'off'}>
    //                         <div className="email mb-3">
    //                             <input type="email"
    //                                 className={`form-control ${validate.validate && validate.validate.email ? 'is-invalid ' : ''}`}
    //                                 id="email"
    //                                 name="email"
    //                                 value={email}
    //                                 placeholder="Email"
    //                                 onChange={(e) => setEmail(e.target.value)}
    //                             />

    //                             <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.email) ? 'd-block' : 'd-none'}`} >
    //                                 {(validate.validate && validate.validate.email) ? validate.validate.email[0] : ''}
    //                             </div>
    //                         </div>

    //                         <div className="password mb-3">
    //                             <div className="input-group">
    //                                 <input type={showPassword ? 'text' : 'password'}
    //                                     className={`form-control ${validate.validate && validate.validate.password ? 'is-invalid ' : ''}`}
    //                                     name="password"
    //                                     id="password"
    //                                     value={password}
    //                                     placeholder="Password"
    //                                     onChange={(e) => setPassword(e.target.value)}
    //                                 />

    //                                 <button type="button" className="btn btn-outline-primary btn-sm" onClick={(e) => togglePassword(e)} ><i className={showPassword ? 'far fa-eye' : 'far fa-eye-slash'} ></i> </button>

    //                                 <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.password) ? 'd-block' : 'd-none'}`} >
    //                                     {(validate.validate && validate.validate.password) ? validate.validate.password[0] : ''}
    //                                 </div>
    //                             </div>

    //                             <div className="extra mt-3 row justify-content-between">
    //                                 <div className="col-6">
    //                                     <div className="form-check">
    //                                         <input className="form-check-input" type="checkbox" id="remember" checked={remember} onChange={(e) => setRemember(e.currentTarget.checked)} />
    //                                         <label className="form-check-label" htmlFor="remember">
    //                                             Remember me
    //                                         </label>
    //                                     </div>
    //                                 </div>
    //                                 <div className="col-6">
    //                                     <div className="forgot-password text-end">
    //                                         <Link to="/forgot-password">Forgot password?</Link>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <div className="text-center">
    //                             <button type="submit" className="btn btn-primary w-100 theme-btn mx-auto">Log In</button>
    //                         </div>
    //                     </form>

    //                     <hr />
    //                     <div className="auth-option text-center pt-2">No Account? <Link className="text-link" to="/register" >Sign up </Link></div>
    //                 </div>
    //             </div>
    //         </div>
    //             </Card>
    //     </div>

    // // </div>
  );
};

export default Login;
