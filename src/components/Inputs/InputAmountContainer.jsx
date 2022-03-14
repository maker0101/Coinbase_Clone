import './InputAmountContainer.css';
import InputAmountDynamicWidth from './InputAmountDynamicWidth';

const InputAmountContainer = () => {
  return (
    <div className='InputAmountContainer'>
      <span className='inputAmountContainer_currency'>€</span>
      <InputAmountDynamicWidth />
    </div>
  );
};

export default InputAmountContainer;
