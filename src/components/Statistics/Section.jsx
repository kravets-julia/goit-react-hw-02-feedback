import css from '../../components/Statistics/Section.module.css'
export const Section = ({children, title}) => {
    return (
        <section className={css.section}>
        <h2 className={css.title}>{title}</h2>
        <div className={css.info}>{children}</div>
        </section>
    )
}

