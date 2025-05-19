
type TableHeaderProps = {
  data: string;
};

export const TableHeader = ({ data }: TableHeaderProps) => {
  return (
    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
      {data}
    </td>
  );
}; 