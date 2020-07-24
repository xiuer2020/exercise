import React, {
    Component, useState
} from 'react';
import propTypes from 'prop-types'
function ComponentA(props) {
    const [count,setCount] = useState(0);
    
    
    return (
        <div>
            <h3>我是组件A</h3>
            <p>count: {count}</p>
            <button onClick={() => setCount(count+1)}>btn</button>
            <button onClick={() => setCount(prevCount => prevCount+1)}>btn</button>
        </div>
    )
}
ComponentA.propTypes = {
    propA: function(props,propName,componentName) {
        // 自定义验证规则接受三个参数
        // 参数一 组件的props对象
        // 参数二 当前属性名
        // 参数三 当前组件名
        // 这里就可以写一些验证规则
        
        
       if(/fuck/ig.test(props[propName])) {
           return new Error(`失败的属性传参: 在${componentName}中属性${propName}包含敏感词汇!`)
       }
    }
}
// class ComponentA extends Component {
//     constructor(props) {
//         super(props);
//         
//         this.state = {
//             count: 1
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <h3>我是组件A</h3>
//                 <p>count: {count}</p>
//                 <button onClick={() => {this.setState({count: this.state.count + 1})}}>btn</button>
//             </div>
//         )
//     }
// }

export {
    ComponentA
};