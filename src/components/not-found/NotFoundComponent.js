import React, { Fragment } from 'react';
import { Message, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const NotFoundComponent = () => {
    return (
        <Fragment>
            <Message>
                <Message.Header>Not Found</Message.Header>
                    <p>
                        The page you're looking for does not exist!
                    </p>
            </Message>
            <Button primary as={Link} to={'/'} size='tiny'>Go back</Button>
        </Fragment>
    );
}

export default NotFoundComponent;