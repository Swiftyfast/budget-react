
import { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import ModalEdit from './components/ModalEdit';
import NewEntryFrom from './components/NewEntryForm';
import StatisticComp from './components/StatisticComp';

function App() {
  const [entries, setEntries] = useState(inititialEntries);
  const [description, setDiscription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect ( () => {
    if(!isOpen && entryId){
      const index = entries.findIndex(entry => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      resetEntry();
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    let totalIncomes = 0;
    let totalExpenses = 0;
    entries.map(entry => {
      if(entry.isExpense){
        return totalExpenses += Number(entry.value);
      } else {
        return totalIncomes += Number(entry.value);
      }
    });
    setTotal(totalIncomes - totalExpenses);
    setExpenseTotal(totalExpenses);
    setIncomeTotal(totalIncomes);
  }, [entries])

  const deleteEntry = (id) => {
    const result = entries.filter(entry => entry.id !== id);
    setEntries(result);
  }

  const editEntry = (id) => {
    console.log(`edit entry with id ${id}`);
    if(id) {
      const index = entries.findIndex(entry => entry.id === id);
      const entry = entries[index];
      setEntryId(id);
      setDiscription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  }

  const addEntry = () => {
    const result = entries.concat({id: entries.length + 1, description, value, isExpense });
    setEntries(result);
    resetEntry();
  }

  const resetEntry = () => {
    setDiscription('');
    setValue('');
    setIsExpense(true);
  }

  return (
    <Container>
      <MainHeader title="Budget"/>
      <StatisticComp statType="Your Balance:" statAmount={total} size="small" />
      <DisplayBalances totalIncomes={incomeTotal} totalExpenses={expenseTotal}/>

      <MainHeader title="History" type='h3'/>
     
      <EntryLines entries={entries} deleteEntry={deleteEntry} editEntry={editEntry}/>

      <MainHeader title="Add new transaction" type="h3"/>
      <NewEntryFrom addEntry={addEntry} description={description} value={value} isExpense={isExpense} 
          setDiscription={setDiscription} setValue={setValue} setIsExpense={setIsExpense}/>
          <ModalEdit isOpen={isOpen} setIsOpen={setIsOpen} addEntry={addEntry} description={description} value={value} isExpense={isExpense} 
          setDiscription={setDiscription} setValue={setValue} setIsExpense={setIsExpense}/>
    </Container>
  );
}

export default App;

var inititialEntries = [
  {
    id: 1,
    description: "Work income",
    value: 1000,
    isExpense: false
  },
  {
    id: 2,
    description: "Water Bill",
    value: 20,
    isExpense: true
  },
  {
    id: 3,
    description: "Rent",
    value: 300,
    isExpense: true
  },
  {
    id: 4,
    description: "Power Bill",
    value: 50,
    isExpense: true
  }
];