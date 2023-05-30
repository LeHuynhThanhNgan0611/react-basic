import React from "react";
class ChildComponent extends React.Component {

    state = {
        firstName: '',
        lastName: '',
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
        console.log('>>> check props', this.props);
        // const name = this.props.name;
        // const age = this.props.age;
        let { name, age, address, arrJobs } = this.props;
        return (
            <>
            <div className="job-lists">
                    {
                        arrJobs.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.title} - {item.salary}
                                </div>
                            )
                        })

                    }

                </div>
            </>
        )
    }
}

export default ChildComponent;