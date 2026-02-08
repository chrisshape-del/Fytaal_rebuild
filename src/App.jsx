import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import ServicesOverview from './pages/ServicesOverview';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Approach from './pages/Approach';
import SchedulePage from './pages/SchedulePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="onze-aanpak" element={<Approach />} />


          {/* Main Navigation Pages */}
          <Route path="aanbod">
            <Route index element={<ServicesOverview />} />
            <Route path=":slug" element={<ServicePage />} />
          </Route>

          <Route path="team" element={<Team />} />
          <Route path="contact" element={<Contact />} />

          {/* Dedicated Rooster Page */}
          <Route path="rooster" element={<SchedulePage />} />

          <Route path="*" element={<div className="min-h-screen py-32 px-4 text-center"><h1 className="text-4xl text-primary font-bold">404</h1><p>Pagina niet gevonden</p></div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// Simple wrapper to force specific slug for top-level routes
const ServicePageWrapper = ({ slug }) => {
  return <ServicePage propSlug={slug} />;
};

export default App;
