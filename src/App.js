import './App.css';
import {Routes, Route} from 'react-router-dom';
import Sec from './component/secondpage/Sec';
import Firstpage from './component/firstpage/Firstpage';
import Th from './component/Thirdpage/Th';

function App() {
  return (
    <div className="App">
     <Routes>
     <Route exact path ="/" element={      <Firstpage />   }>    </Route>
     <Route exact path ="/Second" element={   <Sec />   }>    </Route>
     <Route exact path ="/Third" element={   <Th />   }>    </Route>

        </Routes>
    </div>
  );
}

export default App;
