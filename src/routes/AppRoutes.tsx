import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import TablePage from "../pages/TablePage/TablePage";
import NotFound from "../pages/NotFound/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Redirect root to dashboard */}
        <Route index element={<Navigate to="/dashboard" replace />} />

        {/* Dashboard routes */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="ecommerce" element={<TablePage />} />

        {/* Favorites */}
        <Route path="overview" element={<Dashboard />} />
        <Route path="projects" element={<NotFound />} />

        {/* Recently */}
        <Route path="overview-recent" element={<Dashboard />} />
        <Route path="projects-recent" element={<NotFound />} />

        {/* Other dashboard routes */}
        <Route path="projects-dash" element={<NotFound />} />
        <Route path="online-courses" element={<NotFound />} />

        {/* User Profile routes */}
        <Route path="user-profile">
          <Route index element={<NotFound />} />
          <Route path="overview" element={<NotFound />} />
          <Route path="projects" element={<NotFound />} />
          <Route path="campaigns" element={<NotFound />} />
          <Route path="documents" element={<NotFound />} />
          <Route path="followers" element={<NotFound />} />
        </Route>

        {/* Other page routes */}
        <Route path="account" element={<NotFound />} />
        <Route path="corporate" element={<NotFound />} />
        <Route path="blog" element={<NotFound />} />
        <Route path="social" element={<NotFound />} />

        {/* 404 route */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
