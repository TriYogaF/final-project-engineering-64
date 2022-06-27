import { Container, Row, Col, Form, FormControl, Navbar } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "../../api/axios";

export default function Checked() {
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(false);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get("/api/v1/books");
            setData(response.data.data);
            setLoading(false);
         } catch (err) {
            setError(true);
         }
      };
      fetchData();
   }, []);

   const handleClick = (id) => {
      const newData = data.map((book) => {
         if (book.id === id) {
            return {
               ...book,
               status: book.status === "Approved",
            };
         }
         return book;
      });
      setData(newData);
   }

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
                           <FormControl type="text" placeholder="Search" className="mr-sm-2" />
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
                     {data.map((book) => (
                        <tr key={book.id}>
                           <td>{book.title}</td>
                           <td>{book.status}</td>
                           <td>{book.created_at}</td>
                           <td>
                              <button onClick={() => handleClick(book.id)}>Approval</button>
                           </td>
                         </tr>
                     ))}
                  </tbody>
               </Table>
            </Col>
         </Row>
      </Container>
   )
}