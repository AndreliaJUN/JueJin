import styled from 'styled-components';

export const HomeWrapper = styled.div`
   overflow:hidden;
   width:960px;
   margin: auto;
   margin-top:76px;
`;
export const HomeLeft = styled.div`
  float:left;
  width:700px;
  background-color:#fff;

`;
export const HomeRight = styled.div`
   width:208px;
   float:right;
   background-color:#fff;
   padding:12px 15.6px;
`;
export const Header = styled.div`
   height:14px;
   padding: 15.6px 12px;
   border-bottom: 1px solid hsla(0,0%,59.2%,.1);
   display: flex;
justify-content: flex-start;
align-items: center;
`;
export const Nav = styled.div`

`;
export const Ul = styled.ul`

`;
export const Li = styled.li`
display:inline-block;
font-size:14px;
color: #909090;
line-height:14px;
padding:0 14.4px;
border-right: 1px solid hsla(0,0%,59.2%,.2);
&.active{
    color: #007fff;
}
`;
export const ListContainer = styled.div`
width:652px;
padding:18px 24px;
border-bottom: 1px solid rgba(178,186,194,.15);

`;
export const ListItem = styled.div`

`;
export const ListTitle = styled.div`

margin:6px 0 12px 0;
.title{
    line-height:27px;
    font-size:18px;
    font-weight:bold;
    color: #2E3135;
}
`;
export const ListAuthor = styled.div`

`;
export const ListOther = styled.div`

`;
export const LiTop=styled.li`
display:inline-block;
font-size:12px;
color:#B2BAC2;
margin-right:7px;
&.zhuanlan{
    font-weight: 500;
    color: #b71ed7;
}
`;
export const LiOther=styled.li`
display:inline-block;
border: 1px solid #edeeef;
font-size:13px;
color: #b2bac2;
margin-left: 2.6px;
font-weight: 700;
`;
export const UlTop=styled.ul`

`;
export const UlOther=styled.ul``;
export const RecommendWrapper = styled.div`
   margin:30px 0;
   width:280px;
`;
export const RecommendItem = styled.div`
width:208px;
height:50px;
margin-bottom:6px;
background:url(${( props ) => props.imgUrl });
background-size:contain;
`;
export const WriterWrapper = styled.div`
  width:208px;
  border:1px solid #dcdcdc;
  border-radius:3px;
  height:300px;
  line-height:300px;
  text-align:center；
`;
export const LoadMore = styled.div`
width:100%;
height:40px;
line-height:40px;
margin:30px 0;
background:#a5a5a5;
text-align:center;
border-radius:20px;
color:#fff;
fonr-size:14px;
cursor:pointer;
 `;
export const BackTop = styled.div`
position:fixed;
right:100px;
bottom:100px;
width:60px;
height:60px;
line-height:60px;
text-align:center;
border:1px solid #ccc;
font-size:14px;
`;

