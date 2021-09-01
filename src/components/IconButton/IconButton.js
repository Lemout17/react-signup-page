import PropTypes from 'prop-types'
import './IconButton.scss'

const IconButton = ({ children, onCLick, ...allyProps }) => (
  <button className="iconButton" type="button" onClick={onCLick} {...allyProps}>
    {children}
  </button>
)

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
}

IconButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  'aria-label': PropTypes.string.isRequired,
}

export default IconButton
