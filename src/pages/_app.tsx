import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '../theme/index';
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
