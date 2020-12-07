import React from 'react'
import {Menu} from 'antd'
import {Link} from "react-router-dom";
class Header extends React.Component{
    state={
        curr:this.props.tab
    }
    render(){
        return(
            <>
                <Menu selectedKeys={this.state.curr} mode="horizontal" theme="dark">
                    <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/therapists">Therapists</Link></Menu.Item>
                    <Menu.Item key="3"><Link to="/diagnostics">Diagnostics</Link></Menu.Item>
                    <Menu.Item key="4"><Link to="/events">Events</Link></Menu.Item>
                    <Menu.Item key="5"><Link to="/news">News</Link></Menu.Item>
                    <Menu.Item key="6"><Link to="/QnA">QnA</Link></Menu.Item>
                    <Menu.Item key="7"><Link to="/login">Login</Link></Menu.Item>
                    <Menu.Item key="8"><Link to="/signup">Signup</Link></Menu.Item>
                </Menu>
            </>
        )
    }
}
export default Header