import * as React from 'react';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
import { iconSize, IWibuIconProps } from '~/wibu-ui/WibuIcon/WibuIcon.types.ts';
import { useTheme } from '~/hooks/useTheme.ts';
import { useThemeStyles } from '~/hooks/useThemeStyles.ts';
import { styleCreator } from '~/wibu-ui/WibuIcon/WibuIcon.styles.ts';
import Icon from 'react-native-vector-icons/feather';

const WibuIcon = (props: IWibuIconProps) => {
  const { name, iconStyle, size, color, backgroundColor, containerStyle } =
    props;
  const styles = useThemeStyles(styleCreator, props, []);
  const { Colors } = useTheme();
  return (
    <WibuView
      backgroundColor={backgroundColor ?? Colors.transparent}
      style={[styles.container, containerStyle]}
    >
      <Icon
        name={name}
        size={iconSize[size]}
        color={color ?? Colors.fgTextColor}
        style={[styles.iconStyle, iconStyle]}
      />
    </WibuView>
  );
};

export default WibuIcon;
