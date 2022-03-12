import React, { Fragment } from 'react';

import Header from '../Header';
import styles from './Page.module.css';
import Form from '../../components/Form';
import Error from '../Error';
import Loader from '../Loader';
import Forecast from '../../components/Forecast';
import useFocast from '../../hooks/useForecast';

const Page = () => {
    const {isError, isLoading , forecast, submitRequest, resetForm} = useFocast();

    const onSubmit = value =>{
        submitRequest(value);
    };
    const backToSearch = () =>{
        resetForm();
    };
    return (
        <Fragment>
            <Header />
            {!forecast && (
            <div className={`${styles.box} position-relative`}>
                {/* Form */}
                {!isLoading && <Form submitSearch={onSubmit}/>}
                {/* Error */}
                {isError && <Error message={isError}/>}
                {/* Loader */}
                {isLoading && <Loader/>}
            </div>
            )}
            {/* Forecast */}
            {forecast && 
            <div>
                <Forecast forecast={forecast}/>
                <div className={styles.buttonDiv}>
                    <button type='button' className={styles.button} onClick={backToSearch}>
                        BACK
                    </button>
                </div>
            </div>
            }
            
        </Fragment>
    );
};

export default Page;
