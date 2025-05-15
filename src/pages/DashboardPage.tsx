import { BanknotesIcon, ChartBarIcon, ArrowTrendingUpIcon, ReceiptPercentIcon } from '@heroicons/react/24/solid'
import StatsCard from '../components/common/StatsCard'
import { Table } from '../components/common/Table';
import type { InvestorData } from '../types/types';

const investorData: InvestorData = {
  investor_summary: {
    investor_id: "1234-5678",
    total_invested_amount: 150000,
    portfolio_value: 175000,
    distributions_received: 12000,
    outstanding_commitments: 5000
  },
  investments: [
    {
      id: "inv-001",
      project_name: "Greenfield Residential Fund",
      token_class: "Class A",
      shares_owned: 200,
      market_value: 22000,
      roi_percent: 8.4,
      next_distribution_date: "2024-06-15"
    },
    {
      id: "inv-002",
      project_name: "Commercial Office REIT",
      token_class: "Preferred",
      shares_owned: 150,
      market_value: 18000,
      roi_percent: 7.2,
      next_distribution_date: "2024-07-01"
    }
  ]
}

const statsCards = [
    {
      id: 'total-invested',
      title: "Total Invested Amount",
      value: investorData.investor_summary.total_invested_amount,
      prefix: "$",
      icon: <BanknotesIcon className="h-5 w-5 text-white" aria-hidden="true" />,
      color: "bg-blue-500"
    },
    {
      id: 'portfolio-value',
      title: "Portfolio Value",
      value: investorData.investor_summary.portfolio_value,
      prefix: "$",
      icon: <ChartBarIcon className="h-5 w-5 text-white" aria-hidden="true" />,
      color: "bg-green-500"
    },
    {
      id: 'distributions',
      title: "Distributions Received",
      value: investorData.investor_summary.distributions_received,
      prefix: "$",
      icon: <ArrowTrendingUpIcon className="h-5 w-5 text-white" aria-hidden="true" />,
      color: "bg-purple-500"
    },
    {
      id: 'commitments',
      title: "Outstanding Commitments",
      value: investorData.investor_summary.outstanding_commitments,
      prefix: "$",
      icon: <ReceiptPercentIcon className="h-5 w-5 text-white" aria-hidden="true" />,
      color: "bg-amber-500"
    }
  ];


const DashboardPage = () => {
 
  return (
    <div className="py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="py-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {statsCards.map(card => (
              <StatsCard
                key={card.id}
                title={card.title}
                value={card.value}
                prefix={card.prefix}
                icon={card.icon}
                color={card.color}
              />
            ))}
          </div>
        </div>
        <Table investorData={investorData} />
      </div>
    </div>
  )
}

export default DashboardPage 