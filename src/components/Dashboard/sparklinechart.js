import React, { Component } from 'react';
import ReactApexChart from "react-apexcharts";

class Sparklinechart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    type: 'bar',
                    width: 100,
                    height: 57,
                    sparkline: {
                        enabled: true
                    }
                },
                colors: ["#E15858"],
                plotOptions: {
                    bar: {
                        columnWidth: '40%'
                    }
                },
                labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                xaxis: {
                    crosshairs: {
                        width: 1
                    },
                },
                tooltip: {
                    fixed: {
                        enabled: false
                    },
                    x: {
                        show: false
                    },
                    y: {
                        title: {
                            formatter: function (seriesName) {
                                return ''
                            }
                        }
                    },
                    marker: {
                        show: false
                    }
                }
            },
            series: [{
                data: [2, 5, 8, 3, 6, 9, 4, 5, 6, 3]
            }]
        };
    }
    render() {
        return (
            <ReactApexChart
                options={this.state.options}
                series={this.state.series}
                type="bar" height={57} width={100}
            />
        );
    }
}

export default Sparklinechart;
