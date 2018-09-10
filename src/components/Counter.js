import React, { Component } from 'react';

class Counter extends Component {
    state = {numberOfItemsInCart};
    render(){
        return(
            <div>
                <button onClick={()=>{
                    let newCount = this.state.numberOfItemsInCart + 1;
                    this.setState({currentCount:numberOfItemsInCart});
                }}>Add to Cart</button>
                </div>
                )
    }
}



export default Counter;