import React, {Component} from 'react';


export default class Ns3ProgramListingComponent extends Component {

    render() {
        const data = this.props.data;

        return (
            <>
                {data
                    ? JSON.stringify(data, null, 4) //<ul>{this.props.data.map(s => (<li>{s}</li>))}</ul>
                    : ""
                }
            </>
        );
    }
}
