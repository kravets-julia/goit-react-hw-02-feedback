import css from '../../components/Statistics/FeedbackOptions.module.css'

export const FeedbackOptions = ({goodBtnClick, neutralBtnClick, badBtnClick}) => { 
    return(
        <div className={css.btn__box}>
        {/* <h2>Please leave feedback </h2>  */}
        <button className={css.btn} onClick={goodBtnClick}>Good</button>
        <button className={css.btn} onClick={neutralBtnClick}>Neutral</button>
        <button className={css.btn} onClick={badBtnClick}>Bad</button>
        </div>
)
}