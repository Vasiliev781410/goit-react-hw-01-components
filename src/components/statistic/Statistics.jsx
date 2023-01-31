import Stat from "./Stat.jsx";
import PropTypes from 'prop-types';

const Statistics = ({title = null,stats,}) =>(
    <section className="statistics">
        {title && <h2 className="title">{title}</h2>}
        <ul className="stat-list">
            {stats.map(stat => (<Stat key={stat.id} elem={stat}/>))}
       </ul>
    </section>   
  ); 
  
  Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array,
};

export default Statistics;
  