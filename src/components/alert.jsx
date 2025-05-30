import React from 'react'

export default function Alert(props) {
    return (
        <div style={{height:'50px'}}>
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                {props.alert}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
    )
}
