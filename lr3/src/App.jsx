import { Routes, Route, Navigate } from 'react-router-dom';

import { Homepage } from './pages/Homepage';
import { About } from './pages/Aboutpage';
import { Blogpage } from './pages/Blogpage';
import { Contacts } from './pages/ContactsPage';
import { Notfoundpage } from './pages/Notfoundpage';

import { Layout } from './components/Layout'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />}>
          </Route>
          <Route path="Contacts" element={<Contacts />}></Route>
          <Route path="about-us" element={<Navigate to="/about" replace />} />
          <Route path="posts" element={<Blogpage />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
  );
}

export default App;
