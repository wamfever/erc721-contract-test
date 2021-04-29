import React from 'react';

import './styles.scss';

const FormTitle = (props: any): JSX.Element => {

    const { title } = props;
    
    return (
        <div className="form-title">
            {title.toUpperCase()}
        </div>
    )
};

export default FormTitle;
