import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useSelector } from "react-redux";
import Loading from '../Loading';


const Chart = () => {
  const {data:covidData,status: covidStatus} = useSelector((state) => state.covid)
  const { selectedCountry } = useSelector((state) => state.region);
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );


const options = {
  responsive: true,
  plugins: {
    legend: {
      display:false,
    },
    title: {
      display: true,
      text: `Current state in ${selectedCountry || "the world"}`,
    },
  },
};


const labels = ['Infected', 'Recovered', 'Deaths', 'Active'];

const data = {
  labels,
  datasets: [
    {
      label: "People",
      data: [
        covidData?.confirmed,
        covidData?.recovered,
        covidData?.deaths,
        covidData?.active,
      ],
      backgroundColor: [
        "rgb(191, 219, 254)",
        "rgb(187, 247, 208)",
        "rgb(254, 202, 202)",
        "rgb(254, 240, 138)",
      ],
    },
  ],
};
if(covidStatus === "loading"){
  return <Loading/>
}
  return <Bar options={options} data={data} />;
};

export default Chart;
