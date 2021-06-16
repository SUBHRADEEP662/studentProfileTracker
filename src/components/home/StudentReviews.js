import std5 from '../../img/std5.jpg';
import std6 from '../../img/std6.jpg';
import std7 from '../../img/std7.jpg';
import std8 from '../../img/std8.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';

function Latest(){
    return(
        <div className='container text-center'>
             <br /> <br /> <br />
            <div className='row'>
                <div className='col bg-in' style={{}}>
                    <Card style={{}}>
                        <Card.Img variant="top" src={std5} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                <p>This is my review for Gargi Memorial Institute of Technology</p>
                                <footer class="blockquote-footer float-right">Gopi Nath</footer>
  
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </div>

                <div className='col bg-prima' style={{}}>
                    <Card style={{}}>
                        <Card.Img variant="top" src={std6} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            <p>This is my review for Gargi Memorial Institute of Technology</p>
                                <footer class="blockquote-footer float-right">Gopi Nath</footer>
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </div>
            {/* </div> */}

            {/* <div className='row'> */}
                <div className='col bg-warni' style={{}}>
                    <Card style={{}}>
                        <Card.Img variant="top" src={std7} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            <p>This is my review for Gargi Memorial Institute of Technology</p>
                                <footer class="blockquote-footer float-right">Gopi Nath</footer>
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </div>

                <div className='col bg-in' style={{}}>
                    <Card style={{}}>
                        <Card.Img variant="top" src={std8} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            <p>This is my review for Gargi Memorial Institute of Technology</p>
                                <footer class="blockquote-footer float-right">Gopi Nath</footer>
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Latest;