import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS( {
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
} );

export default ( state = defaultState, action ) => {
    switch ( action.type ) {
        case constants.SEARCH_FOCUS:
            //  直接return就不会往下执行了所以不用break
            return state.set( 'focused', true );
        case constants.SEARCH_BLUR:
            return state.set( 'focused', false );
        case constants.CHANGE_LIST:
            // return state.set( 'list', action.data ).set( 'totalPage', action.totalPage );
            // 如果要设置多个值，多次set很不方便，state有一个merge方法
            // merge可以同时改变多个数据，性能更高
            return state.merge({
                list:action.data,
                totalPage:action.totalPage
            });
        case constants.MOUSE_ENTER:
            return state.set( 'mouseIn', true );
        case constants.MOUSE_LEAVE:
            return state.set( 'mouseIn', false );
        case constants.CHANGE_PAGE:
            return state.set('page',action.page)
        default:
            return state;
    }
}

 // defaultState已经是一个fromJS对象了又返回了一个普通对象，普通对象没有get方法
/**
 * export default  (state=defaultState,action)=>{
    if(action.type===constants.SEARCH_FOCUS){
        // immutable对象的set方法，会结合之前immutable对象的值
        // 和设置的值，返回一个新对象，它并没有修改state
        return state.set('focused',true);
        // return{
        //     focused:true
        // }
    }
    if(action.type===constants.SEARCH_BLUR){
        return state.set('focused',false);
    }
    if(action.type===constants.CHANGE_LIST){
        console.log(action);
        // 这里需要注意的点，defaultState里面的list已经是一个immutable数组了
        // 我们接受到的action.data是一个普通的数组直接这样赋值会出错，我们需要去
        // 创建action的地方把action.data也转换成immutable数组
        return state.set('list',action.data);
    }
  return state;
}

 */
