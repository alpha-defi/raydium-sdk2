import React from 'react';
import clsx from 'clsx';
import styles from './homepage.module.scss';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Raydium SDK Overview',
    description: (
      <>
        Learn about the Raydium Software Development Kit (SDK) and its core concepts.
      </>
    ),
  },
  {
    title: 'Getting Started',
    description: (
      <>
        Learn how to use the SDK to build applications on top of Raydium.
      </>
    ),
  },
  {
    title: 'Showcase',
    description: (
      <>
        A List of projects built with the Raydium SDK.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <a className={clsx(styles.frostedButton)}>
      <div className="padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
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
