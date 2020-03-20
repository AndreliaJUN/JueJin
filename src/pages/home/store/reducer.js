import { fromJS } from 'immutable';
import {constants} from '../store';
const defaultState = fromJS( {
    articleList: [],
    recommendList: [],
    articlePage:1,
    showScroll:false
} );

export default ( state = defaultState, action ) => {
    switch ( action.type ) {
        case constants.CHANGE_HOME_DATA:
            // 如何将一个js对象转换成immutable对象，使用fromJS方法
            // 一次合并多个属性使用merge方法
           return state.merge({

                articleList:fromJS(action.articleList),
                recommendList:fromJS(action.recommendList)
            })
            case constants.ADD_ARTICLE_LIST:
            return state.merge({
                articleList:state.get('articleList').concat(action.list),
                articlePage:action.nextPage
            })
            case constants.TOGGLE_SCROLL_TOP:
                return state.set('showScroll',action.show)
        default:
            return state;
    }
}





