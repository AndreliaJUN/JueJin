import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { actionCreators } from './store';
import { Redirect } from 'react-router-dom';
class Login extends PureComponent {
    render () {
        const {loginStatus}=this.props;
        if(!loginStatus){
            return (
                <LoginWrapper>
                    <LoginBox>
                        {/* 通过ref，将这两个dom一个存在dom里面一个存在password里面 */ }
                        <Input placeholder='账号' ref={ ( input ) => { this.account = input } } />
                        <Input placeholder='密码' type='password' ref={ ( input ) => { this.password = input } } />
                        <Button onClick={ () => this.props.login( this.account, this.password ) }>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }else{
            return <Redirect to='/'/>
        }     
    }
}
const mapState = ( state ) => ( {
    // 注意这个数据不要和下面的方法重名了
   loginStatus:state.getIn(['login','login'])
} );
const mapDispatch = ( dispatch ) => ( {
    login ( accountElem, passwordElem ) {

        //   console.log(accountElem.value,passwordElem.value);//就是表单里输入的值
        dispatch( actionCreators.login( accountElem.value, passwordElem.value ) );
    }
} )
export default connect( mapState, mapDispatch )( Login );