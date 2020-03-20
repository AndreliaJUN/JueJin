import React, { Component } from 'react';
import { DetailWrapper, Header, Content } from './style';
import {connect}from 'react-redux';
import {withRouter} from 'react-router-dom';
import { actionCreators } from './store';
class Detail extends Component {
    render () {
        // 这样就可以拿到上一个页面传递进来的id
        // console.log(this.props.match.params.id);
        
        return (
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Content dangerouslySetInnerHTML={{__html:this.props.content}} />
            </DetailWrapper>
        )
    }
    componentDidMount(){
        this.props.getDetail(this.props.match.params.id);
    }
}
const mapState=(state)=>({
    title:state.getIn(['detail','title']),
    content:state.getIn(['detail','content'])
});
const mapDispatch=(dispatch)=>({
    getDetail(id){
        dispatch(actionCreators.getDetail(id));
    }
})
export default connect(mapState,mapDispatch)(withRouter(Detail));