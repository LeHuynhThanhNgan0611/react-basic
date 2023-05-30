import React from "react";
class AddComponent extends React.Component{
    state={
        titleJob: '',
        salary: '',
    }
    handleChangetitleJob = (event) => {
        this.setState({
            titleJob: event.target.value
        })
    }
    handleChangesalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log('>>> check data input: ', this.state);
    }
    render(){
        return(
            <form>
                <label for="fname">Job's title </label><br />
                <input type="text" value={this.state.titleJob}
                onChange={(event) => this.handleChangetitleJob(event)} />
                <br />
                <label for="lname">Salary:</label><br />
                <input type="text" value={this.state.salary}
                onChange={(event) => this.handleChangesalary(event)} />
                <br /><br />
                <input type="submit"
                onClick={(event) => this.handleSubmit(event)} />
            </form>
        )
    }

}

export default AddComponent;