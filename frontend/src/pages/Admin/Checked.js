import { Container, Row, Col, Form, FormControl, Navbar } from "react-bootstrap";
import { Table } from "react-bootstrap";

export default function Dashboard() {
   return (
      <Container fluid>
         <Row>
            <Col>
               <Navbar className="mb-5">
                  <Navbar.Brand href="../App.js">
                     All Books
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                     <Navbar.Collapse id="basic-navbar-nav">
                        <Form className="d-inline mx-2 ms-auto">
                          <FormControl type="text" placeholder="Search" />
                        </Form>
                     </Navbar.Collapse>
               </Navbar>
               <Table className="table table-striped">
                  <thead>
                     <tr>
                        <th>Books</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Approval</th>
                    </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>Gambar Buku</td>
                        <td>Verified</td>
                        <td>17/07/2022</td>
                        <td>Accepted</td>
                     </tr>
                  </tbody>
               </Table>
            </Col>
         </Row>
      </Container>
   )
}