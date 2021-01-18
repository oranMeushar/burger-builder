import React from 'react';
import './Orders.css';
import Order from './Order/Order';
import Loader from '../../components/Loader/Loader';
import {connect} from 'react-redux';

class Orders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders:[],
            loading: false
        }
    }
   
    async componentDidMount(){
        try{
            this.setState({
                loading: true,
            })
            const data = await fetch('https://burgerbuilder-fa859-default-rtdb.firebaseio.com/orders.json?auth=' + this.props.token);
            const result = await data.json();
            const orders = [];
            if (!result.error) {
                for (const key in result) {
                    orders.push({
                        ...result[key],
                        id:key
                    });
                }             
            }
            this.setState({
                orders,
                loading: false
            });   
        }
        catch(e){
            this.setState({
                loading: false,
            })
        }  
    }
    render(){
        let loader = null;
        let orders = null;
        if(this.state.loading){
            loader = (<Loader/>)
        }
        if (this.state.orders.length > 0) {
            orders = this.state.orders.map((order) =>(
                <Order 
                    ingredients={order.ingredients}
                    totalPrice = {order.totalPrice}
                    key = {order.id}
                />
            )) 
        }
        return (
            <>
            {loader}
            {orders}
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        token: state.auth.token
    }
}

export default connect(mapStateToProps)(Orders);
