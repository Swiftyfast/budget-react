import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import StatisticComp from './StatisticComp';

function DisplayBalances () {
    return (
        <Segment textAlign="center">
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <StatisticComp statType="Income:" statAmount="1,045.50"  color="green"/>
            </Grid.Column>
            <Grid.Column>
              <StatisticComp statType="Expenses:" statAmount="623.50" color="red" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
}

export default DisplayBalances;