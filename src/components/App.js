import Carousel from './home/MyCarousel';
import MyNav from './home/MyNav';
import MyFooter from './home/MyFooter';
import BodySectionOne from './home/StudentReviews';
import BodySectionTwo from './home/BestStudents';
import TrendingTechs from './home/TrendingTechs';


function App(){
    
    return(
        <>
            <div className='container-fluid' style={{}}>
                <MyNav />
                <Carousel /> <br /> <br /> <br />
                <BodySectionTwo /> <br /><br /><br /> <br />
                <TrendingTechs />
                <BodySectionOne /> <br /><br /><br />
                <MyFooter />
            </div>
            
        </>
    );
}

export default App;