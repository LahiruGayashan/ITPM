const requestConfigJason = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}` || "",
    "Content-type": "application/json",
  },
};

export default requestConfigJason;
