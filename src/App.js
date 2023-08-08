import logo from './logo.svg';
import './App.css';
import Data from './Components/Data';
import { useState } from 'react';
import './Components/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [catagory, setCatagory] = useState('all');

  const catagoryclick = (catagory) => {
    setCatagory(catagory);
  }

  const filterData = catagory === 'all' ? Data : Data.filter(v => v.catagory === catagory);
  return (
    <>
      <div className="center-container">
        <div className="button-container">
          <center>
            <h2>Cake Shop</h2>
            <p className='mb-4'>Delectably delicious in every layers! Happiness in every slice.</p>
            <button onClick={() => catagoryclick('pound')} className='mb-5'>Pound cake</button>
            <button onClick={() => catagoryclick('sponge')}>Sponge Cake</button>
            <button onClick={() => catagoryclick('biscuit')}>Biscuit Cake</button>
            <button onClick={() => catagoryclick('all')}>All</button>
          </center>
        </div>
      
          <div className='container'>
            <div className='row'>
              {filterData.map((v) => {
                const { name, price, desc, catagory, image } = v;
                return (
                  <div className="card w-33" key={name}> 
                    <img src={image} width={200} height={150} className="card-img-top"/>
                    <div className="card-body">
                      <h5 className="card-title">{name}</h5>
                      <p className="card-text">{desc}</p>
                      <a href="#" className="btn btn-primary">{price}</a>
                    </div>
                  </div>
                );
              })}
            </div>
            </div>
      </div>
    </>
  );
}

export default App;
