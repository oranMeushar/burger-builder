import React from 'react';
import Loader from '../../components/Loader/Loader';
import './ContactData.css';
import {connect} from 'react-redux';

class ContactData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orderForm:{
                name:'',
                email:'',
                city:'',
                street:'',
            },
            isLoading:false
        }
    }

    submitHandler = async(e) =>{
        e.preventDefault();
        try{
            this.setState({
                isLoading:true
            });
            await fetch('https://burgerbuilder-fa859-default-rtdb.firebaseio.com/orders.json?auth='+this.props.token,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({
                    ingredients:this.props.ingredients,
                    totalPrice:this.props.totalPrice,
                    orderForm:this.state.orderForm
                })
            })
            this.setState({
                isLoading:false
            })
            this.props.history.push('/');
        }
        catch(e){
            this.setState({
                isLoading:false
            })
            console.log(e);
        }
    }

    handleChange = (e) =>{
        const orderForm = {...this.state.orderForm};
        orderForm[e.target.name] =e.target.value; 
        this.setState({
            orderForm
        })   
    }

    render() {
        let loader = null;
        if (this.state.isLoading) {
            loader = (<Loader/>)
        }
        return (
            <>
            {loader}
            <div className="form-container">
                <h1>Enter your contact data</h1>
                <form className="form-container-form" autoComplete='off' onSubmit={this.submitHandler}>
                    <label>
                        <input
                            required 
                            placeholder=" "
                            type="text" 
                            name = 'name' 
                            value={this.state.name} 
                            onChange={this.handleChange}/>
                        <span>Name</span>
                    </label>
                    <label>
                        <input
                            required 
                            placeholder=" "
                            type='email' 
                            name = 'email' 
                            value={this.state.email} 
                            onChange={this.handleChange}/>
                        <span>Email</span>
                    </label>
                    <label>
                        <input
                            required 
                            placeholder=" "
                            type="text" 
                            name = 'city' 
                            value={this.state.city}
                            onChange={this.handleChange}/>
                            <span>City</span>
                    </label>
                    <label>
                        <input
                        required 
                        placeholder=" "
                        type="text" 
                        name = 'street' 
                        value={this.state.street}
                        onChange={this.handleChange}/>
                        <span>street</span>
                    </label>    
                    <div className="buttons-wrapper">
                        <button type="submit" className="order">Order</button>    
                    </div>   
                </form>
            </div>
            </>
        );
    }
}

const mapStateToProps = ((state) =>{
    return{
        ingredients:state.burgerBuilder.ingredients,
        totalPrice:state.burgerBuilder.totalPrice,
        token:state.auth.token
    }
})


export default connect(mapStateToProps)(ContactData);