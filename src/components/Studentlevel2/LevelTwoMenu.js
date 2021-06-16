import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import LevelTwoMenuDetails from './LevelTwoMenuDetails';

function Dashboarddetails({levelOneSelectedItem}){
  const [levelTwoSelectedMenu, setlevelTwoSelectedMenu] = useState('menu1')
  const one = () => {
    document.getElementById('menu1').style.fontWeight = 'bolder';
    document.getElementById('menu2').style.fontWeight = 'normal';
    document.getElementById('menu3').style.fontWeight = 'normal';
    setlevelTwoSelectedMenu('menu1');
}
const two = () => {
    document.getElementById('menu1').style.fontWeight = 'normal';
    document.getElementById('menu2').style.fontWeight = 'bolder';
    document.getElementById('menu3').style.fontWeight = 'normal';
    setlevelTwoSelectedMenu('menu2');
}
const three = () => {
    document.getElementById('menu1').style.fontWeight = 'normal';
    document.getElementById('menu2').style.fontWeight = 'normal';
    document.getElementById('menu3').style.fontWeight = 'bolder';
    setlevelTwoSelectedMenu('menu3');
}
  if(levelOneSelectedItem === ''){
    return(
      <>
      <br />
        <h3 style={{marginLeft: '20%'}}>Click any section for more details</h3>
      </>
    );
  }
  else if(levelOneSelectedItem === 'basicinfo'){
    return(
      <>
          <ul className="nav nav-tabs nav-justified" role="tablist">
              <li className="nav-item">
              <a className="nav-link" style={{fontWeight: 'bolder'}} onClick={one} id='menu1' data-toggle="tab" href="#menu1">Profile info</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" style={{fontWeight: ''}} onClick={two} id='menu2' data-toggle="tab" href="#menu2">Mentor</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" style={{fontWeight: ''}} onClick={three} id='menu3' data-toggle="tab" href="#menu3">Request/ Query</a>
              </li>
          </ul>
          <br /> <br />  
          <LevelTwoMenuDetails levelTwoSelectedMenu={levelTwoSelectedMenu} />
          
      </>
  );
  }
  else if(levelOneSelectedItem === 'moocs'){
    return(
      <>
      <br />
        <h3 style={{marginLeft: '38%'}}>MOOCS DETAILS</h3>
        <div className="container">
        <div className='row mt-5'>
          <div className='col-sm-10'></div>
          <div className='col-sm-2'>
            <button className='btn btn-primary' data-toggle="modal" data-target="#myModal">
              Add Item
            </button>
          </div>
        </div>

        <div className="list-group p-5">
          <div className="list-group-item list-group-item-action p-3">
            <span style={{fontSize: '28px', fontWeight: 'bolder'}}>Item Title</span> <br />
            <span>
              This is the description of this item.
            </span> <br />
            <span style={{fontWeight: 'bolder'}}>
              Certification link: <i>https://www.google.com/</i>
            </span>
            
          </div>
          <div className="list-group-item list-group-item-action list-group-item-info p-3">
            <span style={{fontSize: '28px', fontWeight: 'bolder'}}>Item Title</span> <br />
            <span>
              This is the description of this item.
            </span> <br />
            <span style={{fontWeight: 'bolder'}}>
              Certification link: <i>https://www.google.com/</i>
            </span>
          </div>
          <div className="list-group-item list-group-item-action p-3">
            <span style={{fontSize: '28px', fontWeight: 'bolder'}}>Item Title</span> <br />
            <span>
              This is the description of this item.
            </span> <br />
            <span style={{fontWeight: 'bolder'}}>
              Certification link: <i>https://www.google.com/</i>
            </span>
          </div>
          <div className="list-group-item list-group-item-action list-group-item-info p-3">
            <span style={{fontSize: '28px', fontWeight: 'bolder'}}>Item Title</span> <br />
            <span>
              This is the description of this item.
            </span> <br />
            <span style={{fontWeight: 'bolder'}}>
              Certification link: <i>https://www.google.com/</i>
            </span>
          </div>
        
        </div>
        
        </div>
        <div className="modal fade" id="myModal">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            
            
              <div className="modal-header">
                <h4 className="modal-title">MOOCs Form</h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>
              
            
              <div className="modal-body">
                  
                  <div className="form-group">
                    <label for="title">Title:</label>
                    <input type="text" className="form-control" id="title" placeholder="Enter Course Title" name="title" />
                  </div>
                  <div className="form-group">
                    <label for="desc">Description:</label>
                    <textarea id='desc' className='form-control' placeholder='Enter Course Descriptionn' name='desc' rows='5'>

                    </textarea>
                  </div>
                  <div className="form-group">
                    <label for="link">Certification Link:</label>
                    <input type="url" className="form-control" id="link" placeholder="Enter Certification Link" name="link" />
                  </div>
                  <button type='submit' className="btn btn-primary">Add Item</button>
                
              </div>
              
        
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
              
            </div>
          </div>
        </div>
      </>
    );
  }
  else if(levelOneSelectedItem === 'certificate'){
    return(
      <>
      <br />
        <h3 style={{marginLeft: '38%'}}>CERTIFICATIONS</h3>
        <div className="container">
        <div className='row mt-5'>
          <div className='col-sm-10'></div>
          <div className='col-sm-2'>
            <button className='btn btn-primary' data-toggle="modal" data-target="#myModal1">
              Add Item
            </button>
          </div>
        </div>

        <div className="list-group p-5">
          <div className="list-group-item list-group-item-action p-3">
            <span style={{fontSize: '28px', fontWeight: 'bolder'}}>Item Title</span> <br />
            {/* <span>
              This is the description of this item.
            </span> <br /> */}
            <span style={{fontWeight: 'bolder'}}>
              Certification link: <i>https://www.google.com/</i>
            </span>
            
          </div>
          <div className="list-group-item list-group-item-action list-group-item-info p-3">
            <span style={{fontSize: '28px', fontWeight: 'bolder'}}>Item Title</span> <br />
            {/* <span>
              This is the description of this item.
            </span> <br /> */}
            <span style={{fontWeight: 'bolder'}}>
              Certification link: <i>https://www.google.com/</i>
            </span>
          </div>
          <div className="list-group-item list-group-item-action p-3">
            <span style={{fontSize: '28px', fontWeight: 'bolder'}}>Item Title</span> <br />
            {/* <span>
              This is the description of this item.
            </span> <br /> */}
            <span style={{fontWeight: 'bolder'}}>
              Certification link: <i>https://www.google.com/</i>
            </span>
          </div>
          <div className="list-group-item list-group-item-action list-group-item-info p-3">
            <span style={{fontSize: '28px', fontWeight: 'bolder'}}>Item Title</span> <br />
            {/* <span>
              This is the description of this item.
            </span> <br /> */}
            <span style={{fontWeight: 'bolder'}}>
              Certification link: <i>https://www.google.com/</i>
            </span>
          </div>
        
        </div>
        
        </div>
        <div className="modal fade" id="myModal1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            
            
              <div className="modal-header">
                <h4 className="modal-title">Certification Form</h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>
              
            
              <div className="modal-body">
                  
                  <div className="form-group">
                    <label for="title">Title:</label>
                    <input type="text" className="form-control" id="title" placeholder="Enter Course Title" name="title" />
                  </div>
                  <div className="form-group">
                    <label for="certificate">Upload Certificate:</label>
                    <input type='file' className='form-control' id='certificate' name='certificate' />
                  </div>
                  <div className="form-group">
                    <label for="link">Certification Link:</label>
                    <input type="url" className="form-control" id="link" placeholder="Enter Certification Link" name="link" />
                  </div>
                  <button type='submit' className="btn btn-primary">Add Item</button>
                
              </div>
              
        
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
              
            </div>
          </div>
        </div>
      </>
    );
  }
  else if(levelOneSelectedItem === 'mar'){
    return(
      <>
      <br />
        <h3 style={{marginLeft: '38%'}}>MAR DETAILS</h3>
        <div className="container">
        <div className='row mt-5'>
          <div className='col-sm-10'></div>
          <div className='col-sm-2'>
            <button className='btn btn-primary' data-toggle="modal" data-target="#myModal2">
              Add Item
            </button>
          </div>
        </div>

        <div className="list-group p-5">
          <div className="list-group-item list-group-item-action p-3">
            <span style={{fontSize: '28px', fontWeight: 'bolder'}}>Item Title</span> <br />
            <span>
              This is the description of this item.
            </span> 
            {/* <br />
            <span style={{fontWeight: 'bolder'}}>
              Certification link: <i>https://www.google.com/</i>
            </span> */}
            
          </div>
          <div className="list-group-item list-group-item-action list-group-item-info p-3">
            <span style={{fontSize: '28px', fontWeight: 'bolder'}}>Item Title</span> <br />
            <span>
              This is the description of this item.
            </span> 
            {/* <br />
            <span style={{fontWeight: 'bolder'}}>
              Certification link: <i>https://www.google.com/</i>
            </span> */}
          </div>
          <div className="list-group-item list-group-item-action p-3">
            <span style={{fontSize: '28px', fontWeight: 'bolder'}}>Item Title</span> <br />
            <span>
              This is the description of this item.
            </span> 
            {/* <br />
            <span style={{fontWeight: 'bolder'}}>
              Certification link: <i>https://www.google.com/</i>
            </span> */}
          </div>
          <div className="list-group-item list-group-item-action list-group-item-info p-3">
            <span style={{fontSize: '28px', fontWeight: 'bolder'}}>Item Title</span> <br />
            <span>
              This is the description of this item.
            </span> 
            {/* <br />
            <span style={{fontWeight: 'bolder'}}>
              Certification link: <i>https://www.google.com/</i>
            </span> */}
          </div>
        
        </div>
        
        </div>
        <div className="modal fade" id="myModal2">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            
            
              <div className="modal-header">
                <h4 className="modal-title">MAR Form</h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>
              
            
              <div className="modal-body">
                  
                  <div className="form-group">
                    <label for="title">Title:</label>
                    <input type="text" className="form-control" id="title" placeholder="Enter Title" name="title" />
                  </div>
                  <div className="form-group">
                    <label for="desc">Description:</label>
                    <textarea id='desc' className='form-control' placeholder='Enter Descriptionn' name='desc' rows='5'>

                    </textarea>
                  </div>
                  <div className="form-group">
                  <label for="proof">Proof (image):</label>
                    <input type='file' className='form-control' id='proof' name='proof' />
                  </div>
                  <button type='submit' className="btn btn-primary">Add Item</button>
                
              </div>
              
        
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
              
            </div>
          </div>
        </div>
      </>
    );
  }
  else if(levelOneSelectedItem === 'projects'){
    return(
      <>
      <br />
        <h3 style={{marginLeft: '38%'}}>Completed Projects</h3>
        <div className="container">
        <div className='row mt-5'>
          <div className='col-sm-10'></div>
          <div className='col-sm-2'>
            <button className='btn btn-primary' data-toggle="modal" data-target="#myModal3">
              Add Item
            </button>
          </div>
        </div>

        <div className="list-group p-5">
          <div className="list-group-item list-group-item-action p-3">
            <span style={{fontSize: '28px', fontWeight: 'bolder'}}>Project Name</span> <br />
            <span>
              This is the description of this Project.
            </span> <br />
            <span style={{fontWeight: 'bolder'}}>
              Project link: <i>https://www.google.com/</i>
            </span>
            
          </div>
          <div className="list-group-item list-group-item-action list-group-item-info p-3">
            <span style={{fontSize: '28px', fontWeight: 'bolder'}}>Project Name</span> <br />
            <span>
              This is the description of this Project.
            </span> <br />
            <span style={{fontWeight: 'bolder'}}>
              Project link: <i>https://www.google.com/</i>
            </span>
          </div>
          <div className="list-group-item list-group-item-action p-3">
            <span style={{fontSize: '28px', fontWeight: 'bolder'}}>Project Name</span> <br />
            <span>
              This is the description of this Project.
            </span> <br />
            <span style={{fontWeight: 'bolder'}}>
              Project link: <i>https://www.google.com/</i>
            </span>
          </div>
          <div className="list-group-item list-group-item-action list-group-item-info p-3">
            <span style={{fontSize: '28px', fontWeight: 'bolder'}}>Project Name</span> <br />
            <span>
              This is the description of this Project.
            </span> <br />
            <span style={{fontWeight: 'bolder'}}>
              Project link: <i>https://www.google.com/</i>
            </span>
          </div>
        
        </div>
        
        </div>
        <div className="modal fade" id="myModal3">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            
            
              <div className="modal-header">
                <h4 className="modal-title">Completed Projects Form</h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>
              
            
              <div className="modal-body">
                  
                  <div className="form-group">
                    <label for="title">Project Name:</label>
                    <input type="text" className="form-control" id="title" placeholder="Enter Project Name" name="title" />
                  </div>
                  <div className="form-group">
                    <label for="desc">Description:</label>
                    <textarea id='desc' className='form-control' placeholder='Enter Project Descriptionn' name='desc' rows='5'>

                    </textarea>
                  </div>
                  <div className="form-group">
                    <label for="prj_link">Project Link:</label>
                    <input type="url" className="form-control" id="prj_link" placeholder="Enter Project Link" name="prj_link" />
                  </div>
                  <button type='submit' className="btn btn-primary">Add Item</button>
                
              </div>
              
        
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
              
            </div>
          </div>
        </div>
      </>
    );
  }
  else if(levelOneSelectedItem === 'resume'){
    return(
      <>
      <br />
        <h3 style={{marginLeft: '32%'}}>Upload Resume/ CV</h3>
        <div className="form-group mt-5" style={{marginLeft: '15%', marginRight: '17%'}}> 
            <label for="proof" className='font-weight-bold'>Upload Resume/ CV:</label>
            <input type='file' className='form-control' id='proof' name='proof' />
        </div>
      </>
    );
  }
  
    
}

export default Dashboarddetails;