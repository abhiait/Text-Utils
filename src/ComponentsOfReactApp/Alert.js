import React from 'react';

const Alert = (props) => {
    return (
        <div style={{height:'50px'}}>
            {props.alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
            <b>{props.alert.type}</b> : {props.alert.msg}
            {/* <strong>Holy guacamole!</strong> You should check in on some of those fields below. */}
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>}
        </div>
    );
}

export default Alert;
