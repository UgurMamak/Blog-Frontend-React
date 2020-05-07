import React, { Component } from 'react'

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//actions
import * as userActions from "../../redux/User/UserActions";

class ResimGetir extends Component {

    componentDidMount()
    {
        this.props.actions.getImage()
    }

    render() {
        return (
            <div>
              
              {console.log(this.props.user)}
              <img style={{"width":"200px", "height":"200px"}} accept="image/x-png,image/gif,image/jpeg" src={this.props.user} />


            </div>
        )
    }
}

function mapStateToProps(state) {
    //parametrelere bak ve productId'yi çek demek
    //const productId = ownProps.match.params.productId;
    return {
      user: state.SaveUserReducer, // post ve put işlemi
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      actions: {
        getImage: bindActionCreators(userActions.getResim, dispatch),
      },
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ResimGetir);