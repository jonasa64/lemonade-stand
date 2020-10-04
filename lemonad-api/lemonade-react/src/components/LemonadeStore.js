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
                                <div>
                                    <p>{`you bought ${this.props.amount} of type ${this.props.type} for a total price of $${this.props.price}`}</p>
                                </div>

                            <h1>Our total amount of lemons is : {this.props.getTotalLemons()} {this.props.lemons}</h1>

                            <button className="btn btn-primary" onClick={() => this.handelClick() }>View order</button>
                            <form onSubmit={(e) => {
                    e.preventDefault();
                    this.props.buy(this.state);
                }}>
                                <div className="form-group">
                                    <label htmlFor="amount">amount</label>
                                    <input className="form-control" type="text" id="amount" value={this.state.amount} onChange={this.handleChange}/>
                                </div>
<div className="form-group">
    <select className="form-control" value={this.state.type} onChange={this.handleSelectChange}>
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
</div>

                    <button className="btn btn-primary">Buy</button>
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
