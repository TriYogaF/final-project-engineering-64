import { useState, useEffect, useRef } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import axios from "../api/axios";

const sizeImg = {
  width: "50%",
  height: "50%",
};

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[A-z0-9._%+-]+@[A-z0-9.-]+\.[A-z]{2,}$/;
// const BASE_URL = "http://quiet-woodland-87309.herokuapp.com/api/v1";
const REGISTER_URL = "/users";

const primaryColor = { backgroundColor: "#304D63" };
const secondaryColor = { backgroundColor: "#304D63" };

export default function Register() {
  const nameRef = useRef();
  const errRef = useRef();

  const [name, setName] = useState("");
  const [validName, setValidName] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);

  const [gender, setGender] = useState("");
  const [validGender, setValidGender] = useState(false);
  const [genderFocus, setGenderFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [validConfirm, setValidConfirm] = useState(false);
  const [confirmFocus, setConfirmFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(name);
    console.log(result);
    console.log(name);
    setValidName(result);
  }, [name]);

  useEffect(() => {
    setValidGender(gender);
  }, [gender]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    console.log(result);
    console.log(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(password);
    console.log(result);
    console.log(password);
    setValidPassword(result);
    const match = password === confirmPassword;
    setValidConfirm(match);
  }, [password, confirmPassword]);

  useEffect(() => {
    setErrMsg("");
  }, [name, password, confirmPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(REGISTER_URL, JSON.stringify({ name, gender, email, password }), {
        headers: { "Content-Type": "application/json" },
      });
      console.log(JSON.stringify(response.data));
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("The email you are using is already registered");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Success</h1>
          <p>
            <a href="/login">Login</a>
          </p>
        </section>
      ) : (
        <main style={primaryColor}>
          <Container className="pb-5">
            <Row className="align-items-center">
              <Col className="col-7">
                <h1 className="p-5 text-light">Membaca memperkaya ilmuku dan memperluas imajinasiku</h1>
                <img src="../assets/img/book.png" style={sizeImg} className="float-end"></img>
              </Col>
              <Col className="bg-light m-5 rounded-2">
                <Container className="p-4 mt-2 mb-5">
                  <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
                    {errMsg}
                  </p>
                  <div className="rounded-2 py-2 mb-5" style={secondaryColor}>
                    <h2 className="text-center text-light">Register</h2>
                  </div>
                  <Form onSubmit={handleSubmit} className="d-grid">
                    <Form.Group className="mb-3" controlId="InputUsername">
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter username"
                        ref={nameRef}
                        autoComplete="off"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required
                        aria-invalid={validName ? "false" : "true"}
                        aria-describedby="uidnote"
                        onFocus={() => setNameFocus(true)}
                        onBlur={() => setNameFocus(false)}
                      />
                      <p id="uidnote" className={nameFocus && name && !validName ? "instructions" : "offscreen"}>
                        4-23 characters, letters, numbers, and underscores
                      </p>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="inputGender">
                      <Form.Label>Gender</Form.Label>
                      <Form.Select
                        onChange={(e) => setGender(e.target.value)}
                        value={gender}
                        required
                        aria-invalid={validGender ? "false" : "true"}
                        aria-describedby="gendernote"
                        onFocus={() => setGenderFocus(true)}
                        onBlur={() => setGenderFocus(false)}
                      >
                        <option>Pilih Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </Form.Select>
                      <p id="gendernote" className={genderFocus && gender && !validGender ? "instructions" : "offscreen"}>
                        Gender is required
                      </p>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="inputEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                        aria-invalid={validEmail ? "false" : "true"}
                        aria-describedby="emailnote"
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                      />
                      <p id="emailnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                        Please enter a valid email address
                      </p>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="InputPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                        aria-invalid={validPassword ? "false" : "true"}
                        aria-describedby="pwdnote"
                        onFocus={() => setPasswordFocus(true)}
                        onBlur={() => setPasswordFocus(false)}
                      />
                      <p id="pwdnote" className={passwordFocus && !validPassword ? "instructions" : "offscreen"}>
                        8-24 characters. Must contain at least one lowercase letter, one uppercase letter, one number, and one special character
                      </p>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="InputConfirmPassword">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                        required
                        aria-invalid={validConfirm ? "false" : "true"}
                        aria-describedby="confirmnote"
                        onFocus={() => setConfirmFocus(true)}
                        onBlur={() => setConfirmFocus(false)}
                      />
                      <p id="confirmnote" className={confirmFocus && !validConfirm ? "instructions" : "offscreen"}>
                        Must match the first password input field.
                      </p>
                    </Form.Group>
                    <Button variant="light" className="text-light" style={secondaryColor} type="submit" disabled={!validName || !validGender || !validEmail || !validPassword || !validConfirm}>
                      Submit
                    </Button>
                  </Form>
                </Container>
              </Col>
            </Row>
          </Container>
        </main>
      )}
    </>
  );
}
