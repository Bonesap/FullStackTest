import StatsCard from '../components/common/StatsCard'
import { Table } from '../components/common/Table';
import { investorData, statsCards } from "../constants/Dashboard.tsx";

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