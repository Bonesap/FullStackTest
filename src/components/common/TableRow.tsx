import type { ReactNode } from 'react';

type TableRowProps = {
  id: string | number;
  children: ReactNode;
};

export const TableRow = ({ id, children }: TableRowProps) => {
  return (
    <tr key={id}>
      {children}
    </tr>
  );
}; 