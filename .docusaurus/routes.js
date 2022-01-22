
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/about-me',
  component: ComponentCreator('/about-me','23c'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','1c8'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','1cd'),
  exact: true,
},
{
  path: '/blog/tags/meta',
  component: ComponentCreator('/blog/tags/meta','d38'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','4d7'),
  exact: true,
},
{
  path: '/markdown-page',
  component: ComponentCreator('/markdown-page','be1'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','34f'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','b00'),
  exact: true,
},
{
  path: '/docs/asd',
  component: ComponentCreator('/docs/asd','a43'),
  exact: true,
},
{
  path: '/docs/doc2',
  component: ComponentCreator('/docs/doc2','fd3'),
  exact: true,
},
{
  path: '/docs/doc3',
  component: ComponentCreator('/docs/doc3','e02'),
  exact: true,
},
{
  path: '/docs/mdx',
  component: ComponentCreator('/docs/mdx','398'),
  exact: true,
},
{
  path: '/docs/ref',
  component: ComponentCreator('/docs/ref','2a6'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
