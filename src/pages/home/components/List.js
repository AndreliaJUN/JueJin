import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import {
    ListContainer,
    ListItem,
    ListTitle,
    ListAuthor,
    ListOther,
    LoadMore,
    Header,
    Nav,
    Ul,
    Li,
    LiOther,
    LiTop,
    UlOther,
    UlTop
} from '../style';
import { Link } from 'react-router-dom';
class List extends Component {
    render () {
        const { list, getMoreList, page } = this.props;
        return (
            <div>
                <Header>
                    <Nav>
                        <Ul>
                            <Link to='/'><Li className='active'>热门</Li></Link>
                            <Link to='/'><Li>最新</Li></Link>
                            <Link to='/'><Li>热榜</Li></Link>
                        </Ul>
                    </Nav>
                </Header>
                {
                    list.map( ( item, index ) => {
                        return (
                            <Link key={ index } to={ '/detail/' + item.get( 'id' ) }>
                                <ListContainer>
                                    <ListItem key={ index }>
                                        <ListAuthor>
                                            <UlTop>
                                                <Link to='/'><LiTop className='top zhuanlan'>专栏 Â·</LiTop></Link>
                                                <Link to='/'><LiTop className='top '>{ item.get( 'author' )+'Â·'}</LiTop></Link>
                                                <Link to='/'><LiTop className='top '>{ item.get( 'time' ) +'Â·'}</LiTop></Link>
                                                <Link to='/'><LiTop className='top '>{ item.get( 'tag' ) +'Â·'}</LiTop></Link>
                                            </UlTop>
                                        </ListAuthor>
                                        <ListTitle>
                                            <h3 className='title'> { item.get( 'title' ) }</h3>
                                        </ListTitle>
                                        <ListOther>
                                            <UlOther>
                                                <LiOther class='other'>{item.get('zan')}</LiOther>
                                                <LiOther class='other'>{item.get('pinglun')}</LiOther>
                                            </UlOther>
                                        </ListOther>
                                    </ListItem>
                                </ListContainer>
                            </Link>
                        )
                    } )
                }
                <LoadMore onClick={ () => getMoreList( page ) }>阅读更多</LoadMore>
            </div>
        )
    }
}

const mapState = ( state ) => ( {
    list: state.get( 'home' ).get( 'articleList' ),
    page: state.getIn( [ 'home', 'articlePage' ] )
} )
const mapDispatch = ( dispatch ) => ( {
    getMoreList ( page ) {
        const action = actionCreators.getMoreList( page );
        dispatch( action );
    }
} )
export default connect( mapState, mapDispatch )( List );