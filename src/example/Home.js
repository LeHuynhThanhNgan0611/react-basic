import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
class Home extends React.Component{
    componentDidMount(){
        setTimeout(()=> {
           this.props.history.push('/todo')
           // chuyển từ trang home sang trang todos sau 3s
        },3000) // function này sẽ được thực thi trong 3s
    } // giúp code có độ trễ  
    render(){
        return(
            <div>
                Hello world from Homepage with Lê Huỳnh Thanh Ngân &amp; Hoi Dan IT
            </div>
        )
    }
}
export default withRouter(Home);