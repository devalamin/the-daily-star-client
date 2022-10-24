import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';



const RightSideNav = () => {

    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();


    const handleGoogleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result?.user;
                console.log(user);
            })
            .catch(error => console.error(error))

    }

    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleLogin} variant='outline-primary' className='mb-2 text'><FaGoogle className='me-2 text-danger'></FaGoogle>Log In With Google</Button>

                <Button variant='outline-dark'><FaGithub className='me-2'></FaGithub>Log In With Github</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <ListGroup>
                    <ListGroup.Item>Facebook</ListGroup.Item>
                    <ListGroup.Item>Facebook</ListGroup.Item>
                    <ListGroup.Item>Facebook</ListGroup.Item>
                    <ListGroup.Item>Facebook</ListGroup.Item>
                    <ListGroup.Item>Facebook</ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
};

export default RightSideNav;