import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tooltipView: {
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  tooltipText: {
    color: 'black',
    fontSize: 18,
  },
});

const makeTooltipContent = text => (
  <View style={styles.tooltipView}>
    <Text style={styles.tooltipText}>{text}</Text>
  </View>
);

export default [
  {
    id: 'placement-examples',
    content: makeTooltipContent('Tap here to view all placement examples'),
  },
  {
    id: 'top-example',
    content: makeTooltipContent(
      'This is a tooltip rendered on the TOP of a child element.',
    ),
    triggerEvent: 'placement-examples-focus',
    tooltipProps: {
      allowChildInteraction: false, // this prevents the OTHER tooltip from rendering
    },
  },
  {
    id: 'bottom-example',
    content: makeTooltipContent(
      'This is a tooltip rendered on the BOTTOM of a child element.',
    ),
    placement: 'bottom',
    tooltipProps: {
      allowChildInteraction: false, // this prevents the OTHER tooltip from rendering
    },
  },
  {
    id: 'right-example',
    content: makeTooltipContent(
      'This is a tooltip rendered on the RIGHT of a child element.',
    ),
    placement: 'right',
    tooltipProps: {
      allowChildInteraction: false, // this prevents the OTHER tooltip from rendering
    },
  },
  {
    id: 'left-example',
    content: makeTooltipContent(
      'Finally, this is a tooltip rendered on the LEFT of a child element.',
    ),
    placement: 'left',
    tooltipProps: {
      allowChildInteraction: false, // this prevents the OTHER tooltip from rendering
    },
  },
];
