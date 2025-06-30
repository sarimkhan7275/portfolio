export const Navbar = ({isLoaded} : {isLoaded:boolean}) => {
    return (
      <nav
        className={`fixed top-0 w-full bg-white/80 backdrop-blur-md z-40 border-b transition-all duration-700 ${isLoaded ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-900 animate-fade-in">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Sarim Khan
              </span>
            </h1>
            <div className="hidden md:flex space-x-6">
              {["About", "Experience", "Skills", "Projects", "Contact"].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-gray-600 hover:text-purple-600 transition-all duration-300 hover:scale-105 animate-fade-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    )
}