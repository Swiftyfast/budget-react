import React from "react";
import { Fragment } from "react/cjs/react.development";
import { Form, Segment, Checkbox } from 'semantic-ui-react';

function EntryForm({
  description, value, isExpense, setDiscription, setValue, setIsExpense
}){
    return (
        <Fragment>
        <Form.Group>
          <Form.Input 
            icon='tags' 
            width={12} 
            label="Description" 
            placeholder="New shiny thing"
            value={description}
            onChange={ (event) => setDiscription(event.target.value)}
          />
          <Form.Input
            width={4} 
            label="Value" 
            placeholder="100.00" 
            icon="dollar" 
            iconPosition="left" 
            value={value}
            onChange={ (event) => setValue(event.target.value)}
          />
        </Form.Group>
        <Segment compact>
          <Checkbox 
          toggle 
          label="is expense" 
          checked={isExpense}
          onChange={() => setIsExpense(oldState => !oldState)}
          />
        </Segment>
        </Fragment>
    )
}

export default EntryForm