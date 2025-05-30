import { useState } from 'react';
import './InsightsForm.css'; // Assuming you have a CSS file for styling

const InsightsForm = ({ onAnalyze }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url.trim()) return;
    onAnalyze(url.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter website URL"
        className="form-input"
      />
      <button type="submit" className="form-button">
        Analyze
      </button>
    </form>
  );
};

export default InsightsForm;
