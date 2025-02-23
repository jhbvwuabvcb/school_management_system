// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ChooseUser from './components/ChooseUser';
import AdminSignIn from './components/AdminSignin';
import StudentSignIn from './components/StudentSignin';
import TeacherSignIn from './components/TeacherSignin';

import AdminDashboard from './pages/Admin/Dashboard';
import StudentDashboard from './pages/Students/Dashboard';
import TeacherDashboard from './pages/Teachers/Dashboard';


import Classes from './pages/Admin/Classes';
import Exam from './pages/Admin/Exam';
import Attendance from './pages/Admin/Attendance';
import Performance from './pages/Admin/Performance';
import Teachers from './pages/Admin/Teachers';
import Student from './pages/Admin/Student';
import Assignment from './pages/Admin/Assignment';
import Liabrary from './pages/Admin/Liabrary';
import Announcement from './pages/Admin/Announcement';
import EventCalender from './pages/Admin/EventCalender';
import SettingProfile from './pages/Admin/SettingProfile';


import StudentAssignment from './pages/Students/Assignment';
import ExamsSection from './pages/Students/Exams';
import PerformanceSection from './pages/Students/Performance';
import AttendanceSection from './pages/Students/Attendance';
import LibrarySection from './pages/Students/Library';
import AnnouncementSection from './pages/Students/Announcement';
import ProfileSection from './pages/Students/Profile';


import ClassSection from './pages/Teachers/Classes';
import StudentSection from './pages/Teachers/Students';
import TeacherSection from './pages/Teachers/Teachers';
import CheckPerformanceSection from './pages/Teachers/Performance';
import EventSection from './pages/Teachers/Events';
import TeacherProfileSection from './pages/Teachers/Profile';
import CheckAnnouncementSection from './pages/Teachers/Announcement';
import AssignmentSection from './pages/Teachers/Assignment'; 
import CheckAttendanceSection from './pages/Teachers/Attendance';
import CheckExamSection from './pages/Teachers/Exams';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/choose-user' element={<ChooseUser />} />

        {/* Sign-in Pages */}
        <Route path='/admin-signIn' element={<AdminSignIn />} />
        <Route path='/student-signIn' element={<StudentSignIn />} />
        <Route path='/teacher-signIn' element={<TeacherSignIn />} />

        {/* Admin Dashboard */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/classes" element={<Classes />} />
        <Route path="/admin/exams" element={<Exam />} />
        <Route path="/admin/attendance" element={<Attendance />} />
        <Route path="/admin/performance" element={<Performance />} />
        <Route path="/admin/teachers" element={<Teachers />} />
        <Route path="/admin/students" element={<Student />} />
        <Route path="/admin/assignments" element={<Assignment />} />
        <Route path="/admin/library" element={<Liabrary />} />
        <Route path="/admin/communication" element={<Announcement />} />
        <Route path="/admin/events" element={<EventCalender />} />
        <Route path="/admin/settings" element={<SettingProfile />} />

        {/* Student Dashboard */}
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/assignments" element={<StudentAssignment />} />
        <Route path="/student/exams" element={<ExamsSection />} />
        <Route path="/student/performance" element={<PerformanceSection />} />
        <Route path="/student/attendance" element={<AttendanceSection />} />
        <Route path="/student/library" element={<LibrarySection />} />
        <Route path="/student/communication" element={<AnnouncementSection />} />
        <Route path="/student/settings" element={<ProfileSection />} />

        {/* Teacher Dashboard */}
        <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
        <Route path="/teacher/classes" element={<ClassSection />} />
        <Route path="/teacher/students" element={<StudentSection />} />
        <Route path="/teacher/teachers" element={<TeacherSection />} />
        <Route path="/teacher/assignments" element={<AssignmentSection />} />
        <Route path="/teacher/exams" element={<CheckExamSection />} />
        <Route path="/teacher/performance" element={<CheckPerformanceSection />} />
        <Route path="/teacher/attendance" element={<CheckAttendanceSection />} />
        <Route path="/teacher/communication" element={<CheckAnnouncementSection />} />
        <Route path="/teacher/events" element={<EventSection />} />
        <Route path="/teacher/settings" element={<TeacherProfileSection />} />
      </Routes>
    </Router>
  );
}

export default App;