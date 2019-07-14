import React, { Component } from 'react';
import TableBeer from "./TableBeer";
import {getTasks} from '../components/Services';

class RandomBeer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tableItems: this.props.items,
        };

    }



    findBeer() {

        fetch("http://localhost:8080/randombeer/".concat(this.state.tableItems[0].id))
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        tableItems: result
                    });
                },(error) => {
                    this.setState({
                        error
                    });
                })
    }



    render() {
        return (
            <div>
                <TableBeer items ={this.state.tableItems}/>
                <button className="btn btn-info" onClick={this.findBeer.bind(this)}>Random Beer</button>
            </div>
        );
    }


}

export default RandomBeer;