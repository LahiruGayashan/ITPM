const CenterDetails = () => {
  const center = {
    id: 1,
    name: "Western Province",
    description: "A family-owned restaurant serving delicious food FREE",
    address: "123 Main St, Anytown USA",
    phone: "555-1234",
    website: "https://www.abcrestaurant.com",
    image: "https://picsum.photos/id/23/200/300",
    categories: ["Restaurant", "American"],
  };

  return (
    // <div className="bg-blue-100 min-h-screen ">
    <div className="bg-white rounded-lg shadow-2xl  p-8 max-w-2xl mx-auto pt-8 mt-12">
      <h1 className="text-3xl font-bold mb-4 text-gray-900">{center.name}</h1>
      <img
        src={center.image}
        alt={center.name}
        className="w-full rounded-lg mb-4 h-64 object-cover"
      />
      <p className="mb-6 text-lg text-gray-700">{center.description}</p>
      <div className="flex flex-wrap mb-4">
        <p className="text-gray-700 mr-4">
          <span className="font-bold">Location:</span> {center.address}
        </p>
        <p className="text-gray-700">
          <span className="font-bold">Website:</span>{" "}
          <a
            href={center.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {center.website}
          </a>
        </p>
      </div>
      <div className="flex flex-wrap mb-4">
        <p className="text-gray-700 mr-4">
          <span className="font-bold">Contact:</span> {center.phone}
        </p>
        <p className="text-gray-700">
          <span className="font-bold">Categories:</span>{" "}
          {center.categories.join(", ")}
        </p>
      </div>
      {/* </div> */}
    </div>
  );
};

export default CenterDetails;
