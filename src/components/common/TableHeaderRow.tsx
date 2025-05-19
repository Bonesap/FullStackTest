import type { ReactNode } from 'react';

type TableHeaderRowProps = {
  children: ReactNode;
};

export const TableHeaderRow = ({ children }: TableHeaderRowProps) => {
  return (
    <tr>
      {children}
    </tr>
  );
}; 