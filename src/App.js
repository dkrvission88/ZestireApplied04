// import logo from './logo.svg';
import './App.css';
import MainCJ from './Component1/MainCJ';
// import CandidateD from './Component1/CandidateD';
// import JobD from './Component1/JobD';



import {BrowserRouter ,Routes,Route} from 'react-router-dom'
// import Fewless from './Components/Fewless';
// import Asr from './Components/Asr';
import Main from './Components/Main';


function App() {
  return (
    <>

    {/* <BrowserRouter>

    <Main/>

    <Routes>
      <Route path='/' element={<Fewless/>}></Route>
      <Route path='/Asr' element={<Asr/>}></Route>


    </Routes>
    </BrowserRouter> */}





<BrowserRouter>



<Routes>
   <Route path='/' element={<Main/>}></Route>  
  <Route path='/MainCJ' element={<MainCJ/>}></Route>
 
  


</Routes>
  </BrowserRouter>  








    {/* <Main/> */}

    

    {/* <JobD/> */}

    {/* <CandidateD/> */}
    {/* <MainCJ/> */}

    
    </>
  );
}

export default App;
