import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel='preload' href='/fonts/Calisga.otf' as='font' crossOrigin='anonymous'></link>
        <link rel='preload' href='/fonts/DIN 30640 Std Neuzeit Grotesk Bold Cond.otf' as='font' crossOrigin='anonymous'></link>
        <link rel='preload' href='/fonts/DINCondensed-Bold.ttf' as='font' crossOrigin='anonymous'></link>
        <link rel='preload' href='/fonts/Poppins-Bold.ttf' as='font' crossOrigin='anonymous'></link>
        <link rel='preload' href='/fonts/Poppins-Regular.ttf' as='font' crossOrigin='anonymous'></link>
        <link rel='preload' href='/fonts/Poppins-SemiBold.ttf' as='font' crossOrigin='anonymous'></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

