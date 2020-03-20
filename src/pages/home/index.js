import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from './components/List';
import Recommends from './components/Recommends';
import Writer from './components/Writer';
import { actionCreators } from './store'
import {
    HomeWrapper, HomeLeft, HomeRight, BackTop
} from './style';
class Home extends Component {

    handleScrollTop () {
        window.scrollTo( 0, 0 );
    }

    // UI组件
    render () {
        return (
            <HomeWrapper >
                <HomeLeft>
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommends />
                    <Writer />
                </HomeRight>
                {/* 如果showScroll为true，我们现实返回顶部这个小组件 */ }
                { this.props.showScroll ? <BackTop onClick={ this.handleScrollTop }>回到顶部</BackTop> : null }

            </HomeWrapper >
        )
    }
    // 容器组件

    componentDidMount () {
        this.props.changeHomeData();
        this.bindEvents();
    }
    bindEvents () {

        window.addEventListener( 'scroll', this.props.changeScrollTopShow )
    }
    // 当组件销毁之后，对应的事件解绑
    componentWillUnmount () {
        window.removeEventListener( 'scroll', this.props.changeScrollTopShow )
    }
}

const mapState = ( state ) => ( {
    showScroll: state.getIn( [ 'home', 'showScroll' ] )
} )


const mapDispatch = ( dispatch ) => ( {
    changeHomeData () {
        const action = actionCreators.getHomeInfo();
        dispatch( action );
    },
    changeScrollTopShow () {
        if ( document.documentElement.scrollTop > 100 ) {
            dispatch( actionCreators.toggleTopShow( true ) )
        } else {
            dispatch( actionCreators.toggleTopShow( false ) )
        }
    }
} );

export default connect( mapState, mapDispatch )( Home );