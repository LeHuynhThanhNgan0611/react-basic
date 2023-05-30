import React from "react";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        arrJobs: [
            { id: 'abcJob1', title: 'Developers', salary: '500 $' },
            { id: 'abcJob2', title: 'Testers', salary: '400 $' },
            { id: 'abcJob3', title: 'Project managers', salary: '1000 $' }
        ]
    }

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        alert('click me')
    }

    render() {
        return (
            <>
                <form>
                    <label for="fname">First name:</label><br />
                    <input type="text" value={this.state.firstName}
                        onChange={(event) => this.handleChangeFirstName(event)} />
                    <br />
                    <label for="lname">Last name:</label><br />
                    <input type="text" value={this.state.lastName}
                        onChange={(event) => this.handleChangeLastName(event)} />
                    <br /><br />
                    <input type="submit"
                        onClick={(event) => this.handleSubmit(event)} />
                </form>
                <ChildComponent 
                    name={this.state.firstName}
                    age={21}
                    address={'Ha noi'}
                    arrJobs={this.state.arrJobs}
                ></ChildComponent>
            </>
        )
    }
}

export default MyComponent;