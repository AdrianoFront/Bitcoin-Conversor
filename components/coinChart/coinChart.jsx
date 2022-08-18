import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import Moment from 'moment'

export default function CoinChart ({ prices }) {
  const newData = prices?.map(([data, price]) => ({
    name: Moment(data).format('DD/MM/YYYY HH:MM'), 
    bitcoin: price  
}))

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={newData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="bitcoin" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  )
}