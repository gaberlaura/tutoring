/* 
    This component renders a user interface for signing in. 
    It imports styles from the './sign-in-form.styles.scss' file.
    The component maintains state for form fields using the 'useState' hook.
    The form includes input fields for email and password, managed by the 'FormInput' component. 
    Users can sign in using their email and password, and there is also an option to sign in with Google through a separate button. 
    The form includes error handling for incorrect passwords, non-existing users, and generic errors.
    Upon successful sign-in, the user is redirected to the '/appointments' page. 
*/

import { useState } from 'react';
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import { useNavigate } from 'react-router-dom';
import FormInput from '../form-input/form-input.component';
import './sign-in-form.styles.scss';
import Button from '../button/button.component';

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const navigate = useNavigate();

    const goToApptPage = () => {
        navigate('/appointments');
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
        goToApptPage();
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { user } = await signInAuthUserWithEmailAndPassword(
                email,
                password
            );

            resetFormFields();

            goToApptPage();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect email or password');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with email');
                    break;
                default:
                    console.log(error.code);
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div className='sign-in-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />

                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />

                <div className='buttons-container'>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;