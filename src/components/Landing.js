import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Landing extends Component {

    render() {
        const users=this.props.users
        
        return (
            <div className='users'>
                <div className='who'>Who is Watching ?</div>
                {users.map(u=><Link  to="/catalog" className='user' style={{backgroundColor:u.color}}>{u.name}</Link>)}
                
            </div>
        );
    }
}

export default Landing;