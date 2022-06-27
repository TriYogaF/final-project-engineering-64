import { useState, useEffect, useRef } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "../api/axios";

const sizeImg = {
  width: "50%",
  height: "50%",
};

const LOGIN_URL = "/api/v1/sessions";

export default function Login() {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL, JSON.stringify({ email, password }), {
        headers: { "Content-Type": "application/json" },
      });
      // console.log(JSON.stringify(response?.data));
      // console.log(response?.data);
      const accessToken = response?.data?.data?.token;
      const roles = response?.data?.data?.role;
      console.log(accessToken);
      console.log(roles);
      console.log(from);
      setAuth({ email, password, roles, accessToken });
      setEmail("");
      setPassword("");
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing email or password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <section className="gh-section">
      <Container className="pb-5">
        <Row className="align-items-center">
          <Col className="col-7">
            <h1 className="p-5 text-light">
              <strong>Membaca</strong> memperkaya ilmuku dan memperluas imajinasiku
            </h1>
            <img src="../assets/img/book.png" alt="logo" style={sizeImg} className="float-end"></img>
          </Col>
          <Col className="bg-light m-5 rounded-2">
            <Container className="p-4 mt-2 mb-5">
              <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
                {errMsg}
              </p>
              <div className="rounded-2 py-2 mb-5 gh-bg-primary">
                <h2 className="text-center text-light">Diary</h2>
              </div>
              <Form onSubmit={handleSubmit} className="d-grid">
                <Form.Group className="mb-3" controlId="inputEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" ref={emailRef} onChange={(e) => setEmail(e.target.value)} value={email} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="InputPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} required />
                </Form.Group>
                <Button variant="light" className="text-light gh-bg-primary" type="submit">
                  Login
                </Button>
              </Form>
              <div className="text-center pt-4">
                <p>
                  If you don't have an account
                  <br />
                  You can{" "}
                  <Link to="/register" className="link-dark gh-regist text-decoration-underline">
                    Register here !
                  </Link>
                </p>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
