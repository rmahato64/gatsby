import React from 'react'
import {Link} from 'gatsby'
import Head from '../components/head'
import Layout from '../components/layout'

const AboutPage =()=>{
    return (
        <Layout>
            <Head title="about" />
            <h1>This is About page</h1>
            <p>This page can bee access by forward slash with page name</p>
            <p>For More information contact us <Link to="/contact" >Here</Link></p>
        </Layout>
    )
}

export default AboutPage