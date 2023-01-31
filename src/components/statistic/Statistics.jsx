import Stat from "./Stat.jsx";
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({title = null,stats,}) =>(
    <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}
          <ul className={css.statList}>
            {stats.map(stat => (<Stat key={stat.id} elem={stat}/>))}
       </ul>
    </section>   
  ); 
  
  Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array,
};

export default Statistics;
  