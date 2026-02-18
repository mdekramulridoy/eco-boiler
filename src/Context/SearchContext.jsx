import { createContext, useState, useContext } from "react"

// Create Context
export const SearchContext = createContext()

// Professional English Search Data
const searchData = [
  {
    title: "Eco Boiler Company Profile",
    description: "Information about Eco Boiler Solutions Limited",
    path: "/about",
  },
  {
    title: "Industrial Boiler Services",
    description: "Industrial boiler installation and maintenance services",
    path: "/services",
  },
  {
    title: "Steam Boiler Solutions",
    description: "High-capacity and efficient steam boiler systems",
    path: "/products",
  },
  {
    title: "Thermal Oil Boiler",
    description: "Energy-efficient thermal oil boiler technology",
    path: "/products",
  },
  {
    title: "Contact Eco Boiler",
    description: "Get in touch with Eco Boiler engineering team",
    path: "/contact",
  },
  {
    title: "Waste Heat Recovery",
    description: "Industrial HRSG and waste heat recovery units",
    path: "/products",
  }
]

export const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])

  const handleSearch = (text) => {
    setQuery(text)

    if (!text.trim()) {
      setResults([])
      return
    }

    const filteredResults = searchData.filter(
      (item) =>
        item.title.toLowerCase().includes(text.toLowerCase()) ||
        item.description.toLowerCase().includes(text.toLowerCase())
    )

    setResults(filteredResults)
  }

  return (
    <SearchContext.Provider
      value={{
        query,
        results,
        handleSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}


export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};