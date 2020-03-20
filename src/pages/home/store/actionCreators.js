import axios from 'axios';
import { constants } from '../store';
import { fromJS } from 'immutable';
const changeHomeData = ( result ) => ( {
    type: constants.CHANGE_HOME_DATA,
    
    articleList: result.articleList,
    recommendList: result.recommendList
} )
const addHomeList = ( list, nextPage ) => ( {
    type: constants.ADD_ARTICLE_LIST,
    // 我们接收的是普通js对象，所以要把它转换为immutable对象
    // 使用List方法这能把最外层转换为immutable
    list: fromJS( list ),
    nextPage
} )

export const getHomeInfo = () => {
    return ( dispatch ) => {
        axios.get( 'api/home.json' ).then( ( res ) => {
            const result = res.data.data;
            dispatch( changeHomeData( result ) );
        } )
    }
}

export const getMoreList = ( page ) => {
    return ( dispatch ) => {
        axios.get( 'api/homeList.json?page=' + page ).then( ( res ) => {
            const list = res.data.data;
            dispatch( addHomeList( list, page + 1 ) );
        } );
    }
}

export const toggleTopShow = ( show ) => ( {
    type: constants.TOGGLE_SCROLL_TOP,
    show
} )