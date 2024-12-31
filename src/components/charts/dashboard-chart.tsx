'use client';

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const chartData = [
  { month: 'January', amount: 100, desktop: 236 },
  { month: 'February', amount: 100, desktop: 305 },
  { month: 'March', amount: 100, desktop: 237 },
  { month: 'April', amount: 100, desktop: 73 },
  { month: 'May', amount: 100, desktop: 209 },
  { month: 'June', amount: 100, desktop: 214 },
  { month: 'July', amount: 100, desktop: 140 },
  { month: 'Aug', amount: 100, desktop: 60 },
  { month: 'Sept', amount: 100, desktop: 159 },
  { month: 'Oct', amount: 100, desktop: 256 },
  { month: 'Nov', amount: 100, desktop: 120 },
  { month: 'Dec', amount: 100, desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

const DashboardChart = () => {
  return (
    <Card className='bg-containerBgColor'>
      <CardHeader className='mb-4'>
        <CardTitle className='flex sm:flex-row justify-between sm:items-center items-start sm:gap-0 gap-4 flex-col'>
          <p className='font-playfair font-normal'>Subscription Growth Rate</p>
          <select className='text-sm font-normal p-2 w-24 rounded-lg text-slate-500 bg-containerBgColor border border-slate-500 focus:outline-none cursor-pointer'>
            <option value='Yearly'>Yearly</option>
          </select>
        </CardTitle>
      </CardHeader>
      <CardContent className='overflow-x-auto'>
        <ChartContainer
          className='min-w-[400px]'
          config={chartConfig}
        >
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='month'
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={value => value.slice(0, 3)}
            />
            <YAxis
              dataKey='amount'
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              ticks={[100, 200, 300, 400, 500, 600, 700]}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  className='bg-secondary text-white text-base'
                  hideLabel
                  hideIndicator
                  indicator='line'
                />
              }
            />
            <Area
              dataKey='desktop'
              type='natural'
              fill='var(--chart-1)'
              fillOpacity={0.4}
              stroke='var(--stroke)'
              strokeWidth={3}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default DashboardChart;
