interface StatsCardProps {
  title: string
  value: number
  prefix?: string
  suffix?: string
  icon: React.ReactNode
  color: string
}

const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('en-US').format(num)
}

const StatsCard = ({
  title,
  value,
  prefix = '',
  suffix = '',
  icon,
  color
}: StatsCardProps) => {
  


  return (
    <div className="overflow-hidden rounded-lg bg-white shadow">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className={`flex h-10 w-10 items-center justify-center rounded-md ${color}`}>
              {icon}
            </div>
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="truncate text-sm font-medium text-gray-500">{title}</dt>
              <dd>
                <div className="text-lg font-medium text-gray-900">
                  {prefix}{formatNumber(value)}{suffix}
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsCard 