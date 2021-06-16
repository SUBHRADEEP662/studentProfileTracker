import {Form, Col, Button, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';

function Btn(){
  const [modalShow, setModalShow] = useState(false);
  return(
    <>
    <Button variant="primary" className='mx-auto d-block mt-3' onClick={() => setModalShow(true)}>
                SIGN UP
            </Button>

            <Login show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

function Login(props){
    return(
        <>
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Please sign up to proceed
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className='text-center'>Student Profile Tracker</h4>
        <p>
        <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="Enter your name (in caps)" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
                <Form.Label>Registration number with year</Form.Label>
                <Form.Control placeholder="College registration number with year" />
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Current year</Form.Label>
                <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Department</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>CSE</option>
                    <option>ECE</option>
                    <option>EE</option>
                    <option>CE</option>
                    <option>ME</option>
                </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Roll number</Form.Label>
                <Form.Control />
                </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>

            <Button href='#' className='float-right' variant="warning" type="submit">
                Submit
            </Button>
        </Form>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
        </>
    );
}

export default Btn;