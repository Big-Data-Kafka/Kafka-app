import React from 'react'

const OverviewCard = ({Icon, count, label, color}) => {
  return (
    <div className="flex items-center justify-between p-5 bg-white rounded shadow">
        <div className="flex bg-white p-3 rounded-lg">
          <span className={`rounded-full ${color} p-3 me-5`}>
            {Icon}
          </span>
          <div className="flex flex-col">
            <span className="text-xl">{count}</span>
            <span className="text-sm text-gray-500">{label}</span>
          </div>
        </div>
      </div>
  )
}

export default OverviewCard