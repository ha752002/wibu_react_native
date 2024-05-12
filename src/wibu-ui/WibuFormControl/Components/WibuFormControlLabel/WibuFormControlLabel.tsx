import { WibuFormControlLabelType } from '~/wibu-ui/WibuFormControl/Components/WibuFormControlLabel/WibuFormControlLabel.types.ts';
import renderChildren from '~/utils/renderChildren.tsx';
import { useThemeStyles } from '~/hooks/useThemeStyles.ts';
import styleCreator from '~/wibu-ui/WibuFormControl/Components/WibuFormControlLabel/WibuFormControlLabel.styles.ts';

const WibuFormControlLabel = (props: WibuFormControlLabelType) => {
  const { children } = props;
  const styles = useThemeStyles(styleCreator, props, []);
  return renderChildren({ children, textProps: styles.childrenStyles });
};

export default WibuFormControlLabel;
