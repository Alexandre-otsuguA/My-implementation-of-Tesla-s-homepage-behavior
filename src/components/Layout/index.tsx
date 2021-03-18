import { FC } from 'react';
import Head from 'next/head';

interface IProps {
  id: string;
  title: string;
}

const Page: FC<IProps> = ({ children, id, title }) => (
  <div id={id}>
    <Head>
      <title>{title}</title>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    </Head>
    {children}
  </div>
);

export default Page;
