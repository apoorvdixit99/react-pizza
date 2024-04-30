import React, { Component } from 'react';
import AddPizzaForm from './addpizzaform';

class AddPizza extends Component {
    
    render() { 

        return (
            <React.Fragment>
                <h1>Add Pizza</h1>
                <AddPizzaForm/>
            </React.Fragment>
        );
    }
}
 
export default AddPizza;