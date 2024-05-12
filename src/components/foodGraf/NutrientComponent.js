import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import {
  NutrientBlock,
  NutrientInfo,
  NutrientName,
  NutrientStatistics,
} from './NutrientComponent.styled';

ChartJS.register(ArcElement, Tooltip, Legend);

export const NutrientComponent = (
  nutrientName,
  dailyGoal,
  nutrientIntake,
  percent,
  colors,
  height
) => {
  const NutrientComponent = () => {
    const percentValue = percent || (nutrientIntake * 100) / dailyGoal;
    const data = {
      datasets: [
        {
          data: [percentValue, 100 - percentValue],
          backgroundColor: colors,
          borderWidth: 0,
          borderRadius: 14,
          circumference: 360,
          cutout: '80%',
        },
      ],
    };
    const remainder = (dailyGoal, nutrientIntake) => {
      if (!isNaN(dailyGoal) && !isNaN(nutrientIntake)) {
        return Math.max(dailyGoal - nutrientIntake, 0);
      } else {
        return 0;
      }
    };
    const textCenter = {
      id: 'textCenter',
      beforeDatasetsDraw(chart) {
        const { ctx, data } = chart;
        const xCoor = chart.getDatasetMeta(0).data[0].x;
        const yCoor = chart.getDatasetMeta(0).data[0].y;

        const primaryData = percent ? `${data.datasets[0].data[0]}%` : '';

        ctx.save();
        ctx.font = '400 14px sans-serif';
        ctx.fillStyle = '#B6B6B6';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(primaryData, xCoor, yCoor);
      },
    };
    const options = {
      plugins: {
        tooltip: {
          enabled: false,
        },
      },
    };
    return (
      <NutrientBlock>
        <div style={{ height: `${height}`, width: `${height}` }}>
          <Doughnut
            options={options}
            data={data}
            plugins={[textCenter]}
          ></Doughnut>
        </div>
        {percent && (
          <NutrientInfo>
            <NutrientName>{nutrientName}</NutrientName>
            <NutrientStatistics>
              <p>
                Goal: <span>{dailyGoal}</span>
              </p>
              <p>
                left: <span>{remainder(dailyGoal, nutrientIntake)}</span>
              </p>
            </NutrientStatistics>
          </NutrientInfo>
        )}
      </NutrientBlock>
    );
  };

  return NutrientComponent;
};
