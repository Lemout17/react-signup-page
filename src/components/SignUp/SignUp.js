import { useState } from 'react'
import validator from 'validator'
import classNames from 'classnames'

import { ReactComponent as Health } from '../../svg/icon.svg'
import { ReactComponent as Male } from '../../svg/male.svg'
import { ReactComponent as Female } from '../../svg/female.svg'
import { ReactComponent as Other } from '../../svg/transgender.svg'
import { ReactComponent as Show } from '../../svg/eye.svg'

import IconButton from '../IconButton'

import './SignUp.scss'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(true)
  const [emailMessage, setEmailMessage] = useState('')
  const [gender, setGender] = useState('')
  const [showPassword, setShowPassword] = useState(true)
  const [showPassword2, setShowPassword2] = useState(true)
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [isValidPassword, setIsValidPassword] = useState(true)
  const [passwordMessage, setPasswordMessage] = useState('')

  const handleChange = (name) => (e) => {
    switch (name) {
      case 'email':
        return setEmail(e.target.value)

      case 'password':
        return setPassword(e.target.value)

      case 'password2':
        return setPassword2(e.target.value)

      default:
        return null
    }
  }

  const formIsValid = () => {
    let isGood = true

    if (!validator.isEmail(email)) {
      setIsValidEmail(false)
      setEmailMessage('Not a valid email address')
      isGood = false
    }

    if (password !== password2) {
      setIsValidPassword(false)
      setPasswordMessage('Password fields do not match')
      isGood = false
    }

    return isGood
  }

  const toggleShow = (name) => {
    switch (name) {
      case 'password':
        return setShowPassword(!showPassword)

      case 'password2':
        return setShowPassword2(!showPassword2)

      default:
        return null
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (formIsValid()) {
      resetValue()
      setTimeout(() => {
        alert(`${email}, ${password}, ${gender}`)
      }, 250)
    }
  }

  const resetValue = () => {
    setGender('')
    setEmail('')
    setPassword('')
    setPassword2('')
    setPasswordMessage('')
    setEmailMessage('')
    setIsValidPassword(true)
    setIsValidEmail(true)
    setShowPassword(true)
    setShowPassword2(true)
  }

  const emailGroupClass = classNames('input', {
    'has-error': !isValidEmail,
    'has-success': isValidEmail,
  })
  const passwordGroupClass = classNames('input', {
    'has-error': !isValidPassword,
    'has-success': isValidPassword,
  })
  const maleGender =
    gender === 'Male' ? 'genderButton  gender-active' : 'genderButton'
  const femaleGender =
    gender === 'Female' ? 'genderButton  gender-active' : 'genderButton'
  const otherGender =
    gender === 'Other' ? 'genderButton  gender-active' : 'genderButton'

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="mainIcon">
        <Health width="80px" height="82px" />
      </div>
      <h2 className="title">Sign Up with email</h2>
      <div>
        <p className="gender-title">Gender</p>
        <div className="radioContainer">
          <button
            className={maleGender}
            type="button"
            name="male"
            value="Male"
            onClick={() => setGender('Male')}
          >
            <Male width="32px" height="32px" />
            Male
          </button>
          <button
            className={femaleGender}
            type="button"
            name="gender"
            value="Female"
            onClick={() => {
              setGender('Female')
            }}
          >
            <Female width="20px" height="32px" />
            Female
          </button>
          <button
            className={otherGender}
            type="button"
            name="gender"
            value="Other"
            onClick={() => {
              setGender('Other')
            }}
          >
            <Other width="28px" height="32px" />
            Other
          </button>
        </div>
      </div>

      <label>
        E-mail
        <input
          className={email ? emailGroupClass : 'input'}
          type="text"
          name="email"
          value={email}
          onChange={handleChange('email')}
          placeholder="Email"
          required
        />
        {emailMessage && <span className="help-block">{emailMessage}</span>}
      </label>
      <label>
        Create Password
        <div className="input-container">
          <input
            className={password ? passwordGroupClass : 'input'}
            type={showPassword ? 'password' : 'text'}
            name="password"
            value={password}
            onChange={handleChange('password')}
            placeholder="Password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            required
          />
          <IconButton
            onClick={() => toggleShow('password')}
            aria-label="show/hide password"
          >
            <Show width="30px" height="30px" />
          </IconButton>
        </div>
        {passwordMessage && (
          <span className="help-block">{passwordMessage}</span>
        )}
      </label>
      <label>
        Confirm Password
        <div className="input-container">
          <input
            className={password2 ? passwordGroupClass : 'input'}
            type={showPassword2 ? 'password' : 'text'}
            name="password2"
            value={password2}
            onChange={handleChange('password2')}
            placeholder="Confirm password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            required
          />
          <IconButton
            onClick={() => toggleShow('password2')}
            aria-label="show/hide password"
          >
            <Show width="30px" height="30px" />
          </IconButton>
        </div>
        {passwordMessage && (
          <span className="help-block">{passwordMessage}</span>
        )}
      </label>
      <button className="button" type="submit">
        Sign Up
      </button>
      <p className="infoText">
        Already have an account?{' '}
        <a
          className="link"
          href="https://www.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Log In
        </a>
      </p>
      <p className="infoText">
        Review privacy and disclosures{' '}
        <a
          className="link"
          href="https://www.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>{' '}
      </p>
    </form>
  )
}

export default SignUp
