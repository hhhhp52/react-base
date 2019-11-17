import React from 'react';
import { connect } from 'react-redux';
import { Info }  from  '../../actions/index';


class Home extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
            loginBool: false,
        }
    }

    clickHandle = () => {
        this.setState({loginBool:!this.state.loginBool})
        this.props.Info()
    }

    render() {
        const  { info } = this.props
        return(
            <div>
                {this.state.loginBool? <button onClick={ () => this.clickHandle()}> {"Logout"} </button> :
                    <button onClick={ () => this.clickHandle()}> {"Login"} </button>}
                { this.state.loginBool ? <div>{info.data}</div> : <div>{"Please Login"}</div>}
            </div>
        )
    }
}

const mapStateToProps =  (state) =>{
    return {
        info : state.Info
    }
}
// getInfo 這邊是可以調用的action
// mapStateProps 要從store取得什麼
export default connect( mapStateToProps , { Info })(Home);