/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import { StackOverflowFeatureBar } from "./../../components/homepage/stackOverflow"

const features = [
  {
    title: 'I build',
    imageUrl: 'img/undraw_code.svg',
    description: (
      <>
        I believe in problem solving, and build projects that solve real-world
        problems. I love web technologies, CLIs, mobile apps and DevOps.
      </>
    ),
  },
  {
    title: 'My Portfolio',
    imageUrl: 'img/undraw_profile.svg',
    description: (
      <>
        I build projects, write blogs, and contribute to open source. Read more
        about me, view my projects, or read about my experiences.
      </>
    ),
  },
  {
    title: 'Open Source',
    imageUrl: 'img/undraw_git.svg',
    description: (
      <>
        Active member of open source community, experience of GSoC, GSoD, GCI,
        MLH Fellowship, Coding Blocks BOSS and other programs.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('about-me/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        <div className='container'>
          <StackOverflowFeatureBar />
        </div>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map(({ title, imageUrl, description }) => (
                  <Feature
                    key={title}
                    title={title}
                    imageUrl={imageUrl}
                    description={description}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
