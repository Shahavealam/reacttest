import React from 'react';
class FirstComponent extends React.Component {
    render(){
        return (<h1>Hello {this.props.name}</h1>) 
    }
} 
// const FirstComponent = (props)=>{
//     return(<h1>Hello {props.name}</h1>)
// }

export default FirstComponent