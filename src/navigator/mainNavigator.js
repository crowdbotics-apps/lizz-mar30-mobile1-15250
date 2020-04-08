import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList26940Navigator from '../features/ArticleList26940/navigator';
import ArticleList26939Navigator from '../features/ArticleList26939/navigator';
import ArticleList26922Navigator from '../features/ArticleList26922/navigator';
import ArticleList26921Navigator from '../features/ArticleList26921/navigator';
import ArticleList26920Navigator from '../features/ArticleList26920/navigator';
import Achievements25054Navigator from '../features/Achievements25054/navigator';
import ArticleList24301Navigator from '../features/ArticleList24301/navigator';
import ArticleList24300Navigator from '../features/ArticleList24300/navigator';
import ArticleList24299Navigator from '../features/ArticleList24299/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
ArticleList26940: { screen: ArticleList26940Navigator },
ArticleList26939: { screen: ArticleList26939Navigator },
ArticleList26922: { screen: ArticleList26922Navigator },
ArticleList26921: { screen: ArticleList26921Navigator },
ArticleList26920: { screen: ArticleList26920Navigator },
Achievements25054: { screen: Achievements25054Navigator },
ArticleList24301: { screen: ArticleList24301Navigator },
ArticleList24300: { screen: ArticleList24300Navigator },
ArticleList24299: { screen: ArticleList24299Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
