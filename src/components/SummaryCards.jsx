import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';

ChartJS.register(ArcElement, Tooltip);

export default function SummaryCards({ logs }) {
  const successCount = logs.filter(log => log.status === 'success').length;
  const failureCount = logs.length - successCount;

  const data = {
    labels: ['Success', 'Failures'],
    datasets: [
      {
        data: [successCount, failureCount],
        backgroundColor: ['#10B981', '#EF4444'],
        borderWidth: 0
      }
    ]
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-4 rounded-lg shadow border">
        <h3 className="text-sm font-medium text-gray-500">Total Executions</h3>
        <p className="text-2xl font-semibold">{logs.length}</p>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow border">
        <h3 className="text-sm font-medium text-gray-500">Success Rate</h3>
        <p className="text-2xl font-semibold text-green-600">
          {logs.length ? Math.round((successCount / logs.length) * 100) : 0}%
        </p>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow border">
        <div className="h-40">
          <Doughnut data={data} />
        </div>
      </div>
    </div>
  );
}