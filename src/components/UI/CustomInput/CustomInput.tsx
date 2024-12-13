import { Input } from 'antd';
import './CustomInput.css'

const CustomInput = ({ ...props }) => {
  return (
    <Input
      {...props}
      className="custom-input"
      placeholder="Informe seu e-mail"
    />
  );
};

export default CustomInput;