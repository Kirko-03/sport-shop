import './App.css';
import { Header } from './components/Header/Header';
import {Main} from './components/Header/Main'
import { Routes,Route} from 'react-router-dom';
import { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '.';
import { Loading } from './components/Loading';



function App() {
  const auth = useContext(Context)
  const [user,loading] = useAuthState(auth)
  return (
    <div className={loading?"Loading":''}>
    {!loading?<div className="App">
      
      <Header/>
     {user?<Routes>
      <Route path='/' element={ <div>Home</div>} />
      <Route path='/Creatin' element={ <div>Creatin</div>} />
      <Route path='/BCA' element={ <div>BCA</div>} />
      <Route path='/Protain' element={ <div>Protain</div>} />
      <Route path='/' element={ <div><Main/></div>} />
      
     </Routes>:<Routes><Route path='/' element={ <div><Main/></div>} /></Routes>
     
     }
     
    </div>:<Loading/>}
    </div>
  );
}

export default App;
