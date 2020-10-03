import React,{Component} from "react";
import {connect} from 'react-redux'
import {decrement, increment} from "../actions";
class LemonadeStore extends Component{
    constructor(props) {
    super(props);
    this.state = {amount: 0, type: ''}

    }


    render() {
        return (

            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                }}>
                    <label htmlFor="amount">amount</label>
                    <button onClick={() => this.props.decrement()}>-</button><input type="text" id="amount"/><button onClick={() => this.props.increment()}>+</button>
                    <select>
                        <option
                        value="small"
                        >Small</option>
                        <option
                            value="medium"
                        >Medium</option>
                        <option
                        value="large"
                        >Large</option>

                    </select>
                </form>
            </div>
        );
    }
}

const mapStateToProps = dispatch => {
    return {
        increment: () =>  dispatch(increment()),
        decrement: () => dispatch(decrement())
    }
}

export default connect(null, mapStateToProps)( LemonadeStore);
