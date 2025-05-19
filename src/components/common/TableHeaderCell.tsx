import type { ReactNode } from 'react';

type TableHeaderCellProps = {
  children: ReactNode;
  isFirst?: boolean;
};

export const TableHeaderCell = ({ children, isFirst = false }: TableHeaderCellProps) => {
  return (
    <th 
      scope="col" 
      className={`${isFirst ? 'py-3.5 pl-4 pr-3 sm:pl-6' : 'px-3 py-3.5'} text-left text-sm font-semibold text-gray-900`}
    >
      {children}
    </th>
  );
}; 