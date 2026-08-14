function Navbar({ search, setSearch }) {

  return (

    <nav className="navbar">

      <h1>
        📝 Note-pad
      </h1>


      <div className="search-box">

        <span>🔍</span>

        <input
          type="text"
          placeholder="Search notes..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

      </div>

    </nav>

  );

}

export default Navbar;