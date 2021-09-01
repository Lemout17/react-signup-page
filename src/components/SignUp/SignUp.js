import { useState } from 'react'

import { ReactComponent as Health } from '../../svg/icon.svg'
import { ReactComponent as Male } from '../../svg/male.svg'
import { ReactComponent as Female } from '../../svg/female.svg'
import { ReactComponent as Other } from '../../svg/transgender.svg'
import { ReactComponent as Show } from '../../svg/eye.svg'

import IconButton from '../IconButton'

import s from './SignUp.module.scss'

const SignUp = ({ onSubmit }) => {
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('')
  const [showPassword, setShowPassword] = useState(true)
  const [showPassword2, setShowPassword2] = useState(true)
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

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

    onSubmit([email, password, gender, password2])
    resetValue()
  }

  const resetValue = () => {
    setGender('')
    setEmail('')
    setPassword('')
    setPassword2('')
  }

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div className={s.mainIcon}>
        <Health width="80px" height="82px" />
      </div>
      <h2 className={s.title}>Sign Up with email</h2>
      <div>
        <p>Gender</p>
        <div className={s.radioContainer}>
          <button
            className={s.genderButton}
            type="button"
            name="male"
            value="Male"
            onClick={() => setGender('Male')}
          >
            <Male width="32px" height="32px" />
            Male
          </button>
          <button
            className={s.genderButton}
            type="button"
            name="gender"
            value="Female"
            onClick={() => setGender('Female')}
          >
            <Female width="20px" height="32px" />
            Female
          </button>
          <button
            className={s.genderButton}
            type="button"
            name="gender"
            value="Other"
            onClick={() => setGender('Other')}
          >
            <Other width="28px" height="32px" />
            Other
          </button>
        </div>
      </div>

      <label>
        E-mail
        <input
          className={s.input}
          type="email"
          name="email"
          value={email}
          onChange={handleChange('email')}
          placeholder="Email"
          required
        />
      </label>
      <label>
        Create Password
        <input
          className={s.input}
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
      </label>
      <label>
        Confirm Password
        <input
          className={s.input}
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
      </label>
      <button className={s.button} type="submit">
        Sign Up
      </button>
      <p className={s.infoText}>
        Already have an account?{' '}
        <a
          className={s.link}
          href="https://www.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Log In
        </a>
      </p>
      <p className={s.infoText}>
        Review privacy and disclosures{' '}
        <a
          className={s.link}
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
