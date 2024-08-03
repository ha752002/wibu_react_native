import * as React from 'react';
import { useState } from 'react';

import { View, Text, TouchableOpacity, Modal, FlatList } from 'react-native';

import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';

// import UserInformation from '~/components/userInformation/UserInformation';
import { FilterProps } from './Filter.types.ts';

import { styleCreator } from './Filter.styles.ts';
import { useThemeStyles } from '../../../hooks/useThemeStyles.ts';

// import { ESize } from '~/enums/size.enums.ts';

import { useNavigation } from '@react-navigation/native';
import { ApplicationNavigationProps } from '~/navigators/ApplicationcNavigator/ApplicationNavigator.types.ts';
import { ScreenNames } from '~/enums/screenNames.enum.ts';

const Filter = (props: FilterProps) => {
  const { genres, selectedGenreId, sort, searchContent } = props;

  const styles = useThemeStyles(styleCreator, props, []);
  const navigation = useNavigation<ApplicationNavigationProps>();

  const findSelectedGenre = () => {
    const selected = genres.find(g => g.id === selectedGenreId);
    return selected ? selected.genre : 'All genre';
  };

  const [selectedGenre, setSelectedGenre] = useState(findSelectedGenre());
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelect = (genre: string, id: number) => {
    setSelectedGenre(genre);
    setModalVisible(false);
    console.log(id);
    navigation.navigate(ScreenNames.GENRE, {
      id: id,
      sort: sort,
      searchKeywords: searchContent,
    });
  };

  return (
    <WibuView style={styles.container}>
      <WibuText>Select Genre:</WibuText>
      <TouchableOpacity
        style={styles.picker}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.pickerText}>{selectedGenre}</Text>
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <FlatList
              data={genres}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.modalItem,
                    selectedGenreId === item.id && styles.selected,
                  ]}
                  onPress={() => handleSelect(item.genre, item.id)}
                >
                  <Text
                    style={[
                      styles.modalItemText,
                      selectedGenreId === item.id && styles.selectedContent,
                    ]}
                  >
                    {item.genre}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </WibuView>
  );
};

export default Filter;
