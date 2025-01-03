'use client';

import { Card, CardContent } from '@/components/ui/card';

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from 'recharts';

import flameIconLight from '../../../public/assets/images/flame-icon-pink.svg';

import { ChartConfig, ChartContainer } from '@/components/ui/chart';
import Image from 'next/image';

const chartData = [
  { browser: 'safari', visitors: 25, fill: 'var(--chart-pink)' },
];
const chartConfig = {
  visitors: {
    label: 'Visitors',
  },
  safari: {
    label: 'Safari',
    color: 'var(--chart-pink)',
  },
} satisfies ChartConfig;

const RecipeNutritionChart = () => {
  const totalVisitors = 1000;
  const chartData1 = [
    {
      browser: 'chrome',
      visitors: totalVisitors - 400,
      fill: 'var(--chart-pink)',
    },
    {
      browser: 'chrome',
      visitors: 400,
      fill: 'var(--chart-pink)',
    },
  ];

  return (
    <Card className='flex flex-col items-start border-none'>
      <CardContent className='flex flex-wrap pb-0 p-0'>
        <ChartContainer
          config={chartConfig}
          className='mx-auto aspect-square w-max max-h-[250px]'
        >
          <RadialBarChart
            data={chartData}
            startAngle={0}
            endAngle={250}
            innerRadius={80}
            outerRadius={110}
          >
            <PolarGrid
              gridType='circle'
              radialLines={false}
              stroke='none'
              className='first:fill-muted last:fill-background'
              polarRadius={[86, 74]}
            />
            <RadialBar
              dataKey='visitors'
              background
              cornerRadius={10}
              fill='var(--chart-muted)'
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
                        className='fill-primary'
                      >
                        {/* <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className='fill-foreground text-4xl font-bold'
                        >
                          {chartData1[0].visitors.toLocaleString()}
                        </tspan> */}
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className='fill-foreground text-4xl font-bold'
                        >
                          <Image
                            src={flameIconLight}
                            alt='flame-icon'
                            height={25}
                            width={25}
                          />
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className='fill-muted-foreground'
                        >
                          Visitors
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>

        <ChartContainer
          config={chartConfig}
          className='mx-auto aspect-square w-max max-h-[250px]'
        >
          <RadialBarChart
            data={chartData}
            startAngle={0}
            endAngle={250}
            innerRadius={60}
            outerRadius={80}
          >
            <PolarGrid
              gridType='circle'
              radialLines={false}
              stroke='none'
              className='first:fill-muted last:fill-background'
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
                        className='fill-primary'
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className='fill-foreground text-4xl font-bold'
                        >
                          {chartData1[0].visitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className='fill-muted-foreground'
                        >
                          Visitors
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default RecipeNutritionChart;
