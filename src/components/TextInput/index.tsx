import React from 'react';
import {
  TextInput,
} from './style';

type Props = {
  status: 'default' | 'active' | 'valid' | 'error';
  setStatus: any;
  required: boolean;
  placeHolderText: string;
  label: string;
}

const InputField: React.FC<Props> = (props: Props) => {
  return(
    <TextInput
    />
  );
};

export default InputField;