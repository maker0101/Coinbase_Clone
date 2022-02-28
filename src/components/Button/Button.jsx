import './Button.css';
import classNames from 'classnames';

const Button = ({ children, color, disabled, light, size }) => {
	const btnClasses = classNames({
		Button: true,
		'btn-primary': color === 'primary',
		'btn-secondary': color === 'secondary',
		'btn-danger': color === 'danger',
		'btn-md': size === 'md',
		'btn-xl': size === 'xl',
		'btn-xxl': size === 'xxl',
		'btn-disabled': disabled,
		'btn-light': light,
	});

	return <button className={btnClasses}>{children}</button>;
};

export default Button;
