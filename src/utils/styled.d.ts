// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    main1: {
      main1: string;
      main2: string;
      side: string;
    },
    main2: {
      main1: string;
      main2: string;
      side: string;
    },
    main3: {
      main1: string;
      main2: string;
      side: string;
    },
    main4: {
      main1: string;
      side: string;
    },
    black: {
      veryDark: string;
      darker: string;
      lighter: string;
    },
    white: {
      veryDark: string;
      lighter: string;
      darker: string;
    },
    title: string;
    padding: {
      lg: string;
      md: string;
      sm: string;
    },
    playerH: {
      lg: string;
      md: string;
      sm: string;
    }
    sideMenu: {
      lg: string;
      md: string;
      sm: string;
    }
    boxLine: {
      lg: string;
      md: string;
      sm: string;
    }
  }
}