import { Chart, registerables } from "chart.js";

import {
  Bar,
  Bubble,
  Doughnut,
  Line,
  Pie,
  PolarArea,
  Scatter,
} from "react-chartjs-2";

Chart.register(...registerables);

const ThesisChart = ({ type, data }) => {
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  if (type == "bar") {
    return <Bar options={options} data={data} />;
  }
  if (type == "line") {
    return <Line options={options} data={data} />;
  }
  if (type == "doughnut") {
    return <Doughnut options={options} data={data} />;
  }
};

export default ThesisChart;
