import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import std1 from '../../img/std1.jpg';
import std2 from '../../img/std2.jpg';
import std3 from '../../img/std3.jpg';
import std4 from '../../img/std4.jpg';

function HighLights(){
    return(
        <div className='container row mx-auto text-center'>
            <div className='col-sm-6 col-md-3'>
                <Card style={{ width: '15rem' }} className='mx-auto'>
                    <Card.Img variant="top" src={std1} />
                    <Card.Body>
                        <Card.Title><kbd>Ram Das </kbd></Card.Title>
                        <Card.Text>
                        <p>
                            <span style={{fontWeight: 'bold'}}>Placed at: </span> Infosys <br />
                            <span style={{fontWeight: 'bold'}}>Salary: </span> 8 LPA <br />
                            <span style={{fontWeight: 'bold'}}>Passout Batch: </span> 2018  <br />
                            <span style={{fontWeight: 'bold'}}>Dept: </span> CSE  <br />
                        </p>
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </div>
            <div className='col-sm-6 col-md-3'>
                <Card style={{ width: '15rem' }} className='mx-auto'>
                    <Card.Img variant="top" src={std2} />
                    <Card.Body>
                        <Card.Title><kbd>Madhu Sen</kbd></Card.Title>
                        <Card.Text>
                        <p>
                            <span style={{fontWeight: 'bold'}}>Placed at: </span> Amazon <br />
                            <span style={{fontWeight: 'bold'}}>Salary: </span> 6 LPA <br />
                            <span style={{fontWeight: 'bold'}}>Passout Batch: </span> 2018  <br />
                            <span style={{fontWeight: 'bold'}}>Dept: </span> ECE  <br />
                        </p>
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </div>
            <div className='col-sm-6 col-md-3'>
                <Card style={{ width: '15rem' }} className='mx-auto'>
                    <Card.Img variant="top" src={std3} />
                    <Card.Body>
                        <Card.Title><kbd>Shyam Ghosh</kbd></Card.Title>
                        <Card.Text>
                        <p>
                            <span style={{fontWeight: 'bold'}}>Placed at: </span> TCS <br />
                            <span style={{fontWeight: 'bold'}}>Salary: </span> 5 LPA <br />
                            <span style={{fontWeight: 'bold'}}>Passout Batch: </span> 2019  <br />
                            <span style={{fontWeight: 'bold'}}>Dept: </span> EE  <br />
                        </p>
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </div>
            <div className='col-sm-6 col-md-3'>
                <Card style={{ width: '15rem' }} className='mx-auto'>
                    <Card.Img variant="top" src={std4} />
                    <Card.Body>
                        <Card.Title><kbd>Nila Saha</kbd></Card.Title>
                        <Card.Text>
                        <p>
                            <span style={{fontWeight: 'bold'}}>Placed at: </span> Cognizant <br />
                            <span style={{fontWeight: 'bold'}}>Salary: </span> 6 LPA <br />
                            <span style={{fontWeight: 'bold'}}>Passout Batch: </span> 2020  <br />
                            <span style={{fontWeight: 'bold'}}>Dept: </span> ME  <br />
                        </p>
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </div>

        </div>
    );
}

export default HighLights;