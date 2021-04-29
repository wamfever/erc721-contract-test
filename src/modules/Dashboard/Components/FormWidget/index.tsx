import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import { FormTypes } from 'library/common/Types/enums';
import FormTitle from './FormTitle';

import './styles.scss';

interface IField {
    [key: string]: string
}

interface IProps{
    formDetails: {
        formTitle: string,
        formType: FormTypes,
        fields: Array<IField>,
        formFunc: any
    },
    handleSubmit: any
} 

interface IValue {
    [value: string]: string
}

const FormWidget = ( { formDetails, handleSubmit }: IProps ): JSX.Element => {  

    const { formTitle, formType, fields, formFunc } = formDetails;

    const [fieldsData, setFieldsData] = useState(fields);
    const [values, setValues] = useState<IValue>({});

    const fieldChanged = (fieldId: string, value: string) => {
        setValues((currentValues) => {
            currentValues[`${fieldId}`] = value;
            return currentValues;
        });

        setFieldsData(fieldsData => {
            return [...fieldsData];
        });
    };

    useEffect(() => {
        setValues(currentValues => {
            const newValues = fieldsData.reduce((obj, field) => {
                obj[field.controlId] = field.value;

                return obj;
            }, {});

            return Object.assign({}, newValues, currentValues);
        })
    }, [fieldsData])

    const resetForm = () => {
        setValues(currentValues => {
            return Object.assign({});
        })

        setFieldsData(fieldsData => {
            return [...fieldsData];
        });
    }

    const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const submitData = {...values};
        handleSubmit(formFunc, formType, submitData);
        resetForm();
    }

    return (
        <div className="widget-container">
            <div className="form-container">
                <FormTitle title={formTitle} />
                <Form onSubmit={formSubmit}>
                    {fieldsData.map((element, index) => (
                        <Form.Group key={index} controlId={element.controlId}>
                            <Form.Control
                                required
                                placeholder={element.label}
                                type={element.type || 'text'}
                                onChange={(e) => fieldChanged(element.controlId, e.target.value)}
                                value={values[element.controlId] || ''}
                                >
                            </Form.Control>
                        </Form.Group>
                    ))}
                    <Button variant="success" type="submit" block>
                        SUBMIT
                    </Button>
                </Form>
            </div>
        </div>
    )
};

export default FormWidget;
