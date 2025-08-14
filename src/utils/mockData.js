export const generateMockLogs = (count) => {
  const statuses = ['success', 'failed'];
  const logs = [];

  for (let i = 0; i < count; i++) {
    logs.push({
      id: i + 1,
      timestamp: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
      status: statuses[Math.floor(Math.random() * statuses.length)],
      message: `Mock log message ${i + 1}`
    });
  }

  return logs;
};
