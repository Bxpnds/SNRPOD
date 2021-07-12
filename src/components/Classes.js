import React, { Component } from 'react'
import { increment } from '../actions/templateActions';
import { connect } from 'react-redux';
class classComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
        }
    } 
    render(){
        return (
            <>
              <h1>{this.state.title}</h1>
              <h3>{this.props.count}</h3>
              <button onClick={this.props.increment}>Click to Update Global State</button>
            </>
        )
    }
}
// useSelector => mapStateToProps
const mapStateToProps = (state) => {
    return {
        count: state.template.counter
    }
}
// useDispatch => mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(increment(4))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(classComponent);