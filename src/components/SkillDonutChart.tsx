import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface SkillData {
  name: string;
  value: number;
  color: string;
}

interface SkillDonutChartProps {
  title: string;
  data: SkillData[];
  icon: React.ReactNode;
  delay?: number;
}

const SkillDonutChart = ({ title, data, icon, delay = 0 }: SkillDonutChartProps) => {
  const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: any[] }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border">
          <p className="font-medium text-portfolio-darkGray">{payload[0].name}</p>
          <p className="text-portfolio-blue">{`Proficiency: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  const CustomLegend = ({ payload }: { payload?: any[] }) => (
    <div className="flex flex-wrap justify-center gap-2 mt-4">
      {payload?.map((entry: any, index: number) => (
        <div key={index} className="flex items-center gap-2">
          <div 
            className="w-3 h-3 rounded-full" 
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-sm text-portfolio-darkGray">{entry.value}</span>
        </div>
      ))}
    </div>
  );

  return (
    <motion.div
      className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <motion.div 
        className="flex items-center gap-3 mb-4"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: delay + 0.2, duration: 0.5 }}
      >
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-bold text-portfolio-darkGray">{title}</h3>
      </motion.div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
              animationBegin={delay * 500}
              animationDuration={1000}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend content={<CustomLegend />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SkillDonutChart;