import React, { Component } from 'react';
import EditPizzaForm from './editpizzaform';

class EditPizza extends Component {
    
    render() { 

        return (
            <React.Fragment>
                <h1>Edit Pizza</h1>
                <EditPizzaForm/>
            </React.Fragment>
        );
    }
}
 
export default EditPizza;