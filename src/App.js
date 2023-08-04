import { Route, Routes } from 'react-router-dom';
import PublicPage from './public/PublicPage';
import PersonalPage from './personal/PersonalPage';
import CompanyPage from './company/CompanyPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicPage />} />
      <Route path="/public" element={<PublicPage />} />
      <Route path="/personal" element={<PersonalPage />} />
      <Route path="/company" element={<CompanyPage />} />
    </Routes>
  );
}

export default App;
