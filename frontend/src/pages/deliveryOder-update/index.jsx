import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import storage from "../../utils/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import DeliveryServiceAPI from "../../api/DeliveryServiceAPI";
import makeToast from "../../components/toast";
import NavBar from "../home/NavBar";

const OderUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");

  const [contact_number, setContact_number] = useState("");

  const [file, setFile] = useState("");
  const [percent, setPercent] = useState(0);

  // Update form
  const handleUpdate = (event) => {
    event.preventDefault();

    const data = {
      title: title,
      description: description,
      image: image,
      location: location,
      contact_number: contact_number,
    };

    DeliveryServiceAPI.updateDeliveryOder(id, data)
      .then((response) => {
        makeToast({
          type: "success",
          message: "Oder Post Updated",
        });
        navigate("/oderlist");
      })
      .catch((err) => {
        makeToast({ type: "error", message: "Error" });
      });
  };

  // Firebase Image Upload
  const handleUpload = () => {
    if (!file) {
      alert("Please choose a file to upload!");
    }

    const storageRef = ref(storage, `/itpm_images/${file.name}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update upload progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setImage(url);
        });
      }
    );
  };

  useEffect(() => {
    DeliveryServiceAPI.getDeliveryOderById(id)
      .then((res) => {
        setTitle(res.data.title);
        setDescription(res.data.description);
        setImage(res.data.image);
        setLocation(res.data.location);
        setContact_number(res.data.contact_number);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
        <h1 className="text-center text-3xl font-extrabold text-gray-900 mb-5">
          Update Harvest Post
        </h1>

        <form onSubmit={handleUpdate}>
          <div className="max-w-2xl mx-auto mt-5 shadow-md overflow-hidden rounded-md bg-white p-10">
            <div className="grid grid-cols-1 gap-6">
              {/* Title */}
              <div className="col-span-1">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <input
                  type="text"
                  required
                  name="title"
                  id="title"
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
              </div>

              {/* Description */}
              <div className="col-span-1">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  type="text"
                  required
                  name="description"
                  id="description"
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />
              </div>

              {/* Image */}
              <div className="col-span-1">
                <label
                  htmlFor="image"
                  className="block text-sm font-medium text-gray-700"
                >
                  Image
                </label>
                <input
                  type="file"
                  // required
                  name="image"
                  id="image"
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  onChange={(event) => setFile(event.target.files[0])}
                />
                <button
                  type="button"
                  className="inline-flex items-center px-1 py-1 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mt-2"
                  onClick={handleUpload}
                >
                  Upload
                </button>

                {percent > 0 && (
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full my-2"
                      style={{ width: `${percent}%` }}
                    ></div>
                  </div>
                )}
              </div>

              {/* Location */}
              <div className="col-span-1">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700"
                >
                  Location
                </label>
                <input
                  type="text"
                  required
                  name="location"
                  id="location"
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                />
              </div>

              {/* Contact Number */}
              <div className="col-span-1">
                <label
                  htmlFor="contact_number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Contact Number
                </label>
                <input
                  type="text"
                  required
                  name="contact_number"
                  id="contact_number"
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  value={contact_number}
                  onChange={(event) => setContact_number(event.target.value)}
                />
              </div>

              {/* Submit Button */}
              <div className="col-span-1">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OderUpdate;
