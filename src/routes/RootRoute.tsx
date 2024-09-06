import { Suspense, lazy, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import styled from "styled-components";
import Layout from "../components/sidebar/Layout";
import Login from "../features/login/Login";

// Lazy load components
const Dashboard = lazy(
  () => import("../features/dashboard/presentation/Dashboard")
);
const Clients = lazy(() => import("../features/clients/presentation/Clients"));

const SmsLogs = lazy(() => import("../features/sms-logs/presentation/SmsLogs"));
const BlackList = lazy(
  () => import("../features/blacklist/presentation/BlackList")
);
const ProfileSettings = lazy(
  () => import("../features/profile/presentation/ProfileSettings")
);
const Licenses = lazy(
  () => import("../features/license/presentation/Licenses")
);

const Pending = lazy(() => import("../features/pending/presentation/Pending"));

const Templates = lazy(
  () => import("../features/templates/presentation/Templates")
);

// Create a container for the layout
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

// Function to check if the user is authenticated
const isAuthenticated = (): boolean => {
  // Check for a static value in localStorage
  return localStorage.getItem("userLoggedIn") === "true";
};

// ProtectedRoute component to guard routes
const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

function RootRoute() {
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    // Simulate an authentication check
    setAuthChecked(true);
  }, []);

  if (!authChecked) {
    return <div>Loading...</div>; // Show loading until auth check is complete
  }

  return (
    <Router>
      <Routes>
        {/* Route for the Login component */}
        <Route path="/login" element={<Login />} />

        {/* All other routes are protected by Layout */}
        <Route
          path="/*" // Catch-all route for all other paths
          element={
            <AppContainer>
              <Layout>
                <Suspense fallback={<div>Loading...</div>}>
                  <Routes>
                    <Route
                      path="/dashboard"
                      element={
                        <ProtectedRoute>
                          <Dashboard />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/profile"
                      element={
                        <ProtectedRoute>
                          <ProfileSettings />
                        </ProtectedRoute>
                      }
                    />

                    <Route
                      path="/templates"
                      element={
                        <ProtectedRoute>
                          <Templates />
                        </ProtectedRoute>
                      }
                    />

                    <Route
                      path="/clients"
                      element={
                        <ProtectedRoute>
                          <Clients />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/licences"
                      element={
                        <ProtectedRoute>
                          <Licenses />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/pending"
                      element={
                        <ProtectedRoute>
                          <Pending />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/sms-logs"
                      element={
                        <ProtectedRoute>
                          <SmsLogs />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/blacklist-words"
                      element={
                        <ProtectedRoute>
                          <BlackList />
                        </ProtectedRoute>
                      }
                    />
                    <Route path="/" element={<Navigate to="/login" />} />
                    {/* Redirect to login */}
                  </Routes>
                </Suspense>
              </Layout>
            </AppContainer>
          }
        />
      </Routes>
    </Router>
  );
}

export default RootRoute;
