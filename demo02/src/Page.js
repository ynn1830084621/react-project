import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

const Login= () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        //使用编程式导航实现路由跳转
        console.log(navigate)
        navigate('/home')
    }
    return ( 
        <div>
            <p>登录页面：</p>
            <button onClick={() => handleLogin()}>登录</button>
        </div>
    );
}
const Home = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        // props.history.go(-1);
        navigate(-1)
    }
    return(
        <div>
            <h2>我是后台首页</h2>
            <button onClick={() => handleBack()}>返回登录页面</button>
        </div>
    )
    
}

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
