export default function DateFilter({ timeRange, onChange }) {
  const ranges = [
    { value: '1h', label: 'Last Hour' },
    { value: '24h', label: 'Last 24 Hours' },
    { value: '7d', label: 'Last Week' },
    { value: '30d', label: 'Last Month' }
  ];

  return (
    <div className="flex justify-end mb-4">
      <div className="inline-flex rounded-md shadow-sm">
        {ranges.map((range) => (
          <button
            key={range.value}
            onClick={() => onChange(range.value)}
            className={`px-4 py-2 text-sm font-medium ${
              timeRange === range.value
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            } ${range.value === '1h' ? 'rounded-l-lg' : ''} ${
              range.value === '30d' ? 'rounded-r-lg' : ''
            } border border-gray-300`}
          >
            {range.label}
          </button>
        ))}
      </div>
    </div>
  );
}