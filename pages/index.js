import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>山崎です。よろしくお願いします！</p>
        <p>ここにポートフォリオ掲載すればいいかな</p>
      </section>
    </Layout>
  );
}