import React from 'react';
import Logo from '../Todo/preview.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import './Landing.css';

class Landing extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: "login",
            signInUp: "Join us now. Sign Up."
        };
    }

    aFunctionCall = (data) => {
        this.props.changeLogin(data);
    }

    changeText = () => {
        if(this.state.visible === "login") {
            this.setState({
                visible: "signup",
                signInUp: "Already a member?  Sign In."
            });
        } else {
            this.setState({
                visible: "login",
                signInUp: "Join us now.  Sign Up."
            });
        }
    }
    
    render() {

        const dark = {
            background: "#222",
            color: "white"
        }

        const light = {
            color: "#555",
            background: "white"
        }

        return (
            <Container className="landing" style={this.props.isDark === true ? dark : light} fluid>
                <Row>
                    <Col md={7} className="image my-auto">
                        <h1 className="text-center">Declutter Your Schedule</h1>
                        <Image src={Logo} fluid></Image>
                        <h5 className="text-center">Your Busy Life Deserves This</h5>
                    </Col>
                    <Col md={5} className="sign my-auto">
                        <h2>Welcome, Let's Get Started.</h2>
                        <p onClick={() => this.changeText()}>{this.state.signInUp}</p>
                        {this.state.visible === "login" ?
                            <Login 
                                loggedIn={this.props.loggedIn}
                                isDark={this.props.isDark}
                                aFunctionCall={this.aFunctionCall}
                                authToken={this.props.authToken}
                            /> :
                            <SignUp 
                                loggedIn={this.props.loggedIn}
                                isDark={this.props.isDark}
                            />}
                        
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Landing;