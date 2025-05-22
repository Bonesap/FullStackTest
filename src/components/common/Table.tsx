import type { Investment } from '../../types/types';
import { InvestmentTableRow } from './InvestmentTableRow';
import { TableHeaderRow } from './TableHeaderRow';
import { TableHeaderCell } from './TableHeaderCell';
import { useEffect, useState } from 'react';

export const Table = () => {
  const [investments, setInvestments] = useState<Investment[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/investments')
      .then((res) => res.json())
      .then((data) => {
        setInvestments(data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="py-4">
      <h2 className="text-lg font-medium leading-6 text-gray-900 mb-4">
        Investment Portfolio
      </h2>
      <div className="overflow-hidden bg-white shadow sm:rounded-md">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <TableHeaderRow>
                <TableHeaderCell isFirst>Project</TableHeaderCell>
                <TableHeaderCell>Token Class</TableHeaderCell>
                <TableHeaderCell>Shares</TableHeaderCell>
                <TableHeaderCell>Market Value</TableHeaderCell>
                <TableHeaderCell>ROI</TableHeaderCell>
                <TableHeaderCell>Next Distribution</TableHeaderCell>
              </TableHeaderRow>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {investments.map((investment) => (
                <InvestmentTableRow
                  key={investment.id}
                  investment={investment}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
