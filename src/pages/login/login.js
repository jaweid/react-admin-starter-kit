import React from 'react';
import './login.css';
import img from '../../assets/img/2.jpg';
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import BGParticle from '../../utils/BGParticle'

const FormItem = Form.Item;

class LoginFormContent extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('username', {
                        rules: [{required: true, message: '请输入用户名!'}],
                    })(
                        <Input prefix={<Icon type="user" style={{color: '#ffffff'}}/>}
                               placeholder="用户名"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{required: true, message: '请输入密码!'}],
                    })(
                        <Input prefix={<Icon type="lock" style={{color: '#ffffff'}}/>} type="password"
                               placeholder="密码"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox className='remember-me text-white'>请记住我</Checkbox>
                    )}
                    <a className="login-form-forgot text-white" href="">忘记密码？</a>
                    <Button ghost htmlType="submit" className="login-form-button text-white">
                        登录
                    </Button>
                    <a href="" className='text-white'>现在注册!</a>
                </FormItem>
            </Form>
        )
    }
}

const LoginForm = Form.create()(LoginFormContent);

class Login extends React.Component {

    componentWillUnmount(){
        this.particle.destory();
    }
    componentDidMount() {
        this.particle = new BGParticle('backgroundBox');
        this.particle.init();
    }

    render() {
        return (
            <div>
                <img className='img' src={img} alt={img}/>
                <div id='backgroundBox' style={styles.backgroundBox}>
                </div>
                <div className='login-container'>
                    <h3 className='title text-white'>管理员登录</h3>

                    <LoginForm></LoginForm>

                    <div className='footer text-white'>
                        <div>这是一个感受React开发体验的美好项目</div>
                    </div>

                </div>

            </div>

        )
    }
}

const styles = {
    backgroundBox: {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        transition: 'all .5s'
    }
}

export default Login;