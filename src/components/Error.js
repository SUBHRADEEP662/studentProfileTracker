import {NavLink} from 'react-router-dom';

function Error(){
    return(
        <>
            <h1 style={{textAlign: 'center'}}> 
                This page does not exist. <br />
                Rather go to <NavLink to='/'>HOME</NavLink>
            </h1>
        </>
    );
}

export default Error;