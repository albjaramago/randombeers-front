import React, { Component } from 'react';

class TableBeer extends Component {


    constructor(props) {
        super(props);
        this.state = {
            itemsValue: null
        };

    }

    render() {


        var rows = [];
        this.props.items.forEach((itemvalue) => {
            var id = itemvalue.id;
            rows.push( <tr>
                <td className="hide">{itemvalue.id}</td>
                <td width="20%">{itemvalue.name}</td>
                <td width="40%">{itemvalue.description}</td>
                <td width="10%">{itemvalue.alcohol}</td>
                <td width="30%">{itemvalue.location}</td>
            </tr>);
        });


        return (
            <div className="container">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Beer Name</th>
                        <th>Description</th>
                        <th>Alcohol (%)</th>
                        <th>Brewery Location</th>
                    </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>


            </div>

        );

    }


}


export default TableBeer;
