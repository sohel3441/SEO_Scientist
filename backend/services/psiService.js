import axios from 'axios';

export const fetchPageSpeedInsights = async (url) => {
  const apiKey = process.env.PSI_API_KEY || '';
  const endpoint = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';

  const params = {
    url,
    key: apiKey,
    strategy: 'mobile',
    category: ['performance', 'seo', 'accessibility'],
  };

  const { data } = await axios.get(endpoint, { params });

  const lighthouse = data.lighthouseResult;

  const extractScore = (category) =>
    lighthouse.categories[category]?.score
      ? Math.round(lighthouse.categories[category].score * 100)
      : null;

  const getAuditValue = (id) =>
    lighthouse.audits[id]?.numericValue || null;

  const opportunities = lighthouse.audits;
  const improvementTips = Object.values(opportunities)
    .filter(item => item.details?.type === 'opportunity')
    .map(item => item.title);

  return {
    fcp: getAuditValue('first-contentful-paint'),
    lcp: getAuditValue('largest-contentful-paint'),
    cls: getAuditValue('cumulative-layout-shift'),
    seoScore: extractScore('seo'),
    performanceScore: extractScore('performance'),
    accessibilityScore: extractScore('accessibility'),
    opportunities: improvementTips,
  };
};