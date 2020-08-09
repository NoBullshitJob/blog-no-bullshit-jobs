import Link from 'next/link';
import Layout from '../../components/layout';

const importBlogPosts = async () => {
  // https://webpack.js.org/guides/dependency-management/#requirecontext
  const markdownFiles = require
    .context('../../content/blogPosts', false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2));

  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../../content/blogPosts/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    }),
  );
};

const Blog = ({ postsList }) => (
  <Layout>
    {postsList.map((post) => (
      <div className="flex mb-4">
        <div className="w-1/3 m-5">
          <Link href="/blog/post/[slug]" as={`/blog/post/${post.slug}`}>
            <a>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={post.attributes.thumbnail} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{post.attributes.title}</div>
                </div>
                <div className="px-6 py-4">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    #photography
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    #travel
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    #winter
                  </span>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
    ))}
  </Layout>
);

export async function getStaticProps() {
  const postsList = await importBlogPosts();

  return {
    props: {
      postsList,
    }, // will be passed to the page component as props
  };
}

export default Blog;
