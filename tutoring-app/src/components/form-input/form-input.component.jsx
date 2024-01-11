/* 
    This component represents a form input field.
    It imports styles from the './form-input.styles.scss' file. 
    The component takes two props, 'label' and 'otherProps,' where 'label' is a string representing the label associated with the input, 
    and 'otherProps' spreads any additional properties that can be applied to a standard HTML input element.
    The component renders a div with the class 'group' containing an input element with the class 'form-input.' 
    If a 'label' prop is provided, the component also renders a label element with the class 'form-input-label.'
    The label "shrinks" when the input has content, preventing overlap with the user's input.
*/

import './form-input.styles.scss';

const FormInput = ({ label, ...otherProps }) => {
    return (
        <div className='group'>
            <input className='form-input' {...otherProps} />
            {label && (
                <label
                    className={`${otherProps.value.length ? `shrink` : ``
                        } form-input-label`}
                >
                    {label}
                </label>
            )}
        </div >
    )
}

export default FormInput;