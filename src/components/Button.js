import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ color, text, onClick }) => {
    return (
        <div>
            <button
                onClick={ onClick }
                style={{ backgroundColor: color }}
                className='btn'
            >
                { text }
            </button>
        </div>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string, 
    color: PropTypes.string,
    onCLick: PropTypes.func,
}

export default Button
