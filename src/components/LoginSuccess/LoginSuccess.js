import PropTypes from 'prop-types'

const LoginSuccess = ({ data }) => {
  return (
    <div>
      <h1>Login successful!</h1>
      <p>Your email: {data[0]}</p>
      <p>Your password: {data[1]}</p>
      <p>Your gender: {data[2]}</p>
    </div>
  )
}

LoginSuccess.propTypes = {
  data: PropTypes.array,
}

export default LoginSuccess
