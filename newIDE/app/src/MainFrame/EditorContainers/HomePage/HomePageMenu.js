// @flow
import * as React from 'react';
import { Trans } from '@lingui/macro';
import { Column, Line } from '../../../UI/Grid';
import { Drawer } from '@material-ui/core';
import { useResponsiveWindowWidth } from '../../../UI/Reponsive/ResponsiveWindowMeasurer';
import IconButton from '../../../UI/IconButton';
import DoubleChevronArrowRight from '../../../UI/CustomSvgIcons/DoubleChevronArrowRight';
import VerticalTabButton from '../../../UI/VerticalTabButton';
import DoubleChevronArrowLeft from '../../../UI/CustomSvgIcons/DoubleChevronArrowLeft';
import PickAxeIcon from '../../../UI/CustomSvgIcons/PickAxe';
import SchoolIcon from '../../../UI/CustomSvgIcons/School';
import GoogleControllerIcon from '../../../UI/CustomSvgIcons/GoogleController';
import WebIcon from '../../../UI/CustomSvgIcons/Web';
import UsersIcon from '../../../UI/CustomSvgIcons/Users';
import SunIcon from '../../../UI/CustomSvgIcons/Sun';
import StoreIcon from '../../../UI/CustomSvgIcons/Store';
import Preferences from '../../../UI/CustomSvgIcons/Preferences';
import GDevelopGLogo from '../../../UI/CustomSvgIcons/GDevelopGLogo';
import GDevelopThemeContext from '../../../UI/Theme/GDevelopThemeContext';
import Paper from '../../../UI/Paper';
import AuthenticatedUserContext from '../../../Profile/AuthenticatedUserContext';

