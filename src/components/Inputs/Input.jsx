import './Input.css';

const Input = ({ type, placeholder }) => {
  return (
    <div className='Input'>
      <input
        type={type || 'text'}
        placeholder={placeholder || 'Type here'}
        className='input__field'
      />
    </div>
  );
};

export default Input;
