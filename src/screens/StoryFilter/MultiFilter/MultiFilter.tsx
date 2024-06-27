import * as React from 'react';
import { Text, TouchableOpacity, Modal, FlatList } from 'react-native';

import { MultiFilterProps } from './MultiFilter.types.ts';

import { styleCreator } from './MultiFilter.styles.ts';
import { useThemeStyles } from '~/hooks/useThemeStyles.ts';
import { useTheme } from '~/hooks/useTheme.ts';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';
import GenreItem from './GenreItem/GenreItem.tsx';

import { useNavigation } from '@react-navigation/native';
import { ApplicationNavigationProps } from '~/navigators/ApplicationcNavigator/ApplicationNavigator.types.ts';
import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
import { ScreenNames } from '~/enums/screenNames.enum.ts';

// import WibuIcon from '~/wibu-ui/WibuIcon/WibuIcon.tsx';
// import { EIconName } from '~/enums/icon.enum.ts';
import { ESize } from '~/enums/size.enums.ts';

const MultiFilter = (props: MultiFilterProps) => {
  const styles = useThemeStyles(styleCreator, props, []);
  const { genre, selectedGenreId = [], searchContent } = props;
  const { Layout } = useTheme();

  const [selectedGenres, setSelectedGenres] = React.useState(selectedGenreId);
  const [modalVisible, setModalVisible] = React.useState(false);

  const navigation = useNavigation<ApplicationNavigationProps>();

  const handleSelect = (id: number) => {
    setSelectedGenres(prevSelectedGenres => {
      const newSelectedGenres = prevSelectedGenres.includes(id)
        ? prevSelectedGenres.filter(genreId => genreId !== id)
        : [...prevSelectedGenres, id];
      navigation.navigate(ScreenNames.STORYFILTER, {
        id: newSelectedGenres,
        searchKeywords: searchContent,
        sort: 'update',
      });
      return newSelectedGenres;
    });
  };

  return (
    <WibuView style={styles.container}>
      <WibuView>
        <TouchableOpacity
          style={[styles.picker, Layout.rowCenter]}
          onPress={() => setModalVisible(true)}
        >
          <WibuText fontSize={ESize.S} color="bgPrimary">
            add
          </WibuText>
          {/* <WibuIcon
            name={EIconName.PLUS}
            color={Colors.bgPrimary}
            size={ESize.S}
          /> */}
        </TouchableOpacity>
        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setModalVisible(false)}
        >
          <WibuView style={styles.modalOverlay}>
            <WibuView style={styles.modalContent}>
              <FlatList
                data={genre}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <GenreItem
                    item={item}
                    isSelected={selectedGenres.includes(item.id)}
                    onSelect={handleSelect}
                  />
                )}
              />
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </WibuView>
          </WibuView>
        </Modal>
      </WibuView>
    </WibuView>
  );
};

export default MultiFilter;
