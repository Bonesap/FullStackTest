import { useEffect, useState } from 'react';
import StatsCard from '../components/common/StatsCard';
import { Table } from '../components/common/Table';
import type { InvestorSummary } from '../types/types';
import {
  ArrowTrendingUpIcon,
  BanknotesIcon,
  ChartBarIcon,
  ReceiptPercentIcon,
} from '@heroicons/react/16/solid';

const DashboardPage = () => {
  const [summaries, setSummaries] = useState<InvestorSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSummaries = async () => {
      try {
        const res = await fetch('http://localhost:3000/investor-summary');
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        const data = await res.json();
        setSummaries(data);
      } catch (err) {
        setError('Failed to load investor data');
        console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSummaries();
  }, []);

  if (loading) return <div className="p-4 text-gray-600">Loading...</div>;
  if (error) return <div className="p-4 text-red-600">{error}</div>;

  return (
    <div className="py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 space-y-6">
        {summaries.map((summary) => {
          const cards = [
            {
              id: 'total-invested',
              title: 'Total Invested Amount',
              value: summary.total_invested_amount,
              prefix: '$',
              icon: <BanknotesIcon className="h-5 w-5 text-white" />,
              color: 'bg-blue-500',
            },
            {
              id: 'portfolio-value',
              title: 'Portfolio Value',
              value: summary.portfolio_value,
              prefix: '$',
              icon: <ChartBarIcon className="h-5 w-5 text-white" />,
              color: 'bg-green-500',
            },
            {
              id: 'distributions',
              title: 'Distributions Received',
              value: summary.distributions_received,
              prefix: '$',
              icon: <ArrowTrendingUpIcon className="h-5 w-5 text-white" />,
              color: 'bg-purple-500',
            },
            {
              id: 'commitments',
              title: 'Outstanding Commitments',
              value: summary.outstanding_commitments,
              prefix: '$',
              icon: <ReceiptPercentIcon className="h-5 w-5 text-white" />,
              color: 'bg-amber-500',
            },
          ];

          return (
            <div key={summary.investor_id}>
              <h2 className="text-lg font-bold text-gray-700 mb-2">
                Investor ID: {summary.investor_id}
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {cards.map((card) => (
                  <StatsCard
                    key={`${summary.investor_id}-${card.id}`}
                    title={card.title}
                    value={card.value}
                    prefix={card.prefix}
                    icon={card.icon}
                    color={card.color}
                  />
                ))}
              </div>
            </div>
          );
        })}
        <Table />
      </div>
    </div>
  );
};

export default DashboardPage;
