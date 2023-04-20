import React from "react";
class MyComponent extends React.Component {

    // key: value
    state = {
        name: "",
        channel: "Hỏi Dân IT"
    }

    handleOnChangeName = (event) => {
        console.log(event.target.value, 'event target: ', event.target, 'event object', event);
        // this.state.name = event.target.value // bad code

        // merge
        this.setState({
            name: event.target.value,
        }) // cú pháp thay đổi state
    }

    handleClickButton = () => {
        alert('Click me')
    }
    /*Comment
    JSX => return block
    fragment
    state: dữ liệu có thể thay đổi, ngay lập tức cập nhật dữ liệu ngay lập tức không cần refersh lại
    */
    // re-render:
    render() {
        console.log('>>> call render: ', this.state);
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