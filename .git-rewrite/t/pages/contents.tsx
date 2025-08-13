import { NextPage } from 'next';
import Head from 'next/head';
import ContentList from '../components/ContentList';

const ContentsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Content Management - Note Taking App</title>
        <meta name="description" content="Manage and view your notes and content" />
      </Head>
      
      <ContentList />
    </>
  );
};

export default ContentsPage; 