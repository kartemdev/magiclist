import classNames from 'classnames';

import './styles.scss';

interface IProps<T> {
  children?: React.ReactNode;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void,
  className?: string,
}

const Form = <T, >(props: IProps<T>) => {
  const {
    children,
    onSubmit,
    className,
  } = props;

  return (
    <form
      className={classNames('ml-form', {
        [className]: className,
      })}
      onSubmit={onSubmit}
      noValidate
    >
     {children}
    </form>
  );
};

Form.defaultProps ={
  children: '',
  onSubmit: () => {},
  className: '',
}

export default Form;
