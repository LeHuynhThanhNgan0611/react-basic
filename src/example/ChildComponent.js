import React from "react";
import './Demo.scss'
  class ChildComponent extends React.Component {
    state = {
        showJobs : false
    }

    handleShowHide = (status)=>{
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnclickDelete = (job) => {
        console.log('>>> handleOnclickDelete: ', job)
        this.props.deleteAJob(job)
    }

    render() {
        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        let check = showJobs === true ? 'showJobs = true' : 'showJobs = false' ;
        console.log('>>> check conditional: ', check);
        return (
            <>
            {showJobs === false ?
                <div>
                    <button className="btn-show" 
                        onClick={()=> this.handleShowHide()}>
                        Show
                    </button>
                </div>
                :
               <>
                   <div className="job-lists">
                    {
                        arrJobs.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.title} - {item.salary} $
                                    <></> <span onClick={() => this.handleOnclickDelete(item)}>x</span>
                                </div>
                            )
                        })

                    }

                   </div>
                   <div><button onClick={()=> this.handleShowHide()}>Hide</button></div>
                </>
            }
            </>
        )
    }
  }
export default ChildComponent;