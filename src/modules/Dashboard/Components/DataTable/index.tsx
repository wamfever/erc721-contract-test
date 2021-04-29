import React from 'react';

import './styles.scss';

import { Table } from 'react-bootstrap';

const DataTable = (props: any): JSX.Element => {

    const { rows } = props;
    
    return (
        <div className="table-container">
            <div className="table-title">
                DATA TABLE
            </div>
            <Table responsive="lg">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Height</th>
                        <th>Hair Color</th>
                        <th>Eyes Color</th>
                        <th>Minted Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((rowData: any, index: number) => (
                        <tr key={index}>
                            {Object.keys(rowData).map((cellData: any, i: number) => {
                                return <td key={i}>{rowData[cellData]}</td>;
                            })}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
};

export default DataTable;
