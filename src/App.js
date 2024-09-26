import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddList from './pages/AddList';
import DeleteForm from './pages/DeleteForm';
import ItemGuest from './pages/ItemGuest';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* 어디부터 어디까지가 여기다 하는 곳 (여러 페이지인척하지만 사실은 한페이지에 쫘라락) */}
          <Route path='/addlist' element={<AddList />} />
          <Route path='/deleteform' element={<DeleteForm />} />
          <Route path='/itemguest' element={<ItemGuest />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
