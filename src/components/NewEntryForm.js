import React from 'react';
import { Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import EntryForm from './EntryForm';

function NewEntryFrom ({description, value, isExpense, setDiscription, setValue, setIsExpense, addEntry}) {

    return (
        <Form unstackable>
        <EntryForm 
          description={description} value={value} isExpense={isExpense} 
          setDiscription={setDiscription} setValue={setValue} setIsExpense={setIsExpense}
        />
        
        <ButtonSaveOrCancel addEntry={addEntry}/>
      </Form>
    )
}

export default NewEntryFrom;