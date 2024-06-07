
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import useAxiosSecure from '../../../../useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const Chart = () => {
    const axiosSecure = useAxiosSecure()
    // 
    const {data: totalAll = []} = useQuery({
        queryKey : ["userTotalData",],
        queryFn : async()=>{
          const res = await axiosSecure.get('/admin-stats')
          return res.data;
        }
      })





    // 

    const data = [
        { name: 'totalUsers', value: totalAll?.totalUsers },
        { name: 'totalPosts', value: totalAll?.totalPosts },
        { name: 'totalComments', value: totalAll?.totalComments },
    
      ];
      const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

      const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

    return (
      <ResponsiveContainer width="100%" height="100%">
        <h1 className='text-[28px] text-center pt-5'>Estimated All Data:</h1>
        <PieChart width={500} height={500}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  
};

export default Chart;