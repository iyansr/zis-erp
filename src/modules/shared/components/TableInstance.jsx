import { flexRender } from '@tanstack/react-table';

const TableInstance = ({ table }) => {
  return (
    <table className="table overflow-x-auto table-fixed w-full table-md">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} className="bg-gray-100">
            {headerGroup.headers.map((header) => {
              const enablePin = header.column.columnDef?.enablePinning ?? false;

              return (
                <th
                  key={header.id}
                  className={enablePin ? 'sticky right-0 border-l bg-inherit z-10 w-full' : ''}
                  style={{
                    width: header.getSize(),
                  }}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              );
            })}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => {
              const enablePin = cell.column.columnDef?.enablePinning ?? false;

              return (
                <td
                  key={cell.id}
                  className={enablePin ? 'sticky right-0 bg-white border-l z-10 w-full' : ''}
                  style={{ width: cell.column.getSize() }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
      <tfoot>
        {table.getFooterGroups().map((footerGroup) => (
          <tr key={footerGroup.id}>
            {footerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(header.column.columnDef.footer, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </tfoot>
    </table>
  );
};

export default TableInstance;
