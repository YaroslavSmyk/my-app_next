import Head from 'next/head';
import AppBar from '@mui/material/AppBar';
import LinkNavigation from './LinkNavigation';
import ButtonNavigation from './ButtonNavigation';
import { LargeBox, SmallBox, TextBox, TextAnother } from './Title';

export function MainLayout({ children, title = 'home' }: any) {
  const nameButton = [
    { href: '/about', title: 'About' },
    { href: '/task/1', title: '1' },
    { href: '/task/2', title: '2' },
    { href: '/task/3', title: '3' },
    { href: '/task/4', title: '4' },
  ];
  const OutputNavigation = nameButton.map((button) => (
    <LargeBox key={button.title}>
      <LinkNavigation href={button.href}>
        <ButtonNavigation>
          <TextBox>{button.title}</TextBox>
        </ButtonNavigation>
      </LinkNavigation>
    </LargeBox>
  ));

  return (
    <>
      <Head>
        <title>next | {title}</title>
      </Head>
      <nav>
        <AppBar component="nav">
          <SmallBox>
            <LinkNavigation href="/">
              <TextAnother variant="h5">Next</TextAnother>
            </LinkNavigation>
            <LargeBox>{OutputNavigation}</LargeBox>
          </SmallBox>
        </AppBar>
      </nav>
      <main>{children}</main>
    </>
  );
}
