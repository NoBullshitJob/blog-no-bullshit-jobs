import Link from 'next/link'

const Layout = ({ children }) => (
  <>
    <nav>
      <Link href="/">
        <a>A propos</a>
      </Link>
      <Link href="/blog">
        <a>Je découvre les entreprises</a>
      </Link>
      <Link href="/join">
        <a>Je rejoins la communauté</a>
      </Link>
    </nav>
    <main>{children}</main>
    <style jsx>{`
      nav {
        text-align: center;
      }
      nav a {
        margin-right: 2px;
        padding: 4px;
      }
      main {
        display: flex;
        flex-direction: column;
      }
    `}</style>
  </>
)

export default Layout
