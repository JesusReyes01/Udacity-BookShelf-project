import React from 'react';

const NoResults = (props) => {

    return(
        <div className='no-result-block'>
            <div className='no-result-icon'></div>
            <div className='no-result-message'>
                <span>Sorry, we couldn't find any results matching</span>
                <span>`{props.search}`</span>
            </div>
        </div> 
        
    )
}

export default NoResults