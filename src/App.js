import logo from './logo.svg';
import './App.css';

import { Home } from './pages/Home';
import { NavBar } from './components/NavBar'
import { Carrosel } from './components/home_components/Carrosel';
import { ProductCards } from './components/home_components/ProductCards'
import { TopSellers } from './components/home_components/TopSellers';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, {useState} from 'react';

export const LoginContext = React.createContext(false)

function App() {

  let [authenticated, setAuthenticated] = useState(false);
  let usuario = '';

  if (authenticated === true){
    usuario = 'João Victor'
  }

  console.log(authenticated)

  return (
    <LoginContext.Provider value={false}>
      <div>
        <NavBar authenticated={authenticated} setAuthenticated={setAuthenticated}/>
        <Carrosel/>
        <div className="container marketing">
        <ProductCards/>
        <hr className="featurette-divider"/>
        <TopSellers/>
        <hr className="featurette-divider"/>
        <TopSellers/>
        <hr className="featurette-divider"/>
        <TopSellers/>

        </div>

        <Footer/>
      </div>
    </LoginContext.Provider>
    
  )
}



export default App;
