import React, { Component } from 'react';
import ReactApexChart from "react-apexcharts";

class CollectionChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    type: 'bar',
                    height: 280,
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
                        columnWidth: 20,
                        width: 5
                    },
                },
                fill: {
                    colors: ['#E15858', '#3C89DA', '#5CB65F']
                },
                yaxis: {
                    show: false
                },
                xaxis: {
                    axisTicks: { show: false },
                    axisBorder: { show: false },
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
                },
                legend: {
                    show: false
                },
                grid: {
                    bottom: 20,
                    top: 0,
                    left: 6
                }
            },
            series: [
                {
                    name: "Data 3",
                    data: [52, 142, 111, 58, 62, 174]
                },
                {
                    name: "Data 2",
                    data: [70, 192, 75, 97, 219, 152]
                },
                {
                    name: "Data 1",
                    data: [110, 81, 158, 108, 149, 217]
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
                    height="262px"
                />
            </div>
        );
    }
}

export default CollectionChart;
