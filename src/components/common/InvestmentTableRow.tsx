import type { Investment } from '../../types/types';
import { TableData } from './TableData';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

type InvestmentTableRowProps = {
  investment: Investment;
};

export const InvestmentTableRow = ({ investment }: InvestmentTableRowProps) => {
  return (
    <TableRow id={investment.id}>
      <TableHeader data={investment.project_name} />
      <TableData data={investment.token_class} />
      <TableData data={investment.shares_owned.toString()} />
      <TableData data={`$${investment.market_value.toLocaleString()}`} />
      <TableData data={`${investment.roi_percent}%`} />
      <TableData
        data={new Date(investment.next_distribution_date).toLocaleDateString(
          'en-US',
          {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          }
        )}
      />
    </TableRow>
  );
};
