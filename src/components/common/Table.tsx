import type { InvestorData } from '../../types/types';   


export const Table = ({investorData}: {investorData: InvestorData}) => {
  return (
    <div className="py-4">
    <h2 className="text-lg font-medium leading-6 text-gray-900 mb-4">Investment Portfolio</h2>
    <div className="overflow-hidden bg-white shadow sm:rounded-md">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Project</th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Token Class</th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Shares</th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Market Value</th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">ROI</th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Next Distribution</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {investorData.investments.map((investment) => (
              <tr key={investment.id}>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                  {investment.project_name}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{investment.token_class}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{investment.shares_owned}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">${investment.market_value.toLocaleString()}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{investment.roi_percent}%</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {new Date(investment.next_distribution_date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}

