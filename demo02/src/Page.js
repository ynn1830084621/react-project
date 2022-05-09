import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useHistory } from 'react-router-dom';

class Login extends PureComponent {
    handleLogin = () => {
        //使用编程式导航实现路由跳转
        this.props.history.push('/home')
    }
    render() { 
        return ( 
            <div>
                <p>登录页面：</p>
                <button onClick={this.handleLogin}>登录</button>
            </div>
        );
    }
}
const Home = () => (
    <div>
        <h2>我是后台首页</h2>
    </div>
)

const Page = () => (
    <Router>
        <div>
            <Link to='/login'>去登录页面</Link>
            <Routes>
                <Route path='/login' exact element={<Login />} />
                <Route path='/home' element={<Home />} />
            </Routes>
        </div>
    </Router>
)

export default Page;
