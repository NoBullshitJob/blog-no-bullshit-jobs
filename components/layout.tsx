import Link from 'next/link';

const Layout = ({ children }) => (
  <>
    <header className="text-blue-700 bg-yellow-400 body-font shadow w-full">
      <nav className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a>
            <span className="m-3 text-2xl hover:font-medium">NO BULLSH*T JOBS</span>
          </a>
        </Link>
        <Link href="/blog">
          <a className="text-blue-700 text-lg hover:underline m-3">Je découvre les entreprises</a>
        </Link>
        <Link href="/join">
          <a className="text-blue-700 text-lg hover:underline m-3">Je rejoins la communauté</a>
        </Link>
      </nav>
    </header>
    <main className="container mx-auto">{children}</main>
  </>
);

export default Layout;
