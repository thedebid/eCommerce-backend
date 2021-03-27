import React, { Component } from 'react';
import ReactApexChart from "react-apexcharts";

class Sparklinecustomchart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    type: 'line',
                    width: 100,
                    height: 60,
                    sparkline: {
                        enabled: true
                    }
                },
                colors: ['#282B2F'],
                tooltip: {
                    marker: {
                        show: true
                    }
                }
            },
            series: [{
                data: [6, 7, 5, 9, 7, 8, 4, 7, 6, 9, 11, 16, 10, 8, 9, 12]
            }]
        };
    }
    render() {
        return (
            <ReactApexChart
                options={this.state.options}
                series={this.state.series}
                type="area"
                height={60}
                width="100%"
            />
        );
    }
}

export default Sparklinecustomchart;
