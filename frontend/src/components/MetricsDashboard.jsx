const formatMs = (value) => (value ? `${Math.round(value)} ms` : 'N/A');

const MetricsDashboard = ({ data }) => {
  if (!data) return null;

const {
  metrics: {
    fcp,
    lcp,
    cls,
    seoScore,
    performanceScore,
    accessibilityScore
  } = {},
  opportunities,
} = data;

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Page Analysis Results</h2>

      <div className="dashboard-grid">
        {/* Core Web Vitals */}
        <section className="card">
          <h3 className="card-title">Core Web Vitals</h3>
          <ul className="card-list">
            <li>
              <strong>First Contentful Paint (FCP):</strong> {formatMs(fcp)}
            </li>
            <li>
              <strong>Largest Contentful Paint (LCP):</strong> {formatMs(lcp)}
            </li>
            <li>
              <strong>Cumulative Layout Shift (CLS):</strong> {cls?.toFixed(2) ?? 'N/A'}
            </li>
          </ul>
        </section>

        {/* Scores */}
        <section className="card">
          <h3 className="card-title">Scores</h3>
          <ul className="card-list">
            <li>
              <strong>Performance Score:</strong> {performanceScore ?? 'N/A'}
            </li>
            <li>
              <strong>SEO Score:</strong> {seoScore ?? 'N/A'}
            </li>
            <li>
              <strong>Accessibility Score:</strong> {accessibilityScore ?? 'N/A'}
            </li>
          </ul>
        </section>
      </div>

      {/* Opportunities */}
      <section className="opportunities">
        <h3 className="opportunities-title">Opportunities to Improve</h3>
        {opportunities?.length > 0 ? (
          <ul className="opportunities-list">
            {opportunities.map((tip, idx) => (
              <li key={idx}>{tip}</li>
            ))}
          </ul>
        ) : (
          <p className="opportunities-none">No major improvements suggested.</p>
        )}
      </section>
    </div>
  );
};

export default MetricsDashboard;
