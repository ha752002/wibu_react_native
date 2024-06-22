import * as React from 'react';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';
import { AgeWarningProps } from './AgeWarning.types.ts';
import { useThemeStyles } from '~/hooks/useThemeStyles.ts';
import { styleCreator } from './AgeWarning.styles.ts';
// import Story from '../../Story/Story.tsx';

// import WibuIcon from '~/wibu-ui/WibuIcon/WibuIcon.tsx';

// import { EIconName } from '~/enums/icon.enum.ts';
import { ESize } from '~/enums/size.enums.ts';

// import { ESize } from '~/assets/imgs/imgsFake/AvatarUserFake';

const AgeWarning = (props: AgeWarningProps) => {
  const { ageWarning } = props;
  const styles = useThemeStyles(styleCreator, props, []);

  return (
    <WibuView style={[styles.center, styles.Container]}>
      {ageWarning && (
        <WibuView style={styles.WarningContent}>
          <WibuText fontSize={ESize.XL} color="borderOutlineDanger">
            Warning
          </WibuText>
          <WibuText fontSize={ESize.M} color="borderOutlineDanger">
            This is a series with sensitive and violent details. Readers should
            consider reading, minors under 18 years old are strictly
            prohibited!!!
          </WibuText>
        </WibuView>
      )}
    </WibuView>
  );
};

export default AgeWarning;
