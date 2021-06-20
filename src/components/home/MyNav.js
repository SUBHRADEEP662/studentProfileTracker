import brand from '../../img/brand.jpg';
import {Form, Col, Button, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import Axios from 'axios';
import jwt from 'jwt-decode';
import { useHistory } from 'react-router';
import {NavLink} from 'react-router-dom';

function MyNav() {
    const [modalShow, setModalShow] = useState(false);
    const [modalShowTwo, setModalShowTwo] = useState(false);
    return( 
        <>
            <nav className="navbar navbar-expand-sm bg-light m-1 navbar-light sticky-top">
                <a className="navbar-brand" href="#brand"><img src={brand} height='40px' width='80px' alt='' /> </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav ml-auto" style={{fontSize: '15px'}}>
    
                <li className="nav-item">
                    <a className="nav-link font-weight-bold text-primary" onClick={() => setModalShowTwo(true)} href="#1"> <i className='fa fa-sign-in'></i> LOG IN</a> 
                </li> &nbsp;&nbsp;
                <li className="nav-item">
                    <a className="nav-link font-weight-bold text-primary" onClick={() => setModalShow(true)} href="#2"> <i className='fa fa-user-plus'></i> SIGN UP</a>
                </li> &nbsp;&nbsp;
                <li className="nav-item">
                    <a href='#student' className="nav-link font-weight-bold text-primary"><NavLink to='/student'>STUDENT</NavLink></a>
                </li>
                <li className="nav-item">
                    <a href='#mentor' className="nav-link font-weight-bold text-primary"> <NavLink to='/mentor'>MENTOR</NavLink> </a>
                </li>
                
        
                </ul>
  </div> 
            </nav>
            <Signup show={modalShow} onHide={() => setModalShow(false)} />
            <Login show={modalShowTwo} onHide={() => setModalShowTwo(false)} />
        </>
    );
}


function Signup(props){
    let [user, setUser] = useState({
        email:"", password: "", name: "", 
        registration: "", designation: "", department: "", roll: ""
    });

    let name, value;

    let handleInput1 = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }
    var userData1 = async (e) => {
        e.preventDefault();
        let {email,password,name,registration,designation,department, roll} = user;

        let res = await fetch("/newsignup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,password,name,registration,designation,department,roll
            })
        });
 
        let newdata = await res.json();

        if (newdata.status === 402 || !newdata) {
            window.alert("Registration Unsucessful");
        } else {  
            window.alert("Registration Sucessful");
        }
   }
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
        <Form method='POST'>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email*</Form.Label>
                <Form.Control name='email' type="email" onChange={handleInput1} placeholder="Enter email" required />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password*</Form.Label>
                <Form.Control name='password' type="password" onChange={handleInput1} placeholder="Password" required />
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
                <Form.Label>Name*</Form.Label>
                <Form.Control name='name' type='text' onChange={handleInput1} placeholder="Enter your name (in caps)" required />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
                <Form.Label>Registration number with year</Form.Label>
                <Form.Control name='registration' type='number' onChange={handleInput1} placeholder="College registration number with year" />
            </Form.Group>

            <Form.Row>
            <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Signup as*</Form.Label>
                <Form.Control as="select" name='designation' onChange={handleInput1} defaultValue="Choose..." required>
                    <option value=''>Choose...</option>
                    <option value='student'>Student</option>
                    <option value='mentor'>Mentor</option>
                </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Department*</Form.Label>
                <Form.Control as="select" onChange={handleInput1} name='department' defaultValue="Choose..." required>
                    <option value=''>Choose...</option>
                    <option value='cse'>CSE</option>
                    <option value='ece'>ECE</option>
                    <option value='ee'>EE</option>
                    <option value='ce'>CE</option>
                    <option value='me'>ME</option>
                </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Roll number</Form.Label>
                <Form.Control name='roll' type='number' onChange={handleInput1} placeholder='Enter roll no' />
                </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
            </Form.Group> <span>*** Mentor does not have registration or roll no ***</span>

            <Button href='#' className='float-right' onClick={userData1} variant="warning" type="submit">
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


function Login(props){

    let history = useHistory();

    let [user, setUser] = useState({
        designation: "", email: "", password: ""
    });
    let name, value;

    let handleInput2 = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }
    var userData2 = async (e) => {
        e.preventDefault();
        let { designation, email, password } = user;


        Axios.post('/axioslogin', {
            designation: designation,
            email: email, 
            password: password,

        }).then((result) => {
            console.log(result)
            if (result.data.access) {
                const token1 = result.data.access;
                localStorage.setItem('token', token1)
                let user = jwt(token1)
                console.log(user);

                window.alert("Login Sucessful")
                if(designation === 'student'){  
                    history.push('/student')
                }
                else {
                    history.push('/mentor')
                }

            } else {
                if (result.data.message) {
                    window.alert("Login Unsucessful")
                }

            }
        })

    }
    
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
          Please Login to proceed
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className='text-center'>Student Profile Tracker</h4>
        <p>
        <Form>
            <Form.Row>
            <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Login as*</Form.Label>
                <Form.Control as="select" name='designation' onChange={handleInput2} defaultValue="Choose..." required>
                    <option value=''>Choose...</option>
                    <option value='student'>Student</option>
                    <option value='mentor'>Mentor</option>
                </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email*</Form.Label>
                <Form.Control type="email" name='email' onChange={handleInput2} placeholder="Enter email" required />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password*</Form.Label>
                <Form.Control type="password" name='password' onChange={handleInput2} placeholder="Password" required />
                </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>

            <Button href='#' className='float-right' onClick={userData2} variant="warning" type="submit">
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

export default MyNav;