import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import ServicesOverview from './pages/ServicesOverview';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Approach from './pages/Approach';
import SchedulePage from './pages/SchedulePage';

// Admin Imports
import Login from './admin/Login';
import ChangePassword from './admin/ChangePassword';
import AdminLayout from './admin/AdminLayout';
import Dashboard from './admin/Dashboard';
import PageEditor from './admin/PageEditor';
import CompanySettings from './admin/CompanySettings';
import { pageStructures } from './admin/pageStructures';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/baaslogin" element={<Login />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="change-password" element={<ChangePassword />} />
          <Route path="settings" element={<CompanySettings />} />

          {/* Generic Page Editors */}
          <Route path="pages/home" element={<PageEditor pageId="home" initialStructure={pageStructures.home} />} />
          <Route path="pages/aanbod" element={<PageEditor pageId="aanbod" initialStructure={pageStructures.aanbod} />} />
          <Route path="pages/team" element={<PageEditor pageId="team" initialStructure={pageStructures.team} />} />
          <Route path="pages/aanpak" element={<PageEditor pageId="aanpak" initialStructure={pageStructures.aanpak} />} />

          {/* Catch-all for admin */}
          <Route path="*" element={<Dashboard />} />
        </Route>

        {/* Public Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="onze-aanpak" element={<Approach />} />

          <Route path="aanbod">
            <Route index element={<ServicesOverview />} />
            <Route path=":slug" element={<ServicePage />} />
          </Route>

          <Route path="team" element={<Team />} />
          <Route path="contact" element={<Contact />} />
          <Route path="rooster" element={<SchedulePage />} />

          <Route path="*" element={<div className="min-h-screen py-32 px-4 text-center"><h1 className="text-4xl text-primary font-bold">404</h1><p>Pagina niet gevonden</p></div>} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

const ServicePageWrapper = ({ slug }) => {
  return <ServicePage propSlug={slug} />;
};

export default App;
