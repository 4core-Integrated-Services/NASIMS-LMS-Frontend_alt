import Head from 'next/head';
import { NextComponentType } from 'next';
import styles from './styles.module.scss';

interface PageWrapperProps {
  title: string;
  children: JSX.Element[] | JSX.Element;
}

export const PageWrapper: NextComponentType<any, any, PageWrapperProps> = ({
  title,
  children
}) => {
  return (
    <div className={`page-wrapper ${styles.pageWrapper}`}>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </div>
  );
};
