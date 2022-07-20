import logo from './logo.svg';
import './App.css';
import Navbarr from './Components/Navbarr'
import Question from './Components/Question'
import Home from './Components/Home'
import Users from './Components/Users'
import About from './Components/About'
// import ToDo from './Components/ToDo';
import Login from './Components/Login'
import {BrowserRouter as Router,Route, Routes,Link} from "react-router-dom"


function App() {
  const question = [
    {
      "error": "Q1:  تحميل رياكت",
      "sol": "باستخدام الامر 'create-react-app'",
      "img": "https://camo.githubusercontent.com/29765c4a32f03bd01d44edef1cd674225e3c906b/68747470733a2f2f63646e2e7261776769742e636f6d2f66616365626f6f6b2f6372656174652d72656163742d6170702f323762343261632f73637265656e636173742e737667",
      
    },
    {
      "error": "Q2:  تحميل ريكات بوتسراب",
      "sol": "باستخدام الامر  'npm install react-bootstrap bootstrap'",
      "img": "https://www.tutorialandexample.com/wp-content/uploads/2019/12/React-Bootstrap-Installation-2.png",
      
    },
    {
      "error": "Q3  React Router: كيفية تحميل التوجيه في  ",
      "sol": "باستخدام الامر'npm install react-bootstrap bootstrap'",
      "img": "https://www.arabicprogrammer.com/images/72/313154e8beb9ee34c38603d99d7451a0.png",
      
    },
    {
      "error": "Q3  React Router: كيفية تحميل التوجيه في  ",
      "sol": "باستخدام الامر'npm install react-bootstrap bootstrap'",
      "img": "https://www.arabicprogrammer.com/images/72/313154e8beb9ee34c38603d99d7451a0.png",
      
    }
  ]
  // const users = [
  //   {
  //     "user": "john",
  //     "more": "anything",
  //     "img": "",
  //   },
  //   {
  //     "user": "john",
  //     "more": "anything",
  //     "img": "",
  //   }
  // ]
  return (
    <div className="App" >
  <Navbarr/>
      {/* <Question props = {question}/> */}



      <>
    
    <Router>
      <Link to="/Home">Home</Link>
      <Link to="/Users">Users</Link>
      <Link to="/About">About</Link>
      <Link to="/">Login</Link>
      
      <Link to="/Question">question</Link>
      <Routes>
      <Route path='Users' element={<Users/>} ></Route>
      <Route path='Home' element={<Home/>} ></Route>
      
      
      <Route path='About' element={<About/>} ></Route>
      <Route path='/' element={<Login/>} ></Route>
      {/* <Route path='/' element={<Navbarr/>}></Route>   */}
      <Route path='Question' element={<Question props={question}/>}></Route> 
      

      </Routes>
    </Router>
  
  </>

  </div>
 
  );
}

export default App;
