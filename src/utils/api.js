import { generateMockLogs } from './mockData';

export const fetchLogs = async (params = {}) => {
  const { limit = 50, timeRange = '24h' } = params;
  const allLogs = generateMockLogs(limit);
  const cutoff = {
    '1h': 1 * 60 * 60 * 1000,
    '24h': 24 * 60 * 60 * 1000,
    '7d': 7 * 24 * 60 * 60 * 1000,
    '30d': 30 * 24 * 60 * 60 * 1000
  }[timeRange];
  return {
    logs: allLogs.filter(log => Date.now() - new Date(log.timestamp).getTime() <= cutoff),
    total: 500000
  };
};
