import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Stat = ({elem}) =>( 
    <li className={css.item}>
        <span className={css.label}>{elem.label}</span>
        <span className={css.percentage}>{elem.percentage}%</span>
    </li>
); 

Stat.propTypes = {
    elem: PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string,
        percentage: PropTypes.number,})
};
  

export default Stat;
 