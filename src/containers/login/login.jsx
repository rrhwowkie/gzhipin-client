/*
用户登陆的路由组件
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
class Login extends Component{
  render(){
    return(
      <div>Login</div>
    )
  }
}

export default connect()(Login)
/*
import React, {Component} from 'react'

export default class Login extends Component {
  render () {
    return (
      <div>login</div>
    )
  }
}
*/
