import './filterForm.scss';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import useMarvelService from '../../services/MarvelService';

const FilterForm = () => {

    const [char, setChar] = useState(null);

    const {clearError, getCharacter, process} = useMarvelService();

    const onCharLoaded = char => {
        setChar(char);
    }

    const onSubmit = value => {
        setChar(null);
        clearError();
        getCharacter(value, 'name')
            .then(onCharLoaded);
    }

    return (
        <Formik
            initialValues= {{
                name: ''
            }}
            validationSchema = {Yup.object({
                name: Yup.string()
                        .min(2, 'Too short name')
                        .required('This field is required'),
            })}
            onSubmit={value => onSubmit(value.name)}
            >
            <Form className="filterForm"
                >
                <label className="filterForm__text">Or find a character by name:</label>
                <Field
                    placeholder="Enter name"
                    name="name"
                    id="name"
                    onKeyUp={(e) => {
                        if (e.target.value === '') {
                            setChar(null);
                        }
                    }}
                    />
                <button type="submit" 
                        disabled={process === 'loading'} 
                        className="button button__main">
                    <div className="inner">{process === 'loading' ? 'loading' : 'FIND'}</div>
                </button>
                {!char ? null : char.name ? 
                    <>
                        <div style={{
                                "width": "250px", 
                                "color" : "#03710E", 
                                "marginRight": "24px"
                            }} 
                            className="filterForm__message filterForm__text">
                            There is! Visit {char.name} page?
                        </div>
                        <Link to={`/characters/${char.id}`} className="button button__secondary"><div className="inner">TO PAGE</div></Link>
                    </> : 
                    <div className="filterForm__message filterForm__text">
                        The character was not found. Check the name and try again
                    </div>}
                {process === 'error' ? <div className="filterForm__message filterForm__text">Something went wrong!</div> : null }
                <ErrorMessage className="filterForm__text filterForm__message" name="name" component="div"/>
            </Form>
        </Formik>
    )
}

export default FilterForm;