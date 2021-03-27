import React, { Component } from 'react';
import ReactApexChart from "react-apexcharts";

class BarChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    type: 'bar',
                    height: 200,
                    stacked: true,
                    toolbar: {
                        show: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                plotOptions: {
                    bar: {
                        columnWidth: '60%'
                    },
                },
                colors: ['#E15858'],
                yaxis: {
                    show: false
                },
                xaxis: {
                    labels: {
                        show: false
                    },
                    show: false,
                    axisTicks: { show: false },
                    axisBorder: { show: false },
                },
                legend: {
                    show: false
                }
            },
            series: [
                {
                    name: "Views",
                    data: [110, 81, 105, 108, 119, 117, 125, 180]
                }
            ]
        };
    }
    render() {
        return (
            <div>
                <ReactApexChart
                    options={this.state.options}
                    series={this.state.series}
                    type="bar"
                    height="140px"
                />
            </div>
        );
    }
}

export default BarChart;
