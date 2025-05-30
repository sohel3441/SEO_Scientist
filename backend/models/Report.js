import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const reportSchema = new Schema({
  url: {
    type: String,
    required: true,
  },
  fetchedAt: {
    type: Date,
    default: Date.now,
  },
  metrics: {
    fcp: { type: Number },
    lcp: { type: Number },
    cls: { type: Number },
    seoScore: { type: Number },
    performanceScore: { type: Number },
    accessibilityScore: { type: Number },
  },
  opportunities: [
    {
      type: String,
    },
  ],
});

const Report = model('Report', reportSchema);

export default Report;