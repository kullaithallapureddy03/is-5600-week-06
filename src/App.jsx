import productData from './data/full-products';
import Header from './components/Header'
import CardList from './components/CardList';
import SingleView from './components/SingleView';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element= { <CardList data={productData} />} />
        <Route path="/product/:id" element={<SingleView data={productData} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
