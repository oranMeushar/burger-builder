import React from 'react';
import './Auth.css';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/auth';
import Loader from '../../components/Loader/Loader';

class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo:{
                email:null,
                password:null,
            },
            isSignIn:true,
            isLoading:false, 
            error:{
                val:null,
                message:''
            }  
        }
    }

    handleChange = (e) =>{
        const userInfo = {...this.state.userInfo};
        userInfo[e.target.name] = e.target.value
        this.setState({
            ...this.state,
            userInfo: userInfo,
        })   
    }

    handleSubmit = async(e) =>{
        e.preventDefault();
        let url = null;
        if (this.state.isSignIn) {
            url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBVX4qKr0ur56BoM9JsOuRG_WiLx6EcF2M`
        }
        else{
            url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBVX4qKr0ur56BoM9JsOuRG_WiLx6EcF2M`
        }

        try {
            this.setState({
                isLoading:true
            });
            const data = await fetch(url, {
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({
                    ...this.state.userInfo,
                    returnSecureToken:true
                }),
            })
            this.setState({
                isLoading:false
            })
            const result = await data.json();
            if (result.error) {
               this.setState({
                   error:{val:true,message:result.error.message}
               }) 
            }
            else{
                this.props.onSuccess(result.idToken, result.localId);
                localStorage.setItem('token',result.idToken);
                this.props.history.push('/');
            }
            

        } catch (error) {
            this.setState({
                isLoading:false
            });
            console.log(error);
        }    
    }

    handleSwitchButton = () =>{
        this.setState({
            isSignIn:!this.state.isSignIn, 
        })
    }

    render(){
        let loader = null;
        let errorMessage = null;
        if (this.state.isLoading) {
            loader = (<Loader/>)
        }
        if (this.state.error.val) {
            errorMessage = <p className="auth-error-message">{this.state.error.message}</p>
        }
        return(
            <>
            {loader}
            {errorMessage}
            <div className="form-container">
                <p>Sign {this.state.isSignIn?"in":"up"} with your email and password</p>
                <form className="form-container-form" autoComplete="off" onSubmit={this.handleSubmit}>
                    <label>
                        <input 
                            placeholder=" "
                            type="text" 
                            name = 'email' 
                            value={this.state.email} 
                            onChange={this.handleChange}
                            required/>
                        <span>Email</span>
                    </label>
                    <label>
                        <input 
                        placeholder=" "
                        type="password" 
                        name = 'password' 
                        value={this.state.password}
                        onChange={this.handleChange}
                        required/>
                        <span>Password</span>
                    </label>  
                    <div className="buttons-wrapper">
                        <button type="submit" className="form-container-submit">sign {this.state.isSignIn?"in":"up"}</button>
                    </div>   
                </form>
                <button 
                    onClick={this.handleSwitchButton}
                    className="form-container-switch">Switch to sign {this.state.isSignIn?"up":"in"}</button>
            </div> 
            </>  
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        error:state.auth.error
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        onSuccess:(token, userId)=>dispatch(actions.success(token, userId)), 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);