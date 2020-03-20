import styled from 'styled-components';
import logoPic from '../../static/img/logo.svg';

// 创建了一个headerwarpper的组件一哥div标签并带有样式
export const Head=styled.div`

`
export const HeaderWrapper = styled.div`
   position:fixed;
   bottom:827px
   height:60px;
   border-bottom:1px solid #f1f1f1;
   color:#909090;
   background-color:#fff;
`;
export const HeaderContainer = styled.div`
   max-width:960px;
   margin:0 472px 0 472px;
   position:relative;
   display:flex;
   top:0;
   bottom:0;
   left:0;
   right:0;
   font-size:12px;
   align-items:center;
`;

export const Logo = styled.div`
margin-right:24px;
   display:block;
   width:98px;
   height:38px;
//    webpack会把URL路径解析成字符串所以要使用变量的形式
   background:url(${logoPic });
   background-size:contain;
`;
export const Nav = styled.div`
    width:960px;
    height:60px;
    display:flex;
    align-items:center;
    margin:0 auto;
    padding-right:70px;
    box-sizing:border-box;
`;
export const NavItem = styled.div`
   line-height:60px;
   padding:0 18px;
   font-size:16px;
   color:#71777c;
   width:32px;
   height:60px;
//    如果是NavItem组件并且有left这个class那么就向左浮动
   &.left{
       float:left;
   }
   &.right{
       float:right;
      color: #71777c;
   }
   &.active{
       color: #007fff;
   }
`;
export const SearchWrapper = styled.div`
position:relative;
margin-left:148px;
border: 1px solid hsla(0,0%,59.2%,.2);
background-color:rgba(227,231,236,.2);
width:154px;
height:30px;
float:right;
border-radius:2px;
// 让子元素垂直居中
display:flex;
align-items:center;
`;
export const NavSearch = styled.input.attrs( {
    placeholder: '搜索掘金'
} )`
    width:96px;
    height:16px;
    padding:7.2px 12px;
    line-height:30px;
    box-sizing:border-box;
    box-shadow:none;
    border:none;
    outline:none;
    background:transparent;
    font-size:13px;
    color:#666;
    &::placeholder{
        color:#666;
    }
    &.focused {
        border:1px solid #007fff;
        background:#fff;
    }
`;
export const BarWrapper=styled.div`
position:relative;
top:61px;
height:46px;
background-color:#fff;
border-bottom:1px solid #f1f1f1;
display:flex;
align-items:center;
`;
export const Bar=styled.div`
max-width:960px;
margin:0 auto;
`;
export const Ul=styled.ul`
width:960px;
height:100%
`;
export const Li=styled.li`
display:inline-block;
font-size:14px;
padding:0 12px;
color:#71777c;
 &.left{
     float:left;
 }
 &.right{
     float:right;
 }
 &.active{
    color: #007fff;
 }
`;
