import { useState } from 'react';
import InsightsForm from './components/InsightsForm';
import MetricsDashboard from './components/MetricsDashboard';
import axios from 'axios';
import './App.css';

const App = () => {
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async (url) => {
    setLoading(true);
    setMetrics(null);
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/insights/analyze`, { url });
      setMetrics(res.data);
    } catch (err) {
      console.error('Error fetching insights:', err);
      alert('Failed to fetch insights. Please try another URL.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">SEO Insights Analyzer</h1>
      <InsightsForm onAnalyze={handleAnalyze} />
      {loading && <p className="loading-text">Analyzing...</p>}
      {!loading && metrics && <MetricsDashboard data={metrics} />}
    </div>
  );
};

export default App;