export const styles = {
  desktopMenu: {
    paddingTop: 40,
    paddingBottom: 10,
    minWidth: 230,
    display: 'flex',
    flexDirection: 'column',
  },
  mobileMenu: {
    paddingTop: 10,
    paddingBottom: 10,
    display: 'flex',
    flexDirection: 'column',
  },
  drawerContent: {
    height: '100%',
    width: 250,
    paddingBottom: 10,
    overflowX: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  drawerTopButtonsContainer: {
    flex: 1,
    marginTop: 'env(safe-area-inset-top)',
  },
  bottomButtonsContainer: {
    marginBottom: 'env(safe-area-inset-bottom)',
  },
};

export type HomeTab =
  | 'get-started'
  | 'build'
  | 'learn'
  | 'play'
  | 'community'
  | 'shop'
  | 'team-view';

const tabs: {
  label: React.Node,
  tab: HomeTab,
  getIcon: (color: string) => React.Node,
  id: string,
}[] = [
  {
    label: <Trans>Get Started</Trans>,
    tab: 'get-started',
    id: 'home-get-started-tab',
    getIcon: color => <SunIcon fontSize="small" color={color} />,
  },
  {
    label: <Trans>Build</Trans>,
    tab: 'build',
    id: 'home-build-tab',
    getIcon: color => <PickAxeIcon fontSize="small" color={color} />,
  },
  {
    label: <Trans>Shop</Trans>,
    tab: 'shop',
    id: 'home-shop-tab',
    getIcon: color => <StoreIcon fontSize="small" color={color} />,
  },
  {
    label: <Trans>Learn</Trans>,
    tab: 'learn',
    id: 'home-learn-tab',
    getIcon: color => <SchoolIcon fontSize="small" color={color} />,
  },
  {
    label: <Trans>Play</Trans>,
    tab: 'play',
    id: 'home-play-tab',
    getIcon: color => <GoogleControllerIcon fontSize="small" color={color} />,
  },
  {
    label: <Trans>Community</Trans>,
    tab: 'community',
    id: 'home-community-tab',
    getIcon: color => <WebIcon fontSize="small" color={color} />,
  },
];
const teamViewTab = {
  label: <Trans>Classrooms</Trans>,
  tab: 'team-view',
  id: 'team-view-tab',
  getIcon: color => <UsersIcon fontSize="small" color={color} />,
};
type Props = {|
  setActiveTab: HomeTab => void,
  activeTab: HomeTab,
  onOpenPreferences: () => void,
  onOpenAbout: () => void,
|};

export const HomePageMenu = ({
  setActiveTab,
  activeTab,
  onOpenPreferences,
  onOpenAbout,
}: Props) => {
  const windowWidth = useResponsiveWindowWidth();
  const isMobileOrSmallScreen =
    windowWidth === 'small' || windowWidth === 'medium';
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  const { profile } = React.useContext(AuthenticatedUserContext);
  const displayTeamViewTab = profile && profile.isTeacher;
  const [
    isHomePageMenuDrawerOpen,
    setIsHomePageMenuDrawerOpen,
  ] = React.useState(false);

  const tabsToDisplay = displayTeamViewTab ? [...tabs, teamViewTab] : tabs;

  const buttons: {
    label: React.Node,
    getIcon: (color: string) => React.Node,
    id: string,
    onClick: () => void,
  }[] = [
    {
      label: <Trans>Preferences</Trans>,
      id: 'settings',
      onClick: onOpenPreferences,
      getIcon: color => <Preferences fontSize="small" color={color} />,
    },
    {
      label: <Trans>About GDevelop</Trans>,
      id: 'about-gdevelop',
      onClick: onOpenAbout,
      getIcon: color => <GDevelopGLogo fontSize="small" color={color} />,
    },
  ];

  return (
    <>
      <Paper
        style={{
          ...(isMobileOrSmallScreen ? styles.mobileMenu : styles.desktopMenu),
          borderRight: `1px solid ${gdevelopTheme.home.separator.color}`,
        }}
        square
        background="dark"
      >
        <Column expand>
          {isMobileOrSmallScreen && (
            <IconButton
              onClick={() => setIsHomePageMenuDrawerOpen(true)}
              size="small"
            >
              <DoubleChevronArrowRight />
            </IconButton>
          )}
          {tabsToDisplay.map(({ label, tab, getIcon, id }) => (
            <VerticalTabButton
              key={id}
              label={label}
              onClick={() => setActiveTab(tab)}
              getIcon={getIcon}
              isActive={activeTab === tab}
              hideLabel={isMobileOrSmallScreen}
              id={id}
            />
          ))}
        </Column>

        <div style={styles.bottomButtonsContainer}>
          <Column>
            {buttons.map(({ label, getIcon, onClick, id }) => (
              <VerticalTabButton
                key={id}
                label={label}
                onClick={onClick}
                getIcon={getIcon}
                isActive={false}
                hideLabel={isMobileOrSmallScreen}
                id={id}
              />
            ))}
          </Column>
        </div>
      </Paper>
      <Drawer
        open={isHomePageMenuDrawerOpen}
        PaperProps={{
          style: {
            ...styles.drawerContent,
            backgroundColor: gdevelopTheme.home.header.backgroundColor,
          },
          className: 'safe-area-aware-left-container',
        }}
        onClose={() => {
          setIsHomePageMenuDrawerOpen(false);
        }}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Line expand>
          <Column expand>
            <div style={styles.drawerTopButtonsContainer}>
              <Column noMargin expand>
                <Line noMargin justifyContent="flex-end">
                  <IconButton
                    onClick={() => {
                      setIsHomePageMenuDrawerOpen(false);
                    }}
                    size="small"
                  >
                    <DoubleChevronArrowLeft />
                  </IconButton>
                </Line>
                {tabsToDisplay.map(({ label, tab, getIcon }, index) => (
                  <VerticalTabButton
                    key={index}
                    label={label}
                    onClick={() => {
                      setActiveTab(tab);
                      setIsHomePageMenuDrawerOpen(false);
                    }}
                    getIcon={getIcon}
                    isActive={activeTab === tab}
                  />
                ))}
              </Column>
            </div>
            <div style={styles.bottomButtonsContainer}>
              <Column noMargin>
                {buttons.map(({ label, getIcon, onClick, id }) => (
                  <VerticalTabButton
                    key={id}
                    label={label}
                    onClick={onClick}
                    getIcon={getIcon}
                    isActive={false}
                  />
                ))}
              </Column>
            </div>
          </Column>
        </Line>
      </Drawer>
    </>
  );
};
