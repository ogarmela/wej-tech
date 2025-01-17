import React, { Fragment } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect }  from 'react-redux';
import { login } from '../actions/auth';
import axios from 'axios';


import {
    Heading, Input, Button, Text, Flex,
    FormControl, FormLabel, FormErrorMessage, FormHelperText, Alert, AlertIcon,
  } from '@chakra-ui/react'

import BlogCreate from './BlogCreate';
import CommunityOption from './CommunityOptions';
import EventSearch from './EventSearch';
import ReviewCreate from './ReviewCreate';

const Community = ({ isAuthenticated }) => {

    const guestView = () => (
        <Fragment>
            <Alert status='warning'>
                <AlertIcon />
                The Community features are still under construction
            </Alert>            
            <Heading mb={3}>Access Denied</Heading>
            <Text mb={6}>You need to be a member to access the Community tab</Text>
            <Link to='/login'>
                <Button colorScheme='whatsapp'>Login</Button>
            </Link>
            <Text>
                Don't have an account? <Link to='/signup'>Sign up</Link>
            </Text>
        </Fragment>    
    )

    const authView = () =>
    (
        // <Fragment>
        //     <Heading mb={3}>In construction</Heading>
        //     <Text>The community tab is in-progress, you are a member though</Text>
        // </Fragment>     
        <div>
            <Alert status='warning'>
                <AlertIcon />
                The Community features are still under construction
            </Alert>
            <CommunityOption></CommunityOption>
        </div>
    )

    return (
        <Flex
        height='100vh'
        alignItems='center'
        justifyContent='center'
        bgImage="/media/post_images/New_Image9.jpg"
        bgPosition="center"
        bgRepeat="no-repeat"
        >
            <Flex direction='column' background='#EDF2F7' p={12} rounded={6}>
                {authView()}
                {/* {isAuthenticated ? authView() : guestView()} */}
            </Flex>
        </Flex>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { })( Community )