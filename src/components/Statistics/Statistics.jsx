import css from '../../components/Statistics/Statistics.module.css'

export const Statistics = ( {good, neutral, bad, total, positiveFeedback}) => {
    return ( <div>
        {/* <h2>Statistic</h2> */}
        <p className={css.text}>Good: {good}</p>
        <p className={css.text}>Neutral: {neutral}</p>
        <p className={css.text}>Bad: {bad}</p>
        <p className={css.text}>Total: {total}</p>
        <p className={css.text}>Positive feedback: {positiveFeedback}%</p>
        </div>)}