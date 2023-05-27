const requestConfig = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}` || "",
    "Content-type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
  },
};

export default requestConfig;
