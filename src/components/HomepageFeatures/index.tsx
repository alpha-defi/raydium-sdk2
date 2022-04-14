import React from 'react';
import clsx from 'clsx';
import styles from './homepage.module.scss';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  description: JSX.Element;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Raydium SDK Overview',
    description: (
      <>
        Learn about the Raydium Software Development Kit (SDK) and its core concepts.
      </>
    ),
    link: '/docs/overview'
  },
  {
    title: 'Getting Started',
    description: (
      <>
        Learn how to use the SDK to build applications on top of Raydium.
      </>
    ),
    link: '/docs/tutorial'
  },
  {
    title: 'Showcase',
    description: (
      <>
        A List of projects built with the Raydium SDK.
      </>
    ),
    link: '/docs/showcase'
  },
];

function Feature({title, description, link}: FeatureItem) {
  return (
    <Link className={clsx(styles.frostedButton)} to={link}>
      <div className="padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx('row', styles.buttonGrid)}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
