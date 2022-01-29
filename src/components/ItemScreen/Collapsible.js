import React, {useState} from 'react';
import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import {colors} from 'react-native-elements';
import {COLORS} from '../../constants';
import AnyIcon from '../AnyIcon';
import RenderHtml from 'react-native-render-html';

const Collapsible = ({Data}) => {
  const [activeSections, setActiveSection] = useState([]);
  const {width} = useWindowDimensions();

  const SECTIONS = [
    {title: 'Description', content: Data.description, ID: Data.id},
    {title: 'Benefits', content: Data.benefit, ID: Data.id},
    {title: 'Ingredients', content: Data.ingredient, ID: Data.id},
    {title: 'FAQ', content: Data.faq, ID: Data.id},
    {title: 'Recipes', content: Data.recipes, ID: Data.id},
  ];

  const renderHeader = section => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.title}</Text>
        <AnyIcon
          name={activeSections ? 'menu-down' : 'menu-up'}
          type={'material-community'}
          color={COLORS.darkgray}
        />
      </View>
    );
  };

  const renderContent = section => {
    const source = {html: section.content};
    return (
      <RenderHtml
        source={source}
        contentWidth={width}
        defaultViewProps={{style: styles.defaultViewProps}}
        defaultTextProps={{style: styles.defaultTextProps}}
      />
    );
  };

  const updateSections = activeSections => {
    setActiveSection(activeSections);
  };

  return (
    <Accordion
      sections={SECTIONS}
      activeSections={activeSections}
      renderHeader={renderHeader}
      renderContent={renderContent}
      onChange={updateSections}
      containerStyle={styles.containerStyle}
      sectionContainerStyle={styles.sectionContainerStyle}
      underlayColor={COLORS.newColor}
    />
  );
};

export default Collapsible;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingVertical: 8,
  },
  containerStyle: {
    marginHorizontal: 10,
    // marginTop: 5,
  },
  sectionContainerStyle: {
    borderWidth: 1,
    borderColor: COLORS.darkgray,
    marginTop: 10,
    backgroundColor: COLORS.white,
    borderRadius: 5,
  },
  headerText: {
    fontWeight: '600',
    fontSize: 15,
    color: colors.success,
  },
  defaultViewProps: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  defaultTextProps: {textAlign: 'left', bottom: 10},
});
