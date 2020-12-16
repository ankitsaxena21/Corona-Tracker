import React, { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../contexts/GlobalState'
import { Confirmed } from './Confirmed'
import { Deaths } from './Deaths'
import { Recovered } from './Recovered'
import { Tested } from './Tested'
import Chart from './Chart'

import Axios from 'axios'
import Spinner from 'react-bootstrap/Spinner'
export const Graph = () => {
    const { statedata, isbutton, GetData, stateentered, buttonclicked } = useContext(GlobalContext)

    function decider() {
        if (isbutton == true) {
            return (
                <div>
                    <div id="graph">
                        <Confirmed />
                        <Deaths />
                        <Recovered />
                        <Tested />
                    </div>
                    <Chart />
                </div>)
        }
        else {
            async function getCountrydata(states) {
                await GetData(states)
            }

            if (stateentered != "Total" && isbutton == false) getCountrydata("Total")
            if (stateentered == "Total") {
                return (
                    <div>
                        <div id="graph">
                            <Confirmed />
                            <Deaths />
                            <Recovered />
                            <Tested />
                        </div>
                        <Chart />
                    </div>)
            }
        }
    }
    return (<div>
        {decider()}</div>)
}
