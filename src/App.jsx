import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Programs from './pages/Programs';
import About from './pages/About';
import Math from './pages/Math';
import Science from './pages/Science';
import TRPG from './pages/TRPG';
import Assessment from './pages/Assessment';
import AssessmentBooking from './pages/AssessmentBooking';
import Schedule from './pages/Schedule';
import News from './pages/News';
import ScheduleManagement from './pages/admin/ScheduleManagement';
import AssessmentManagement from './pages/admin/AssessmentManagement';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/about" element={<About />} />
          <Route path="/math" element={<Math />} />
          <Route path="/science" element={<Science />} />
          <Route path="/trpg" element={<TRPG />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/assessment/booking" element={<AssessmentBooking />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/news" element={<News />} />
          <Route path="/admin/schedule" element={<ScheduleManagement />} />
          <Route path="/admin/assessment" element={<AssessmentManagement />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;