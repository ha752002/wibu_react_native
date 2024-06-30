import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { GenreItemProps } from './GenreItem.types.ts';

import { styleCreator } from './GenreItem.styles.ts';
import { useThemeStyles } from '~/hooks/useThemeStyles.ts';

const GenreItem = (props: GenreItemProps) => {
  const styles = useThemeStyles(styleCreator, props, []);
  const { isSelected, item, onSelect } = props;

  return (
    <TouchableOpacity
      style={[styles.modalItem, isSelected && styles.selected]}
      onPress={() => onSelect(item.id)}
    >
      <Text
        style={[styles.modalItemText, isSelected && styles.selectedContent]}
      >
        {item.genre}
      </Text>
    </TouchableOpacity>
  );
};

export default GenreItem;
