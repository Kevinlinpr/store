import logo from './logo.svg';
import './App.css';

import GalleryScroller from 'gallery-scroller';
import {
  Rec_1,
  Rec_2,
  Rec_3,
  Rec_4,
  Rec_5
} from './assets'


const resourcespropsList = [
  {
    img: Rec_1,
    marker: 'Game',
    color: '#00b8d4',
    onClick: ()=>{
      console.log("go to location.");
    }
  },
  {
    img: Rec_2,
    marker: 'Game',
    color: '#00b8d4',
    onClick: ()=>{
      console.log("go to location.");
    }
  },
  {
    img: Rec_3,
    marker: 'Game',
    color: '#00b8d4',
    onClick: ()=>{
      console.log("go to location.");
    }
  },
  {
    img: Rec_4,
    marker: 'Game',
    color: '#00b8d4',
    onClick: ()=>{
      console.log("go to location.");
    }
  }
]


function App() {
  return (
    <div className="App">
      <div
        style={{
          display:'flex',
          width:'100vw',
          justifyContent:'center',
          marginTop:'16px'
        }}
      >
        <GalleryScroller list={resourcespropsList}/>
      </div>
    </div>
  );
}

export default App;
