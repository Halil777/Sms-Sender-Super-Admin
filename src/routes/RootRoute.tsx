import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Layout from "../components/sidebar/Layout";

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

// Create a container for the layout
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

function RootRoute() {
  return (
    <Router>
      <AppContainer>
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<ProfileSettings />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/licences" element={<Licenses />} />
              <Route path="/sms-logs" element={<SmsLogs />} />
              <Route path="/blacklist-words" element={<BlackList />} />
            </Routes>
          </Suspense>
        </Layout>
      </AppContainer>
    </Router>
  );
}

export default RootRoute;
