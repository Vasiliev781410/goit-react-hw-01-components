import PropTypes from 'prop-types';

const Stat = ({elem}) =>( 
    <li className="item">
        <span className="label">{elem.label}</span>
        <span className="percentage">{elem.percentage}</span>
    </li>
); 

Stat.propTypes = {
    elem: PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string,
        percentage: PropTypes.number,})
};
  

export default Stat;
 