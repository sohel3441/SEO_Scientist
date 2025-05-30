import { fetchPageSpeedInsights } from '../services/psiService.js';
import Report from '../models/Report.js';

export const analyzeUrl = async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'Missing required URL parameter' });
  }

  try {
    const psiData = await fetchPageSpeedInsights(url);

    const report = new Report({
      url,
      metrics: {
        fcp: psiData.fcp,
        lcp: psiData.lcp,
        cls: psiData.cls,
        seoScore: psiData.seoScore,
        performanceScore: psiData.performanceScore,
        accessibilityScore: psiData.accessibilityScore,
      },
      opportunities: psiData.opportunities,
    });

    await report.save();
    res.status(200).json(report);
  } catch (error) {
    // Improved error logging
    console.error('❌ Failed to analyze URL:');
    if (error.response) {
      // The request was made and the server responded with a status code
      console.error('Response Status:', error.response.status);
      console.error('Response Data:', error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received:', error.request);
    } else {
      // Something else happened
      console.error('Error Message:', error.message);
    }

    res.status(500).json({ error: 'Failed to fetch insights' });
  }
};

export const getAllReports = async (req, res) => {
  try {
    const reports = await Report.find().sort({ fetchedAt: -1 }); // newest first
    res.status(200).json(reports);
  } catch (error) {
    console.error('❌ Error fetching reports:', error.message);
    res.status(500).json({ error: 'Failed to retrieve reports' });
  }
};


