import classNames from 'classnames';

import './form.ui.scss';

interface IProps {
  children?: React.ReactNode;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  className?: string;
}

const Form = (props: IProps) => {
  const { className = '', children = null, onSubmit = () => null } = props;

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

export default Form;
