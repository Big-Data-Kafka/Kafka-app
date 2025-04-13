import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const BChart = ({data}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" className='text-sm'/>
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="views" fill="#1E2A47" />
                <Bar dataKey="purchases" fill="#8B1A1A" />
                <Bar dataKey="abandonments" fill="#006400" />
              </BarChart>
    </ResponsiveContainer>
  )
}

export default BChart