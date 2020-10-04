import React,{Component} from "react";
import {connect} from 'react-redux'
import { buy, getTotalLemons, getOrder} from "../actions";
class LemonadeStore extends Component{
    constructor(props) {
    super(props);
    this.state = {amount: 0, type: 'medium', price: 0}

    }


    handleChange = (e) => {
        this.setState({amount: e.target.value})
    }

    handleSelectChange = (e) => {
        this.setState({type: e.target.value});
    }

    handelClick = () => {
        this.props.getOrder();
        return (
            <div>
                <p>{`you bought ${this.props.amount} of type ${this.props.type} for a total price of $${this.props.price}`}</p>
            </div>
        )
    }

    render() {
        return (
                        <div>

                            <h1>Our total amount of lemons is : {this.props.getTotalLemons()} {this.props.lemons}</h1>

                            <button onClick={() => this.handelClick() }>View order</button>
                            <form onSubmit={(e) => {
                    e.preventDefault();
                    this.props.buy(this.state);
                }}>
                    <label htmlFor="amount">amount</label>
             <input type="text" id="amount" value={this.state.amount} onChange={this.handleChange}/>
                    <select value={this.state.type} onChange={this.handleSelectChange}>
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
                    <button>Buy</button>
                </form>
            </div>
        );
    }
}

const mapStatToProps = state => {
    console.log(state);
    return {
        lemons : state.totalLemons,
        price: state.price,
        lemonUsed: state.lemonUsed,
        type: state.type,
        amount: state.amount
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buy : (data) => dispatch(buy(data)),
        getTotalLemons : () => dispatch(getTotalLemons()),
        getOrder: () => dispatch(getOrder())
    }
}

export default connect(mapStatToProps, mapDispatchToProps)( LemonadeStore);
