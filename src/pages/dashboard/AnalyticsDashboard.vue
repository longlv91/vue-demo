<template>
  <div>
    <h1>Analytics Dashboard</h1>
    <div id="chart">
      <apexchart type="area" height="350" :options="chartOptions" :series="series" />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  components: {}
})
class AnalyticsDashboard extends Vue {
  series = [
    {
      name: "STOCK ABC",
      data: [30, 40, 35, 50, 49, 60, 70, 91]
    }
  ];
  chartOptions = {
    chart: {
      zoom: {
        enabled: false
      },
      toolbar: { show: false }
    },
    grid: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "straight"
    },
    series: [
      {
        name: "STOCK ABC",
        data: [30, 40, 35, 50, 49, 60, 70, 91]
      }
    ],
    // title: {
    //   text: "Fundamental Analysis of Stocks",
    //   align: "left"
    // },
    // subtitle: {
    //   text: "Price Movements",
    //   align: "left"
    // },
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    xaxis: {
      type: "category",
      labels: { show: false},
      axisBorder: { show: false }
    },
    yaxis: {
      opposite: true,
      labels: { show: false},
      axisBorder: { show: false },
      axisTicks: { show: false }
    },
    legend: {
      horizontalAlign: "left"
    }
  };
}

export default AnalyticsDashboard;
</script>