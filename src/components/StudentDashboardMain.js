import '../css/customcss1.css';
import Dashboard from './Studentlevel1/LevelOneMenu';
import {useState} from 'react';

function StudentDashBoard(){
    const [selector, setSelector] = useState("home")

    const fun1 = (event) => {
        event.target.className = 'active';
        document.getElementById("two").className = "";
        document.getElementById("three").className = "";
        document.getElementById("four").className = "";
        setSelector('home');
    }
    const fun2 = (event) => {
        event.target.className = 'active';
        document.getElementById("one").className = "";
        document.getElementById("three").className = "";
        document.getElementById("four").className = "";
        setSelector('notice')
    
    }
    const fun3 = (event) => {
        event.target.className = 'active';
        document.getElementById("one").className = "";
        document.getElementById("two").className = "";
        document.getElementById("four").className = "";
        setSelector('contact');
    }
    const fun4 = (event) => {
        event.target.className = 'active';
        document.getElementById("one").className = "";
        document.getElementById("two").className = "";
        document.getElementById("three").className = "";
        setSelector('about');
    }
    return(
        <>
        <div className='container mt-3'>
            <div className="sidebar">
                {/* <Button className='form-control'>Hi there</Button> */}
                <a id='one' className="active" onClick={fun1} href="#home"> <i className="fa fa-home"></i> Home  </a>
                <a id='two' className='' onClick={fun2} href="#notice"> <i className="fa fa-newspaper-o"></i> Notice board </a>
                <a id='three' className='' onClick={fun3} href="#phone"> <i className="fa fa-phone"></i> Contact </a>
                <a id='four' className='' onClick={fun4} href="#about"> <i className="fa fa-user"></i> About </a>
                
            </div>
            <div className="content" id='content' style={{}}>
                <Dashboard selector={selector}/>
            </div>
        </div>
        </>
    );
}

export default StudentDashBoard;