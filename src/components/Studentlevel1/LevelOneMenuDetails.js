import '../../css/customcss2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LevelTwoMenu from '../Studentlevel2/LevelTwoMenu.js';
import {useState} from 'react';

function Levelonedash({levelOneSelectedMenu}){
    const [levelOneSelectedItem, setLevelOneSelectedItem] = useState("basicinfo");
    const basicinfo = () => {
        setLevelOneSelectedItem('basicinfo');
    }
    const moocs = () => {
        setLevelOneSelectedItem('moocs');
    }
    const certificate = () => {
        setLevelOneSelectedItem('certificate');
    }
    const mar = () => {
        setLevelOneSelectedItem('mar');
    }
    const projects = () => {
        setLevelOneSelectedItem('projects');
    }
    const resume = () => {
        setLevelOneSelectedItem('resume');
    }
    
    if(levelOneSelectedMenu === 'dashboard'){
        return(
            <>
                <div className=''>
                        <div className="row text-center">
        
                    <div className="col p-1">
                        <button style={{borderColor: 'white'}} onClick={basicinfo} className="shadow-box-example shadow-lg">

                            Update Basic Info
                            
                        </button>
                    </div>
        
                    <div className="col p-1">
                        <button style={{borderColor: 'white'}} onClick={moocs} className="shadow-box-example shadow-lg">

                            MOOCS Courses
        
                        </button>
                    </div>
        
                    <div className="col p-1">
                        <button style={{borderColor: 'white'}} onClick={certificate} className="shadow-box-example shadow-lg">
        
                            Certifications
                            
                        </button>
                    </div>
                    <div className="col p-1">
                        <button style={{borderColor: 'white'}} onClick={mar} className="shadow-box-example shadow-lg">
                            MAR Activities
                        </button>
                    </div>
        
                    <div className="col p-1">
                        <button style={{borderColor: 'white'}} onClick={projects} className="shadow-box-example shadow-lg">
                            
                            Completed Projects
                            
                        </button>
                    </div>
        
                    <div className="col p-1">
                        <button style={{borderColor: 'white'}} onClick={resume} className="shadow-box-example shadow-lg">
                        Upload Resume/ CV
                        </button>
                    </div>
        
                    </div>
                    <br />
        
                    <div className="row text-center m-1">
        
                    
        
                    </div>
                    </div>
                    <br /> <br />
                    <div style={{paddingLeft: '5%', paddingRight: '5%'}}>
                    <br /> <br /> 
                    <LevelTwoMenu levelOneSelectedItem={levelOneSelectedItem}/>
                </div>
            </>
        );
    }
    else if(levelOneSelectedMenu === 'routine'){
        return(
            <>
                <h1 className='mt-4 mb-5'> Class Routine</h1>
                <table className="table table-hover">
                    <tbody>
                    <tr>
                        <th>Tuesday</th>
                        <td>Subject 1</td>
                        <td>Subject 2</td>
                        <td>Subject 3</td>
                        <td>Subject 4</td>
                    </tr>
                    <tr>
                        <th>Wednesday</th>
                        <td>Subject 1</td>
                        <td>Subject 2</td>
                        <td>Subject 3</td>
                        <td>Subject 4</td>
                    </tr>
                    <tr>
                        <th>Thursday</th>
                        <td>Subject 1</td>
                        <td>Subject 2</td>
                        <td>Subject 3</td>
                        <td>Subject 4</td>
                    </tr>
                    <tr>
                        <th>Friday</th>
                        <td>Subject 1</td>
                        <td>Subject 2</td>
                        <td>Subject 3</td>
                        <td>Subject 4</td>
                    </tr>
                    <tr>
                        <th>Saturday</th>
                        <td>Subject 1</td>
                        <td>Subject 2</td>
                        <td>Subject 3</td>
                        <td>Subject 4</td>
                    </tr>
                    </tbody>
                </table>
            </>
        );
    }
    else{
        return(
            <>
                <div className='row mt-5'>
                    <div className='col-sm-4 text-center font-weight-bold'>
                        <span style={{fontSize: '20px'}}>
                            Mentor Name
                        </span>
                    </div>
                    <div className='col-sm-4 text-center font-weight-bold'>
                        <span style={{fontSize: '20px'}}>
                            Mentor contact number
                        </span>
                    </div>
                    <div className='col-sm-4 text-center font-weight-bold'>
                        <span style={{fontSize: '20px'}}>
                            <button className='btn btn-primary'>
                                Request update
                            </button>
                        </span>
                    </div>
                </div>
            </>
        );
    }
    
}

export default Levelonedash;