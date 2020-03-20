import React from 'react';
import Loadable from 'react-loadable';


const LoadableComponent = Loadable({
    // 这里的import是异步加载的新语法
  loader: () => import('./'),
  loading(){
      return <div>正在加载</div>
  }
});

// 返回一个无状态组件

export default()=><LoadableComponent/>
