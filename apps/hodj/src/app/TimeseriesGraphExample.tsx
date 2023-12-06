import { SetupTimeSelection } from "@hodj/time-selection";
import { TimeseriesGraphView, TimeseriesGraphViewData } from "@hodj/timeseries-graph";
import { FunctionComponent } from "react";

const exampleData: TimeseriesGraphViewData = {
    type: 'TimeseriesGraph',
    datasets: [
        {
            name: 'dataset1',
            data: {
                t: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            }
        },
        {
            name: 'dataset2',
            data: {
                t: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                y: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
            }
        }
    ],
    series: [
        {
            type: 'line',
            dataset: 'dataset1',
            encoding: {
                t: 't',
                y: 'y'
            },
            attributes: {
                color: 'red'
            }
        },
        {
            type: 'line',
            dataset: 'dataset2',
            encoding: {
                t: 't',
                y: 'y'
            },
            attributes: {
                color: 'blue'
            }
        }
    ],
    legendOpts: {
        location: 'northwest'
    },
    gridlineOpts: {
        hideX: false,
        hideY: false
    }
}

type Props = {
    width: number
}

const TimeseriesGraphExample: FunctionComponent<Props> = ({ width }) => {
    return (
        <SetupTimeSelection>
            <TimeseriesGraphView
                data={exampleData}
                width={width}
                height={400}
            />
        </SetupTimeSelection>
    )
}

export default TimeseriesGraphExample