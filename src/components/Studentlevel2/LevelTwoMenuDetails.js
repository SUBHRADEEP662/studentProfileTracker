
function LevelTwoMenuDetails({levelTwoSelectedMenu}){
    if(levelTwoSelectedMenu === ''){
        return(
            <>
                <div className='font-weight-bold text center'>
                    Please Select any menu item
                </div>
            </>
        );
    }
    else if(levelTwoSelectedMenu === 'menu1'){
        return(
            <>
                <table className="table table-hover">
                    <tbody>
                        <tr>
                        <th>Firstname</th>
                        <td>Subhradeep</td>
                        <td><button className='btn btn-primary btn-sm' style={{borderRadius: '25px'}}>Request Update</button></td>
                        </tr>
                        <tr>
                        <th>Lastname</th>
                        <td>Halder</td>
                        <td><button className='btn btn-primary btn-sm' style={{borderRadius: '25px'}}>Request Update</button></td>
                        </tr>
                        <tr>
                        <th>Reg no.</th>
                        <td>182810110040</td>
                        <td><button className='btn btn-primary btn-sm' style={{borderRadius: '25px'}}>Request Update</button></td>
                        </tr>
                        <tr>
                        <th>Roll no.</th>
                        <td>28100118023</td>
                        <td><button className='btn btn-primary btn-sm' style={{borderRadius: '25px'}}>Request Update</button></td>
                        </tr>
                        <tr>
                        <th>Contact no:</th>
                        <td>9477926665</td>
                        <td><button className='btn btn-primary btn-sm' style={{borderRadius: '25px'}}>Request Update</button></td>
                        </tr>
                    </tbody>
                </table>
            </>
        );
    }
    else if(levelTwoSelectedMenu === 'menu2'){
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
    else if(levelTwoSelectedMenu === 'menu3'){
        return(
            <>
            <div>
            <div className="form-group mt-5" style={{marginLeft: '15%', marginRight: '17%'}}> 
            <label for="proof" className='font-weight-bold'>Topic:</label>
            <input type='text' className='form-control' id='proof' name='proof' />
            </div>
            <div className="form-group" style={{marginLeft: '15%', marginRight: '17%'}}> 
            <label for="proof2" className='font-weight-bold'>Description</label>
            <textarea className='form-control' rows='5'>

            </textarea>
            </div>
            <div>
                <button className='btn btn-primary float-right' style={{marginRight: '17%'}}>Send to mentor</button>
            </div>
            </div>
            </>
        );
    }
}

export default LevelTwoMenuDetails;