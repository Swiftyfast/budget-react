import React from 'react';
import { Statistic } from 'semantic-ui-react';

function StatisticComp ({statType, statAmount, color = "black", size = "tiny"}) {
    return (
        <Statistic size={size} color={color}>
            <Statistic.Label style={{textAlign: 'left'}}>
                {statType}
            </Statistic.Label>
            <Statistic.Value>
                {statAmount}
            </Statistic.Value>
        </Statistic>
    )
}

export default StatisticComp;