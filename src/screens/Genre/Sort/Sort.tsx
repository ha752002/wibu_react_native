import * as React from 'react';
import { useState } from 'react';

import {
  View,
  Text,
  // StyleSheet,
  TouchableOpacity,
  Modal,
  FlatList,
} from 'react-native';

import WibuView from '~/wibu-ui/WibuView/WibuView.tsx';
import WibuText from '~/wibu-ui/WibuText/WibuText.tsx';

// import UserInformation from '~/components/userInformation/UserInformation';
import { SortProps, SortList } from './Sort.types.ts';

import { styleCreator } from './Sort.styles.ts';
import { useThemeStyles } from '../../../hooks/useThemeStyles.ts';

// import { ESize } from '~/enums/size.enums.ts';

import { useNavigation } from '@react-navigation/native';
import { ApplicationNavigationProps } from '~/navigators/ApplicationcNavigator/ApplicationNavigator.types.ts';
import { ScreenNames } from '~/enums/screenNames.enum.ts';

import { SortType } from '../../../navigators/ApplicationcNavigator/ApplicationNavigator.types';

const Sort = (props: SortProps) => {
  const { selectedGenreId, SelectedSort, searchContent } = props;

  const styles = useThemeStyles(styleCreator, props, []);
  const navigation = useNavigation<ApplicationNavigationProps>();

  const findSelectedSort = () => {
    const selected = SelectedSort;
    return selected ? selected : 'update';
  };

  const [selectedSort, setSelectedSort] = useState(findSelectedSort());
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelect = (sort: SortType, id: number) => {
    setSelectedSort(sort);
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
      <WibuText>Select sort:</WibuText>
      <TouchableOpacity
        style={styles.picker}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.pickerText}>{selectedSort}</Text>
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
              data={SortList}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.modalItem,
                    SelectedSort === item.Sort && styles.selected,
                  ]}
                  onPress={() => handleSelect(item.Sort, selectedGenreId)}
                >
                  <Text
                    style={[
                      styles.modalItemText,
                      SelectedSort === item.Sort && styles.selectedContent,
                    ]}
                  >
                    {item.Sort}
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

export default Sort;
