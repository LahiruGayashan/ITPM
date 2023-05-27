import { Link } from "react-router-dom";
import NavBar from "../home/NavBar";
import DeliveryServiceAPI from "../../api/DeliveryServiceAPI";
import { useEffect, useState } from "react";
import makeToast from "../../components/toast";
import { FcDeleteDatabase } from "react-icons/fc";
import { BiEdit } from "react-icons/bi";
import * as XLSX from "xlsx";

const OderList = () => {
  const [oderLists, setOderLists] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Get all Oders
  useEffect(() => {
    DeliveryServiceAPI.getAllDeliveryOders()
      .then((response) => {
        setOderLists(response.data);
      })
      .catch((error) => {
        makeToast({ type: "error", message: error.response.data.error });
      });
  }, []);

  // Delete Oder post
  const deleteDeliveryOder = (id) => {
    DeliveryServiceAPI.deleteDeliveryOder(id)
      .then((response) => {
        makeToast({ type: "success", message: "Oder deleted" });
        setOderLists(oderLists.filter((oderList) => oderList._id !== id));
      })
      .catch((error) => {
        makeToast({ type: "error", message: "Something went wrong" });
      });
  };

  // Download report
  const downloadExcel = (data) => {
    console.log(data);
    // cusromize attribute name
    data = data.map((item) => {
      return {
        ID: item._id,
        Title: item.title,
        Description: item.description,
        Location: item.location,
        "Contact Number": item.contact_number,
        vehicle_Number: item.vehicle_Number
          ? item.vehicle_Number.split("T")[0]
          : "", // Add null check
      };
    });

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    // Get today's date
    const today = new Date();
    XLSX.writeFile(workbook, "Oder posts " + today + ".xlsx");
  };

  return (
    <div className="bg-gray-100">
      <div className="bg-yellow-400"></div>
      <NavBar />
      <h1 className="text-4xl font-medium text-center mt-10 mb-5">
        Harvest post
      </h1>

      <div className="overflow-hidden mt-5 mx-10">
        {/* Add New Foodcation */}
        <Link to="/oderadd">
          <button className="bg-green-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full float-left mr-10 mt-5 mb-5">
            Add Harvest post
          </button>
        </Link>

        {/* Download Report */}
        <button
          className="bg-red-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full float-left mr-10 mt-5 mb-5"
          onClick={() => {
            downloadExcel(oderLists);
          }}
        >
          Download Report
        </button>

        {/* Search */}
        <input
          className="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline float-right mr-10 mt-5 mb-5"
          type="text"
          placeholder="Enter Title"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>

      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg mt-5 mx-10">
        <table className="min-w-full divide-y divide-gray-200 text-md">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
              >
                ID
              </th>

              <th
                scope="col"
                className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
              >
                Description
              </th>

              <th
                scope="col"
                className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
              >
                Title
              </th>

              <th
                scope="col"
                className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {oderLists &&
              oderLists
                .filter((oderList) => {
                  if (searchTerm === "") {
                    return oderList;
                  } else if (
                    oderList.title
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return oderList;
                  } else {
                    return null;
                  }
                })
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .map((oderList) => (
                  <tr key={oderList._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className=" font-medium text-gray-900">
                          {oderList._id}
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className=" font-medium text-gray-900">
                          <Link
                            to={`/oderone/${oderList._id}`}
                            key={oderList._id}
                            className="hover:text-blue-500 hover:underline"
                          >
                            {oderList.title}
                          </Link>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {oderList.description}
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap flex">
                      <button
                        className="text-red-500 hover:text-red-900 text-4xl"
                        onClick={() => deleteDeliveryOder(oderList._id)}
                      >
                        <FcDeleteDatabase />
                      </button>

                      <Link to={`/oderupdate/${oderList._id}`}>
                        <BiEdit className="text-4xl text-blue-500 hover:text-blue-900" />
                      </Link>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OderList;
