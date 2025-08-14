import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';
import { AlertCircle, CheckCircle } from 'lucide-react';
export default function LogsTable({ logs, loading }) {
  const columns = [
    {
      header: 'Interface',
      accessorKey: 'interfaceName',
      cell: info => <span className="font-mono">{info.getValue()}</span>
    },
    {
      header: 'Status',
      accessorKey: 'status',
      cell: info => (
        <div className="flex items-center gap-2">
          {info.getValue() === 'success' ? (
            <CheckCircle className="text-green-500 h-4 w-4" />
          ) : (
            <AlertCircle className="text-red-500 h-4 w-4" />
          )}
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
            info.getValue() === 'success' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {info.getValue()}
          </span>
        </div>
      )},
    {
      header: 'Message',
      accessorKey: 'message'
    },
    {
      header: 'Timestamp',
      accessorKey: 'timestamp',
      cell: info => new Date(info.getValue()).toLocaleString()
    }
  ];
  const table =useReactTable({
    data: logs,
    columns,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <div className="border rounded-lg overflow-hidden shadow-sm">
      <table className="w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th 
                  key={header.id} 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {loading ? (
            <tr>
              <td colSpan={columns.length} className="px-6 py-4 text-center">
                Loading data...
              </td>
            </tr>
          ) : (
            table.getRowModel().rows.map(row => (
              <tr key={row.id} className="hover:bg-gray-50">
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="px-6 py-4 whitespace-nowrap">
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}