import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from 'recharts';

export interface RadialChartData {
  browser: string;
  visitors: number;
  fill: string;
}

export interface RadialChartConfig {
  label: string;
  color?: string;
}

interface RadialChartProps {
  data: RadialChartData[];
}

const RadialChart: React.FC<RadialChartProps> = ({ data }) => {
  console.log(data);
  return (
    <RadialBarChart
      data={data}
      startAngle={0}
      endAngle={250}
      innerRadius={80}
      outerRadius={110}
    >
      <PolarGrid
        gridType='circle'
        radialLines={false}
        stroke='none'
        polarRadius={[86, 74]}
      />
      <RadialBar
        dataKey='visitors'
        background
        cornerRadius={10}
      />
      <PolarRadiusAxis
        tick={false}
        tickLine={false}
        axisLine={false}
      >
        <Label
          content={({ viewBox }) => {
            if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
              return (
                <text
                  x={viewBox.cx}
                  y={viewBox.cy}
                  textAnchor='middle'
                  dominantBaseline='middle'
                  className='fill-pink-600 text-4xl font-bold'
                >
                  {data[0].visitors.toLocaleString()}
                </text>
              );
            }
            return null;
          }}
        />
      </PolarRadiusAxis>
    </RadialBarChart>
  );
};

export default RadialChart;
