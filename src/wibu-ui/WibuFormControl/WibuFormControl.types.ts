import { WibuFormControlBaseTypes } from '~/wibu-ui/WibuFormControl/Components/WibuFormControlBase/WibuFormControlBase.types.tsx';
import { WibuFormControlLabelType } from '~/wibu-ui/WibuFormControl/Components/WibuFormControlLabel/WibuFormControlLabel.types.ts';
import { WibuFormControlErrorMessageProps } from '~/wibu-ui/WibuFormControl/Components/WibuFormControlErrorMessage/WibuFormControlErrorMessage.types.ts';

export type WibuFormControlTypes = ((
  props: WibuFormControlBaseTypes,
) => JSX.Element) & {
  Label: (props: WibuFormControlLabelType) => JSX.Element;
  ErrorMessage: (props: WibuFormControlErrorMessageProps) => JSX.Element | null;
};
