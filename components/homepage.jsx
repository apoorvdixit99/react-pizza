import React, { Component } from 'react';
import TableComponent from './tablecomp';
import { Link } from 'react-router-dom';

import { data } from '../data';

class HomePage extends Component {
    render() { 

        return (
            <React.Fragment>
                <h1>Home Page!</h1>
                <TableComponent/>
                <Link to="/add-pizza">
                    <button >Add Pizza</button>
                </Link>
            </React.Fragment>
        );
    }
}
 
export default HomePage;