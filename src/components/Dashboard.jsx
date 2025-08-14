import { useState, useEffect } from 'react';
import { fetchLogs } from '../utils/api';
import SummaryCards from './SummaryCards';
import LogsTable from './LogsTable';
import DateFilter from './DateFilter';

export default function Dashboard() {
    
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('24h');

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const data = await fetchLogs();
      setLogs(data.logs);
      setLoading(false);
    };
    loadData();
  }, [timeRange]);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Integration Monitor</h1>
      
      <DateFilter 
        timeRange={timeRange} 
        onChange={setTimeRange} 
      />
      
      <SummaryCards logs={logs} />
      
      <div className="mt-8">
        <LogsTable logs={logs} loading={loading} />
      </div>
    </div>
  );
}