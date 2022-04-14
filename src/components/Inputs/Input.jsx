import './Input.css';

const Input = ({
  type,
  placeholder,
  name,
  required = false,
  autoComplete,
  minLength = 0,
  value,
  onChange,
}) => {
  return (
    <div className='Input'>
      <input
        type={type || 'text'}
        placeholder={placeholder || 'Type here'}
        className='input__field'
        name={name}
        required={required}
        autoComplete={autoComplete}
        minLength={minLength}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
