import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Sidebar from './Sidebar'
import Home from './Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Books from './Books'
import Author from './Author'
import Update1 from './Update-book'
import Update2 from './Update-author'
import Create from './Create'

function App() {


  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/create' element={<Create />}></Route>
          <Route path='/updatebook/:id' element={<Update1 />}></Route>
          <Route path='/updateauthor/:id' element={<Update2 />}></Route>
          <Route path='/books' element={<Books />}></Route>
          <Route path='/author' element={<Author />}></Route>
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App
