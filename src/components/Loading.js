import React from 'react';
import styled from 'styled-components';
import styles from "../../styles/loading.module.scss";
import Image from 'next/image'
import Spinner from '../../styles/images/loading.gif';

const Loading = () => {
    return (
        <div className={styles.background}>
            <div className={styles.loading_text}>
                <Image src={Spinner} alt="loading" width="50%" height="50%" />
            </div>
        </div>
    );
};

export default Loading;