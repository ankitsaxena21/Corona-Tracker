import React, { useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { GlobalContext } from '../contexts/GlobalState'

var data = [];
const Chart = () => {
    console.log("CHARTTTTT")
    const { statedata, stateentered } = useContext(GlobalContext)
    var i = 0
    data = [...statedata].reverse().map(ele => {
        if (i % 2 == 0) {
            for (var key in ele.States[stateentered].total) {
                if (key == 'confirmed') {
                    return { pv: parseInt(ele.States[stateentered].total[key]) }
                }
            }
        }
        i++
    })
    function datagather1() {
        for (var key in statedata[0].States[stateentered].total) {
            if (key == 'confirmed') {
                return parseInt(statedata[0].States[stateentered].total[key])
            }
        }
    }
    function datagather2() {
        for (var key in statedata[0].States[stateentered].total) {
            if (key == 'recovered') {
                return parseInt(statedata[0].States[stateentered].total[key])
            }
        }
    }
    function datagather3() {
        for (var key in statedata[0].States[stateentered].total) {
            if (key == 'deceased') {
                return parseInt(statedata[0].States[stateentered].total[key])
            }
        }
    }
    var newdateconfirmed = datagather1()
    var newdaterecovered = datagather2()
    var newdatedeaths = datagather3()
    const confirmed = newdateconfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const recovered = newdaterecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const deaths = newdatedeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    console.log(newdateconfirmed, newdaterecovered, newdatedeaths)
    return (
        <div className="barChart">
            <Bar
                data={{
                    labels: ['Confirmed', 'Recovered', 'Deaths'],
                    datasets: [
                        {
                            label: 'People',
                            backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                            data: [newdateconfirmed, newdaterecovered, newdatedeaths],
                        },
                    ],
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current state in India` },
                }}
            />
        </div>
    );
};

export default Chart;
