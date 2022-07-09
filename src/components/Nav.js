import React from 'react';
import Head from 'next/head';

const Nav = ({ title, infoTitle }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div style={{ display: "flex", width: "100%", height: "45px", alignItems: "center", }}>
                <h3 style={{ margin: "0px" }}>{infoTitle}</h3>
            </div>
        </>
    );
};

export default Nav;