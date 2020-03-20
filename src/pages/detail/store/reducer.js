import { fromJS } from 'immutable';
import {constants} from '../store';
const defaultState = fromJS( {
   title:'这是一个标题',
   content:'<img src="https://upload-images.jianshu.io/upload_images/5348913-6f5750619a509cc6?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"/><p>fsadfsfas</p>'
} );

export default ( state = defaultState, action ) => {
    switch ( action.type ) {
      case constants.CHANGE_DETAIL:
          return state.merge({
              title:action.title,
              content:action.content
          })
        default:
            return state;
    }
}





