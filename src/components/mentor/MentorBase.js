import React, {useState} from 'react';
import '../../css/customcss3.css';

function MentorBase(){
    const [selection, setSelection] = useState("");
    const mouseEnter = (event) => {
        event.target.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 1), 0 6px 20px 0 rgba(0, 0, 0, 2)";
    }
    const mouseOut = (event) => {
        event.target.style.boxShadow = "";
    }
    const clicked = (event) => {
        setSelection(event.target.id);
        console.log(selection);
    }
    return(
        <>
            <div className='container p-3 mt-5' style={{borderColor: 'rgb(77, 210, 255)', borderStyle: 'solid', borderRadius: '20px'}}>
                <span className='float-right text-primary' style={{fontWeight: 'bolder', fontSize: "130%"}}>
                    WELCOME Mentor Name <br /> {selection}
                </span>
                <br /> <br /> <br />
                <div className='row text-center'>
                    <div className='col'>
                        <button id='mock' onClick={clicked} onMouseEnter={mouseEnter} onMouseOut={mouseOut} className='btn btn-dim boxContent m-2 p-3 btn-shadow font-weight-bold text-light'>Mock Test Score</button>
                    </div>
                    <div className='col'>
                        <button id='webinar' onClick={clicked} onMouseEnter={mouseEnter} onMouseOut={mouseOut} className='btn btn-dim boxContent m-2 p-3 btn-shadow font-weight-bold text-light'>Webinar Arrangement</button>
                    </div>
                    <div className='col'>
                        <button id='class' onClick={clicked} onMouseEnter={mouseEnter} onMouseOut={mouseOut} className='btn btn-dim boxContent m-2 p-3 btn-shadow font-weight-bold text-light'>special class arrangement</button>
                    </div>
                    <div className='col'>
                        <button id='attendance' onClick={clicked} onMouseEnter={mouseEnter} onMouseOut={mouseOut} className='btn btn-dim boxContent m-2 p-3 btn-shadow font-weight-bold text-light'>Attendance Tracker</button>
                    </div>
                    <div className='col'>
                        <button id='mar' onClick={clicked} onMouseEnter={mouseEnter} onMouseOut={mouseOut} className='btn btn-dim boxContent m-2 p-3 btn-shadow font-weight-bold text-light'>MAR verification</button>
                    </div>
                </div>
                <br />
                <div className='row text-center'>
                <div className='col'>
                        <button id='performance' onClick={clicked} onMouseEnter={mouseEnter} onMouseOut={mouseOut} className='btn btn-dim boxContent m-2 p-3 btn-shadow font-weight-bold text-light'>Performance Evaluation</button>
                    </div>
                <div className='col'>
                        <button id='mentees' onClick={clicked} onMouseEnter={mouseEnter} onMouseOut={mouseOut} className='btn btn-dim boxContent m-2 p-3 btn-shadow font-weight-bold text-light'>MENTEES Monitoring</button>
                    </div>
                    <div className='col'>
                        <button id='project' onClick={clicked} onMouseEnter={mouseEnter} onMouseOut={mouseOut} className='btn btn-dim boxContent m-2 p-3 btn-shadow font-weight-bold text-light'>Project Tracker</button>
                    </div>
                    <div className='col'>
                        <button id='moocs' onClick={clicked} onMouseEnter={mouseEnter} onMouseOut={mouseOut} className='btn btn-dim boxContent m-2 p-3 btn-shadow font-weight-bold text-light'>MOOCS verification</button>
                    </div>
                    <div className='col'>
                        <button id='placement' onClick={clicked} onMouseEnter={mouseEnter} onMouseOut={mouseOut} className='btn btn-dim boxContent m-2 p-3 btn-shadow font-weight-bold text-light'>Placement Tracker</button>
                    </div>
                </div>
                <br /> <br />
                
            </div>
        </>
    );
}

export default MentorBase;