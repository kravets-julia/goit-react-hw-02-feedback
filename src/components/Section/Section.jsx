import PropTypes from 'prop-types';
import css from '../../components/Section/Section.module.css';

export const Section = ({ children, title }) => {
  return (
    <section className={css.section}>
      <h2 className={css.title}>{title}</h2>
      <div className={css.info}>{children}</div>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
