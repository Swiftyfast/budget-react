
import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';

import MainHeader from './components/MainHeader';
import NewEntryFrom from './components/NewEntryForm';
import StatisticComp from './components/StatisticComp';

function App() {
  return (
    <Container>
      <MainHeader title="Budget"/>
      <StatisticComp statType="Your Balance:" statAmount="2,550.53" size="small" />
      <DisplayBalances />

      <MainHeader title="History" type='h3'/>
     
      <EntryLine  description="income" value="$10.00"/>
      <EntryLine  description="expense" value="$10.00" isExpense/>

      <MainHeader title="Add new transaction" type="h3"/>
      <NewEntryFrom />
    </Container>
  );
}

export default App;
