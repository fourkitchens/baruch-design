export default function Table({ columns, data }) {
  return (
    <table className="w-full divide-y divide-gray-300">
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              key={column.key}
              scope="col"
              className="py-3.5 pr-3 pl-4 text-left text-base font-semibold text-gray-900 sm:pl-3"
            >
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-bg-light">
        {data.map((row, index) => (
          <tr key={index} className="even:bg-neutral-pearl-dark">
            {columns.map((column) => (
              <td
                key={column.key}
                className="px-3 py-4 text-base text-gray-900"
              >
                {row[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}