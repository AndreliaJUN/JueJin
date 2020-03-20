import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import {
    Head,
    HeaderWrapper,
    HeaderContainer,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    SearchWrapper,
    Bar,
    Ul,
    Li,
    BarWrapper
} from './style';
import { Link } from 'react-router-dom';
class Header extends Component {

    render () {

        const { focused, login } = this.props;

        return (
            <Head>
                <HeaderWrapper>
                    <HeaderContainer>
                        <Link to='/'>
                            <Logo />
                        </Link>
                        <Nav>
                            <Link to='/'><NavItem className='left active'>首页</NavItem></Link>
                            <Link to='/'><NavItem className='left'>沸点</NavItem></Link>
                            <Link to='/'><NavItem className='left'>话题</NavItem></Link>
                            <Link to='/'><NavItem className='left'>小册</NavItem></Link>
                            <Link to='/'><NavItem className='left'>活动</NavItem></Link>
                            <SearchWrapper>
                                <NavSearch
                                    className={ focused ? 'focused' : '' }
                                ></NavSearch>
                                <i className='iconfont'>&#xe62b;</i>
                            </SearchWrapper>
                            {
                                login ?
                                    <NavItem onClick={ this.props.logout } className='right'>退出</NavItem> :
                                    <Link to='/login'> <NavItem className='right'>登录</NavItem></Link>
                            }
                        </Nav>
                    </HeaderContainer>
                </HeaderWrapper>
                <BarWrapper>
                    <Bar>
                        <Ul>
                            <Link to='/'><Li className='left active'>推荐</Li></Link>
                            <Link to='/'><Li className='left'>关注99+</Li></Link>
                            <Link to='/'><Li className='left'>后端</Li></Link>
                            <Link to='/'><Li className='left'>前端</Li></Link>
                            <Link to='/'><Li className='left'>Android</Li></Link>
                            <Link to='/'><Li className='left'>iOS</Li></Link>
                            <Link to='/'><Li className='left'>人工智能</Li></Link>
                            <Link to='/'><Li className='left'>开发工具</Li></Link>
                            <Link to='/'><Li className='left'>代码人生</Li></Link>
                            <Link to='/'><Li className='left'>阅读</Li></Link>
                            <Link to='/'><Li className='right'>标签管理</Li></Link>
                        </Ul>
                    </Bar>
                </BarWrapper>
            </Head>
        )
    }
}

const mapStateToProps = ( state ) => {
    return {
        focused: state.get( 'header' ).get( 'focused' ),
        login: state.getIn( [ 'login', 'login' ] )
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        logout () {
            dispatch( loginActionCreators.logout() );
        }
    }
}
export default connect( mapStateToProps, mapDispatchToProps )( Header );