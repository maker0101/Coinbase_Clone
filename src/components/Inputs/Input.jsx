import './Input.css';

const Input = ({ type, placeholder, name }) => {
  return (
    <div className='Input'>
      <input
        type={type || 'text'}
        placeholder={placeholder || 'Type here'}
        className='input__field'
        name={name}
      />
    </div>
  );
};

export default Input;
