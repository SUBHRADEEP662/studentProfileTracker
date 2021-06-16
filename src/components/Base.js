import {Route, Switch} from 'react-router-dom';
import App from './App';
import Error from './Error';
import StudentDashboardMain from './StudentDashboardMain';
import MentorDashboardMain from './MentorDashboardMain'

function Base(){
    return(
        <>
            <Switch>
                <Route exact path='/' render={()=><App />} />
                <Route exact path='/student' render={()=><StudentDashboardMain />} />
                <Route exact path='/mentor' render={()=><MentorDashboardMain />} />
                <Route exact path='/studentProfileTracker' render={()=><App />} />
                <Route render={Error} />
            </Switch>
        </>
    );
}
export default Base;