// import '../styles/globals.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '../theme/index';
// import type { AppProps } from 'next/app';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../theme/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

export default function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: any) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

// import '../styles/globals.css';
// import { ThemeProvider } from '@mui/material';
// import { theme } from '../theme/index';
// import createEmotionCache from '../theme/createEmotionCache';

// import { CacheProvider } from '@emotion/react';

// const clientSideEmotionCache = createEmotionCache();

// export default function App(props: any) {
//   const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
//   return (
//     <CacheProvider value={emotionCache}>
//       <ThemeProvider theme={theme}>
//         <Component {...pageProps} />
//       </ThemeProvider>
//     </CacheProvider>
//   );
// }
