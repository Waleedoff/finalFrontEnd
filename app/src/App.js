import logo from './logo.svg';
import './App.css';
import Navbarr from './Components/Navbarr'
import Question from './Components/Question'

function App() {
  const question = [
    {
      "error": "react install",
      "sol": "write in the termianl 'create-react-app'",
      "img": "https://camo.githubusercontent.com/29765c4a32f03bd01d44edef1cd674225e3c906b/68747470733a2f2f63646e2e7261776769742e636f6d2f66616365626f6f6b2f6372656174652d72656163742d6170702f323762343261632f73637265656e636173742e737667",
      "ref": "react.doucmentation.com"
    },
    {
      "error": "install react-bootstrap ",
      "sol": "write in the termianl 'npm install react-bootstrap bootstrap'",
      "img": "https://www.tutorialandexample.com/wp-content/uploads/2019/12/React-Bootstrap-Installation-2.png",
      "ref": "react.doucmentation.com"
    },
    {
      "error": "install react-bootstrap ",
      "sol": "write in the termianl 'npm install react-bootstrap bootstrap'",
      "ref": "react.doucmentation.com"
    }
  ]
  return (
    <div className="App" >
      <Navbarr/>
      <Question props = {question}/>
    </div>
  );
}

export default App;
