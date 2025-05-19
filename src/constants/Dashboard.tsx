import { ArrowTrendingUpIcon, BanknotesIcon, ChartBarIcon, ReceiptPercentIcon } from "@heroicons/react/24/solid";
import type { InvestorData } from "../types/types.ts";

//mocked
export const investorData: InvestorData = {
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

export const statsCards = [
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

