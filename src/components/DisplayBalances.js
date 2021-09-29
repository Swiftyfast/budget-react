import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import StatisticComp from './StatisticComp';

function DisplayBalances ({totalIncomes, totalExpenses}) {
    return (
        <Segment textAlign="center">
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <StatisticComp statType="Income:" statAmount={totalIncomes}  color="green"/>
            </Grid.Column>
            <Grid.Column>
              <StatisticComp statType="Expenses:" statAmount={totalExpenses} color="red" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
}

export default DisplayBalances;