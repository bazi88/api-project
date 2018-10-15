import React, { Component } from 'react';
class Link extends Component {
    constructor(props){
        super(props);
        console.log(this.props.match.params.link);
    }
    
    render(){
        return(
            <div>asdasdasas</div>
        )
    }
}
export default Link;