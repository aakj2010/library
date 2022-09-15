import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './css/sb-admin-2.css';
import Portal from './Component/Portal';
import Member from './Component/Member';
import Books from './Component/Books';
import MemberView from './Component/MemberView';
import BookView from './Component/BookView';
import CreateMember from './Component/CreateMember';
import EditMember from './Component/EditMember';
import EditBook from './Component/EditBook';
import CreateBook from './Component/CreateBook';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portal />} >
            {/* Member */}
            <Route path='members' element={<Member />} />
            <Route path='create-member' element={<CreateMember />} />
            <Route path='members/:id' element={<MemberView />} />
            <Route path='members/edit/:id' element={<EditMember />} />

            // {/* Books */}
            <Route path='books' element={<Books />} />
            <Route path='create-books' element={<CreateBook />} />
            <Route path='books/:id' element={<BookView />} />
            <Route path='books/edit/:id' element={<EditBook />} />

          </ Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
