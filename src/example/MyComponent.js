import React from "react";
class MyComponent extends React.Component {

    // key: value
    state = {
        name: "Lê Huỳnh Thanh Ngân",
        channel: "Hoi Dan IT"
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleClickButton = () => {
        console.log("hit a button");
        alert('Click me')
    }
    /*Comment
    JSX => return block
    fragment
    state: dữ liệu có thể thay đổi, ngay lập tức cập nhật dữ liệu ngay lập tức không cần refersh lại
    */
    render() {
        return (
            <>
                <div className="first">
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)} />
                    My name is {this.state.name}
                </div>
                <div className="second">
                    Youtube chanel : {this.state.channel}
                </div>
                <div className="third">
                    <button onClick={() => this.handleClickButton()}>Click me</button>
                </div>
            </>
        )
    }
}

export default MyComponent;