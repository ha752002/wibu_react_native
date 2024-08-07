import WibuFormControlBase from '~/wibu-ui/WibuFormControl/Components/WibuFormControlBase/WibuFormControlBase.tsx';
import { WibuFormControlTypes } from '~/wibu-ui/WibuFormControl/WibuFormControl.types.ts';
import WibuFormControlLabel from '~/wibu-ui/WibuFormControl/Components/WibuFormControlLabel/WibuFormControlLabel.tsx';
import WibuFormControlErrorMessage from '~/wibu-ui/WibuFormControl/Components/WibuFormControlErrorMessage/WibuFormControlErrorMessage.tsx';

export const WibuFormControl = WibuFormControlBase as WibuFormControlTypes;
WibuFormControl.Label = WibuFormControlLabel;
WibuFormControl.ErrorMessage = WibuFormControlErrorMessage;
