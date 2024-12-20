import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    emoji: '✅',
    description: (
      <>
        Mockster is made for citizen developers. With Mockster, it's easy to populate your database with mock data.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    emoji: '💎',
    description: (
      <>
        Make better apps by testing with realistic data. Mockster helps you focus on what matters.
      </>
    ),
  },
  {
    title: 'From Finland with love',
    svg: '/img/finnish_flag.svg',
    description: (
      <>
        Mockster is open sourced and free to use.
      </>
    ),
  },
];

function Feature({title, emoji, svg, description}) {
  if (svg != null) {
    return (
      <div className={clsx('col col--4')}>
        <div className="text--center emoji">
          <img src={svg} width="60" height="50" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className={clsx('col col--4')}>
        <div className="text--center emoji">
          {emoji}
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    );
  }

  
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
