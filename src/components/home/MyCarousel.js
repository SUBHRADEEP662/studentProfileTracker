import img1 from '../../img/gmit1.jpg';
// import img2 from '../../img/gmit2.jpg';
// import img3 from '../../img/gmit3.jpg';
import '../../css/customcss4.css';

function MyCarousel() {
    return(
        <>
        <div className='container-fluid'>
          <div class="jumbotron mr-5 ml-5">
            {/* <h1 style={{textAlign: 'center'}}>Student profile tracker</h1>       */}
            <img src={img1} alt="" style={{maxHeight: '400px'}} width='100%'/>
            </div>   
        </div>
        </>
    );
}
export default MyCarousel;