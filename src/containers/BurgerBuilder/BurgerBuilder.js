import React from 'react';
import './BurgerBuilder.css';
import PanelButtons from '../../components/PanelButtons/PanelButtons';
import Burger from '../../components/Burger/Burger';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/burgerBuilder';

class BurgerBuilder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showSummary:false,
        };
    }

    orderButtonHandler = () =>{
        if (this.props.isAuth) {
            this.setState({
                showSummary:true
            })
        }
        else{
            this.props.history.push('/auth');
        }    
    }

    backDropHandler = (e) =>{
        if (e.target.className.includes('OrderSummary-wrapper')
        || e.target.className.includes('OrderSummary-cancle')){
            this.setState({
                showSummary:false
            })
        }
    }
    
    sendOrderHandler =  (async(e) =>{        
        this.props.history.push('/check-out');
    })

    render() {
        const buttons = [];

        for (const key in this.props.ingredients) {
            buttons.push(
                <PanelButtons
                    title = {key}
                    key = {key}
                    clicked = {(e)=>this.props.chooseIngredients(e)}
                    disabled = {this.props.ingredients[key].count === 0}
                />
            )
        }
        
        return (
            <div className="BurgerBuilder">
                <Burger 
                    ingredients = {this.props.ingredients}
                />
                <OrderSummary 
                    clicked = {this.backDropHandler}
                    continued = {this.sendOrderHandler}
                    show = {this.state.showSummary}
                    ingredients = {this.props.ingredients}
                    totalPrice = {this.props.totalPrice}
                />
                <h1 
                    className = "BurgerBuilder-price">
                    Currnt price: ${this.props.totalPrice}
                </h1>
                {buttons}
                <button
                    className = "BurgerBuilder-orderButton"
                    onClick = {this.orderButtonHandler}
                    disabled = {this.props.totalPrice === 5}
                    >{this.props.isAuth?'Order Now':'Sign up to order'}
                </button> 
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        ingredients:state.burgerBuilder.ingredients,
        totalPrice:state.burgerBuilder.totalPrice,
        isAuth:state.auth.token !== null,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        chooseIngredients:(e)=>dispatch(actions.chooseIngredients(e)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);