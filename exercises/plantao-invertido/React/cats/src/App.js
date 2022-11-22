import React from 'react';
import data,{names} from './data';
import CatList from './Componentes/CatList';
import './App.css'

class App extends React.Component {
  render(){
    return (
      <div>
        <CatList data={data} names={names}/>
      </div>
    )
  }
}

export default App
