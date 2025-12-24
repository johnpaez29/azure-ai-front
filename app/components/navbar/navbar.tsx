function NavbarLayout() {
    return (
    <nav className="bg-dark border-b shadow-md px-4 py-2">
      <div className="container mx-auto flex justify-start items-center">
        <a href="/" className="text-xl font-bold hover:text-blue-300! transition-colors duration-300">
          Azure AI Search
        </a>
        <ul className="md:flex mx-20 space-x-6">
          <li><a href="/pages/searching-sql" className="hover:text-blue-300! transition-colors duration-300">Azure SQL</a></li>
          <li><a href="/pages/searching-blob" className="hover:text-blue-300! transition-colors duration-300">Blobs</a></li>
        </ul>
      </div>
    </nav>
    )
}

export default NavbarLayout;