import React from 'react';
import CheckOutSummary from '../../components/CheckOutSummary/CheckOutSummary';
import ContactData from '../ContactData/ContactData';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

class Checkout extends React.Component {
    cancleButtonHandler = (e) => {
        this.props.history.goBack();
    }

    checkOutContinue = (e) => {
        this.props.history.replace('/check-out/contact-data');
    }

    render(){
        return(
            <div className="CheckOut">
                <CheckOutSummary
                    checkOutCancle = {this.cancleButtonHandler}
                    checkOutContinue = {this.checkOutContinue}
                    ingredients = {this.props.ingredients}
                />
                <Route   
                    path={this.props.match.path + '/contact-data'}
                    component = {ContactData}
                />
            </div>  
        )
    }
}

const mapStateToProps = ((state) =>{
    return{
        ingredients:state.burgerBuilder.ingredients,
        totalPrice:state.burgerBuilder.totalPrice,
    }
})

export default connect(mapStateToProps)(Checkout);