import React, { Component } from 'react';
class Search extends Component {
    constructor(){
        super();
        this.state ={
          value:'',
          user:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
      }
      handleChange(e){
        this.setState({value:e.target.value});
      }
      submit(e){
        e.preventDefault();
        this.setState({
          user:this.state.value
        })
        this.props.history.push(`/users/${this.state.value}`)
      }
    render(){
        return(
            <div>
                        <form onSubmit={this.submit}>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </form>
            </div>
        )
    }
}
export default Search