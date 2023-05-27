import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DeliveryServiceAPI from "../../api/DeliveryServiceAPI";
import NavBar from "../home/NavBar";

const OderOne = () => {
  const { id } = useParams();
  const [oder, setOder] = useState({});

  // Get one Oder post by id
  useEffect(() => {
    DeliveryServiceAPI.getDeliveryOderById(id)
      .then((response) => {
        setOder(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />
      <h1 className="text-4xl font-medium text-center mt-10 mb-5">
        {oder.title}
      </h1>

      {/* Card */}
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src={oder.image}
              alt="Advertisement"
            />
          </div>
          <div className="p-8">
            <p className="mt-2 text-gray-500">{oder.description}</p>
            <p className="mt-2 text-gray-500">{oder.location}</p>
            <p className="mt-2 text-gray-500">{oder.contact_number}</p>
            <p className="mt-2 text-gray-500">
              {oder.closing_date && oder.closing_date.split("T")[0]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OderOne;
