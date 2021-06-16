import '../../css/customcss2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import LevelOneMenuDetails from './LevelOneMenuDetails';

function Dashboard({selector}){
    // console.log(selector);
    const [levelOneSelectedMenu, setLevelOneSelectedMenu] = useState('dashboard');
    const one = () => {
        document.getElementById('dash').style.fontWeight = 'bolder';
        document.getElementById('routine').style.fontWeight = 'normal';
        document.getElementById('mentor').style.fontWeight = 'normal';
        setLevelOneSelectedMenu('dashboard');
    }
    const two = () => {
        document.getElementById('dash').style.fontWeight = 'normal';
        document.getElementById('routine').style.fontWeight = 'bolder';
        document.getElementById('mentor').style.fontWeight = 'normal';
        setLevelOneSelectedMenu('routine');
    }
    const three = () => {
        document.getElementById('dash').style.fontWeight = 'normal';
        document.getElementById('routine').style.fontWeight = 'normal';
        document.getElementById('mentor').style.fontWeight = 'bolder';
        setLevelOneSelectedMenu('mentor');
    }
    if(selector === 'home'){
        return(
            <>
                <ul className="nav nav-tabs nav-justified" style={{}} role="tablist">
                    <li className="nav-item">
                    <a className="nav-link" onClick={one} style={{fontWeight: 'bolder'}} id='dash' data-toggle="tab" href="#home">Dashboard</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" onClick={two} style={{fontWeight: ''}} id='routine' data-toggle="tab" href="#routine">Class Routine</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" onClick={three} style={{fontWeight: ''}} id='mentor' data-toggle="tab" href="#mentor">Mentor Details</a>
                    </li>
                </ul>
                <br />
                        <LevelOneMenuDetails levelOneSelectedMenu={levelOneSelectedMenu}/>
                <br />
                
            </>
        );
    }
    else if(selector === 'notice'){
        return(
            <>
            
                <h1>Student Notice Board</h1>
                <br /> <br />
                <div className="alert alert-success alert-dismissible">
                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                    <strong>Granted!</strong> Request for name spelling change has been granted. 
                </div>
                <div className="alert alert-info alert-dismissible">
                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                    <strong>Reminder!</strong> Special Class at 4:00 pm.
                </div>
                <div className="alert alert-warning alert-dismissible">
                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                    <strong>Attention!</strong> You are instructed to attend classes regularly.
                </div>
                <div className="alert alert-danger alert-dismissible">
                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                    <strong>Dismissed!</strong> False Certifications detected by mentor. Contact your mentor.
                </div>
            </>
        );
    }

    else if(selector === 'contact'){
        return(
            <>
                <h2 className='text-center mt-5'>Departmental Contacts</h2>
            </>
        );
    }
    else{
        return(
            <>
                <h3 className='text-bold mt-5 text-center'> <strong>
                    STUDENT PROFILE TRACKER 
                </strong> <br/> designed and implemented by Subhradeep Halder </h3>
            </>
        );
    }
    
}

export default Dashboard;