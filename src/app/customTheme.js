import {
  red700,
  orangeA200, orangeA100, orangeA400,
  grey900,
  fullWhite
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';

export default {
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: red700,
    primary2Color: red700,
    primary3Color: fullWhite,
    accent1Color: orangeA200,
    accent2Color: orangeA400,
    accent3Color: orangeA100,
    textColor: grey900,
    secondaryTextColor: fade(grey900, 0.7),
    alternateTextColor: fullWhite,
    canvasColor: fullWhite,
    borderColor: fade(grey900, 0.3),
    disabledColor: fade(grey900, 0.3),
    pickerHeaderColor: fade(grey900, 0.12),
    clockCircleColor: fade(grey900, 0.12)
  }
};
