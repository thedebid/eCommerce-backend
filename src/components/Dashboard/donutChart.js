import React, { Component } from 'react';
import C3Chart from 'react-c3js';

class DonutChart extends Component {
    render() {
        const data = {
            columns: [
                // each columns data
                ['data1', 63],
                ['data2', 37]
            ],
            type: 'donut', // default type of chart
            colors: {
                'data1': '#FFA117',
                'data2': '#ffd861',
            },
            names: {
                // name of each serie
                'data1': 'This Month',
                'data2': 'Last Month'
            }
        }
        return (
            <C3Chart
                data={data}
                height="268px"
                axis={{}}
                padding={{
                    bottom: 20,
                    top: 0
                }}
                legend={
                    { show: false }
                } />
        );
    }
}

export default DonutChart;
