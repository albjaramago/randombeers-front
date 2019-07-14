import React, { Component } from 'react';
import TableBeer from './components/RandomBeer';
import RandomBeer from './components/TableBeer';
import {getTasks} from './components/Services';

class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {

        getTasks(this.ok, this.error);

    }


    ok =(result)=> {
        this.setState({
            isLoaded: true,
            items: result})
    }

    error = (error) => {
        this.setState({
            isLoaded: true,
            error})
    }




    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <TableBeer items ={items}/>
        );
        }
    }
}




export default App;
