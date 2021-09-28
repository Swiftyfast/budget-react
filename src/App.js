
import { useState } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import NewEntryFrom from './components/NewEntryForm';
import StatisticComp from './components/StatisticComp';

function App() {
  const [entries, setEntries] = useState(inititialEntries)

  const deleteEntry = (id) => {
    const result = entries.filter(entry => entry.id !== id);
    setEntries(result);
  }

  const addEntry = (description, value, isExpense) => {
    const result = entries.concat({id: entries.length + 1, description, value, isExpense });
    setEntries(result);
  }

  return (
    <Container>
      <MainHeader title="Budget"/>
      <StatisticComp statType="Your Balance:" statAmount="2,550.53" size="small" />
      <DisplayBalances />

      <MainHeader title="History" type='h3'/>
     
      <EntryLines entries={entries} deleteEntry={deleteEntry}/>

      <MainHeader title="Add new transaction" type="h3"/>
      <NewEntryFrom addEntry={addEntry}/>
    </Container>
  );
}

export default App;

var inititialEntries = [
  {
    id: 1,
    description: "Work income",
    value: "$1,000.00",
    isExpense: false
  },
  {
    id: 2,
    description: "Water Bill",
    value: "$20.00",
    isExpense: true
  },
  {
    id: 3,
    description: "Rent",
    value: "$300.00",
    isExpense: true
  },
  {
    id: 4,
    description: "Power Bill",
    value: "$50.00",
    isExpense: true
  }
];