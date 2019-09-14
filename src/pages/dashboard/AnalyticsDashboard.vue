<template>
<div>
    <h1>Analytics Dashboard</h1>
    <a-row>
        <div class="chart">
            <apexchart type="area" height="250" :options="chartOptions" :series="series" />
        </div>
    </a-row>
    <a-row style="margin-top: 20px;">
        <div class="chart">
            <apexchart type=area height=350 :options="options" :series="series1" />
        </div>
    </a-row>
    <a-row style="margin-top: 20px;">
        <div class="chart">
            <apexchart type=area height=350 :options="options2" :series="series2" />
        </div>
    </a-row>
</div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component({
    components: {}
})
class AnalyticsDashboard extends Vue {
    series = [{
        name: "STOCK ABC",
        data: [30, 40, 35, 50, 49, 60, 70, 91]
    }];

    series1 = [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
    }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
    }];
    series2 = [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }, {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }];

    chartOptions = {
        chart: {
            toolbar: {
                show: false
            }
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
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        xaxis: {
            type: "category",
            labels: {
                show: false
            },
            tooltip: {
                enabled: false
            },
            axisBorder: {
                show: false
            }
        },
        yaxis: {
            opposite: true,
            labels: {
                show: false
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 90, 100]
            }
        },
        theme: {
            mode: 'light',
            palette: 'palette1',
            monochrome: {
                enabled: false,
                color: '#255aee',
                shadeTo: 'light',
                shadeIntensity: 0.65
            },
        }
    };
    options = {
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },

        xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00",
                "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00",
                "2018-09-19T06:30:00"
            ],
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },

        }
    };
    options2 = {
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },

        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        yaxis: {
            title: {
                text: '$ (thousands)'
            }
        },
        fill: {
            opacity: 1

        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "$ " + val + " thousands"
                }
            }
        }
    }

}

export default AnalyticsDashboard;
</script>

<style>
.chart {
    border: 1px solid #ccc;
}
</style>
