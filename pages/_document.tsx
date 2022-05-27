import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document';
import {styled} from '@emotion/styled';

const Body = styled.body``;

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <Body className={'h-screen w-screen'}>
          <Main />
          <NextScript />
        </Body>
      </Html>
    )
  }
}

export default MyDocument
