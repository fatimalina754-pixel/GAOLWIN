import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/Layout';

// Placeholder for Pages
import Home from './pages/Home';
import Matches from './pages/Matches';
import LiveStreams from './pages/LiveStreams';
import Predictions from './pages/Predictions';
import Leaderboard from './pages/Leaderboard';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import Rewards from './pages/Rewards';
import Admin from './pages/Admin';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="matches" element={<Matches />} />
              <Route path="streams" element={<LiveStreams />} />
              <Route path="predictions" element={<Predictions />} />
              <Route path="rewards" element={<Rewards />} />
              <Route path="leaderboard" element={<Leaderboard />} />
              <Route path="auth" element={<Auth />} />
              <Route path="profile" element={<Profile />} />
              <Route path="admin" element={<Admin />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
