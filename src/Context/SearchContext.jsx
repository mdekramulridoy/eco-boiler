import { createContext, useState } from "react"

export const SearchContext = createContext()

const searchData = [
  {
    title: "Eco Boiler Company Profile",
    description: "Eco Boiler Solutions Limited সম্পর্কে তথ্য",
    path: "/about",
  },
  {
    title: "Industrial Boiler Services",
    description: "ইন্ডাস্ট্রিয়াল বয়লার ইনস্টলেশন ও মেইনটেন্যান্স",
    path: "/services",
  },
  {
    title: "Steam Boiler",
    description: "উচ্চ ক্ষমতার স্টিম বয়লার সমাধান",
    path: "/services",
  },
  {
    title: "Thermal Oil Boiler",
    description: "এনার্জি এফিশিয়েন্ট থার্মাল অয়েল বয়লার",
    path: "/services",
  },
  {
    title: "Contact Eco Boiler",
    description: "Eco Boiler এর সাথে যোগাযোগ করুন",
    path: "/contact",
  },
]

const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])

  const handleSearch = (text) => {
    setQuery(text)

    if (!text) {
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

export default SearchProvider
