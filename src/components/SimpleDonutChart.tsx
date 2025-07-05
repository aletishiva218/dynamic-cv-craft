import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface SkillData {
  name: string;
  value: number;
}

interface SimpleDonutChartProps {
  title: string;
  data: SkillData[];
  icon: React.ReactNode;
  delay?: number;
}

const SimpleDonutChart = ({ title, data, icon, delay = 0 }: SimpleDonutChartProps) => {
  const colors = ['#1e40af', '#3b82f6', '#60a5fa', '#93c5fd', '#dbeafe'];

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

      <div className="h-48 w-full mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={35}
              outerRadius={70}
              paddingAngle={2}
              dataKey="value"
              animationBegin={delay * 500}
              animationDuration={1000}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-2">
        {data.map((skill, index) => (
          <motion.div 
            key={skill.name}
            className="flex items-center justify-between"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + 0.3 + index * 0.1, duration: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: colors[index % colors.length] }}
              />
              <span className="text-sm text-portfolio-darkGray">{skill.name}</span>
            </div>
            <span className="text-sm font-medium text-portfolio-blue">{skill.value}%</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SimpleDonutChart;