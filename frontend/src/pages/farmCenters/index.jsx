import { useState } from "react";
import NavBar from "../home/NavBar";

const centers = [
  {
    id: 1,
    name: "Central Province",
    description: "sarusara Farms",
    address: "123 Main St, Anytown USA",
    phone: "555-1234",
    website: "https://www.abcrestaurant.com",
    image: "https://picsum.photos/400/300?random=1",
    categories: ["Restaurant", "American"],
  },
  {
    id: 2,
    name: "Eastern Province",
    description: "A boutique clothing store with the latest styles",
    address: "456 High St, Anytown USA",
    phone: "555-5678",
    website: "https://www.xyzclothing.com",
    image: "https://picsum.photos/400/300?random=2",
    categories: ["Clothing", "Fashion"],
  },
  {
    id: 3,
    name: "Northern Province",
    description: "A hardware store with a wide selection of tools",
    address: "789 Main St, Anytown USA",
    phone: "555-9012",
    website: "https://www.123hardware.com",
    image: "https://picsum.photos/400/300?random=3",
    categories: ["Hardware", "Tools"],
  },
  {
    id: 4,
    name: "Southern Province",
    description: "A cozy bookstore with a great selection of books",
    address: "101 High St, Anytown USA",
    phone: "555-3456",
    website: "https://www.456bookstore.com",
    image: "https://picsum.photos/400/300?random=4",
    categories: ["Books", "Literature"],
  },
  {
    id: 5,
    name: "Western Province",
    description: "A pet store with everything you need for your furry friend",
    address: "1122 Main St, Anytown USA",
    phone: "555-7890",
    website: "https://www.789petshop.com",
    image: "https://picsum.photos/400/300?random=5",
    categories: ["Pets", "Animals"],
  },
  {
    id: 6,
    name: "North Western Province",
    description: "A pet store with everything you need for your furry friend",
    address: "1122 Main St, Anytown USA",
    phone: "555-7890",
    website: "https://www.789petshop.com",
    image: "https://picsum.photos/400/300?random=5",
    categories: ["Pets", "Animals"],
  },
  {
    id: 7,
    name: "North Central Province",
    description: "A pet store with everything you need for your furry friend",
    address: "1122 Main St, Anytown USA",
    phone: "555-7890",
    website: "https://www.789petshop.com",
    image: "https://picsum.photos/400/300?random=5",
    categories: ["Pets", "Animals"],
  },
  {
    id: 8,
    name: "Uva Province",
    description: "A pet store with everything you need for your furry friend",
    address: "1122 Main St, Anytown USA",
    phone: "555-7890",
    website: "https://www.789petshop.com",
    image: "https://picsum.photos/400/300?random=5",
    categories: ["Pets", "Animals"],
  },
  {
    id: 9,
    name: "Sabaragamuwa Province",
    description: "A pet store with everything you need for your furry friend",
    address: "1122 Main St, Anytown USA",
    phone: "555-7890",
    website: "https://www.789petshop.com",
    image: "https://picsum.photos/400/300?random=5",
    categories: ["Pets", "Animals"],
  },
];

const Centers = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCenters = centers.filter((center) =>
    center.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen mt-">
      <NavBar />
      <h1 className=" text-center pt-5 text-4xl font-bold text-gray-800 tracking-tight leading-tight md:text-5xl md:leading-tight">
        Find a Farms Center Near By
      </h1>

      <div className="max-w-2xl mx-auto mt-5 ">
        <input
          type="text"
          className="w-full py-2 px-3 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Search centers..."
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>

      <div className="max-w-4xl mx-auto mt-10 ">
        {filteredCenters.length === 0 ? (
          <p className="text-center">No centers found.</p>
        ) : (
          <ul className="divide-y divide-black ">
            {filteredCenters.map((center) => (
              <li key={center.id} className="py-10">
                <a
                  href={`/center/${center.id}`}
                  className="flex items-center space-x-4"
                >
                  <div className="flex-shrink-0">
                    <img
                      src={`https://picsum.photos/64?random=${center.id}`}
                      alt=""
                      className="rounded-full w-12 h-12"
                    />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-lg font-extrabold ">{center.name}</h2>
                    <p className="text-gray-500">{center.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Centers;
