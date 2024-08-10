// import { IStories } from '../../Story/Story.types';

export type InputFieldProps = {
  label?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  type?: string;
};
