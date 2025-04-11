import React from 'react'
const data =  [
  { username: "alice", views: 120, purchases: 15, abandonments: 5, mv: "iPhone 15", mp: "AirPods Pro" },
  { username: "bob", views: 95, purchases: 10, abandonments: 7, mv: "MacBook Air", mp: "Magic Mouse" },
  { username: "carla", views: 300, purchases: 40, abandonments: 12, mv: "Sony WH-1000XM5", mp: "iPad Pro" },
  { username: "daniel", views: 80, purchases: 8, abandonments: 4, mv: "Galaxy S23", mp: "Galaxy Buds" },
  { username: "eva", views: 250, purchases: 35, abandonments: 10, mv: "Apple Watch", mp: "iPhone 15" },
  { username: "frank", views: 60, purchases: 5, abandonments: 6, mv: "Kindle Paperwhite", mp: "Echo Dot" },
  { username: "grace", views: 180, purchases: 22, abandonments: 8, mv: "Nintendo Switch", mp: "Zelda: TOTK" },
  { username: "henry", views: 210, purchases: 28, abandonments: 9, mv: "GoPro Hero 11", mp: "Tripod Kit" },
  { username: "ivy", views: 140, purchases: 17, abandonments: 6, mv: "Dell XPS 13", mp: "USB-C Hub" },
  { username: "jack", views: 75, purchases: 9, abandonments: 3, mv: "Razer Blade 16", mp: "Gaming Mouse" },
]
const UserBehavior = () => {
  return (
    <table className="w-full text-sm text-left bg-white rounded-lg mt-5">
            <thead className="bg-gray-100 text-gray-500">
              <tr>
                <th className="px-6 py-3">Username</th>
                <th className="px-6 py-3">Views</th>
                <th className="px-6 py-3">Purchases</th>
                <th className="px-6 py-3">Abandonments</th>
                <th className="px-6 py-3">Most viewed item</th>
                <th className="px-6 py-3">Most purchased item</th>
              </tr>
            </thead>
            <tbody>
              {data.map((eachData, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-500 hover:bg-gray-300"
                >
                  <th className="px-6 py-3">{eachData.username}</th>
                  <td className="px-6 py-3">{eachData.views}</td>
                  <td className="px-6 py-3">{eachData.purchases}</td>
                  <td className="px-6 py-3">{eachData.abandonments}</td>
                  <td className="px-6 py-3">
                    <div className="flex items-center">
                      <img
                        className="w-12 h-12 rounded me-4"
                        src="data:image/jpeg;base64,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"
                        alt="Neil image"
                      />
                      <span>{eachData.mv}</span>
                    </div>
                  </td>
                  <td className="px-6 py-3">
                    <div className="flex items-center">
                      <img
                        className="w-12 h-12 rounded me-4"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Air_Jordan_1_Banned.jpg/1200px-Air_Jordan_1_Banned.jpg"
                        alt="Neil image"
                      />
                      <span>{eachData.mp}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
  )
}

export default UserBehavior