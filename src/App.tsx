import './App.css';
import { Header } from './components/Header/Header';
import {Main} from './components/Header/Main'
import { Routes,Route} from 'react-router-dom';
import { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '.';



function App() {
  const auth = useContext(Context)
  const [user] = useAuthState(auth)
  return (
    <div className="App">
      
      <Header/>
     {user?<Routes>
      <Route path='/' element={ <div>Home</div>} />
      <Route path='/Creatin' element={ <div>Creatin</div>} />
      <Route path='/BCA' element={ <div>BCA</div>} />
      <Route path='/Protain' element={ <div>Protain</div>} />
      <Route path='/' element={ <div><Main/></div>} />
      
     </Routes>:<Routes><Route path='/' element={ <div><Main/></div>} /></Routes>
     
     }
    </div>
  );
}

export default App;
