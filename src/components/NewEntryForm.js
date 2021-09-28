import React, {useState} from 'react';
import { Checkbox, Form, Segment } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import EntryForm from './EntryForm';

function NewEntryFrom ({addEntry}) {
  const [description, setDiscription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(true);

    return (
        <Form unstackable>
        <EntryForm 
          description={description} value={value} isExpense={isExpense} 
          setDescription ={setDiscription} setValue={setValue} setIsExpense={setIsExpense}
        />
        
        <ButtonSaveOrCancel addEntry={addEntry} description={description} value={value} isExpense={isExpense}/>
      </Form>
    )
}

export default NewEntryFrom;