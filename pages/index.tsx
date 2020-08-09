import Layout from '../components/layout';
// @ts-ignore
import { attributes, html } from '../content/home.md';

const Home = () => (
  <Layout>
    <h1 className="text-3xl m-6 text-blue-600">{attributes.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </Layout>
);

export default Home;
