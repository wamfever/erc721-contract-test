import React from 'react';

import './styles.scss';

const PageTitle = (props: any): JSX.Element => {

    const { title } = props;
    
    return (
        <div className="page-title">
            {title.toUpperCase()}
        </div>
    )
};

export default PageTitle;
