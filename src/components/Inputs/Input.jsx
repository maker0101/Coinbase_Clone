import './Input.css';

const Input = ({ type, placeholder, name, required = false }) => {
  return (
    <div className='Input'>
      <input
        type={type || 'text'}
        placeholder={placeholder || 'Type here'}
        className='input__field'
        name={name}
        required={required}
      />
    </div>
  );
};

export default Input;
