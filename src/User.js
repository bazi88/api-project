import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class User extends Component {
    constructor(props){
        super(props);
        this.state = {
            user:[],
            link:[]
        }
    }
    componentDidMount(){
        fetch(`https://api.github.com/users/${this.props.match.params.username}`)
        .then(res =>res.json())
        .then(data=>{
            this.setState({
                user:[...this.state.user,data]
            })
        })
    }
    componentDidUpdate(prevProps, prevState){
        if(this.props.match.params.link !== prevProps.match.params.link){
            this.fetchApi();
        }
        
    }
    fetchApi(){
        fetch(`https://api.github.com/users/${this.props.match.params.username}/${this.props.match.params.link}`)
        .then(res =>res.json())
        .then(data=>{
            this.setState({
                link:data
            })
        })
    }
    render(){
        console.log(this.state.link);
        return(
            <div>
            <div className="list-user">
                {this.state.user.map((users,index)=>{
                    return(
                        <div className="warp-list" key={index}>
                        <div>
                            <h5>{users.name}</h5>
                            <img className="avatar_img" src={users.avatar_url} alt="avatar"/>
                        </div>
                        <div>
                            <ul>
                                <Link to={`${this.props.match.params.username}/repos`}><li>Number repos : {users.public_repos}</li></Link>
                                <Link to={`${this.props.match.params.username}/followers`}><li>Number follower : {users.followers}</li></Link>
                                <Link to={`${this.props.match.params.username}/following`}><li>Number following : {users.following}</li></Link>
                            </ul>

                        </div>
                        </div>
                    )
                })}
            </div>
            <div className="list-people">
                {this.state.link.map((people,index)=>{
                    if(!people.avatar_url){
                        return(
                            <ol key={index}>
                                <li>{people.name}</li>
                                <li><a href={people.clone_url}>Go to link github</a></li>
                                <li>{people.language}</li>
                            </ol>
                        )
                    }else{
                        return(
                            <ol key={index}>
                                <li><img src={people.avatar_url} alt="avatar"/></li>
                                <li>{people.login}</li>
                            </ol>
                        )
                    }
                })}
                
            </div>
            </div>
        )
    }
}
export default User