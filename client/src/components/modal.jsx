import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        // console.log(this.state, "app state")
        return (
            <div>
            <div className="alex-app"></div>
            <div className='modal-root'> </div>
            <div className="roohan-modal">
            </div>
            </div>
        )
    }
}

export default App;