import axios from "axios";
import requestConfigJason from "./configJason";
import requestConfig from "./config";

const BASE_URL = "http://localhost:8080";

class DeliveryServiceAPI {
  // Get all DeliveryRequest
  static getAllDeliveryOders() {
    return axios.get(`${BASE_URL}/api/oders`, requestConfig);
  }

  // Get a DeliveryRequest by id
  static getDeliveryOderById(id) {
    return axios.get(`${BASE_URL}/api/oders/${id}`, requestConfig);
  }

  // Add a DeliveryRequest
  static addDeliveryOder(deliveryOder) {
    return axios.post(
      `${BASE_URL}/api/oders`,
      deliveryOder,
      requestConfigJason
    );
  }

  // Update a DeliveryRequest
  static updateDeliveryOder(id, deliveryOder) {
    return axios.patch(
      `${BASE_URL}/api/oders/${id}`,
      deliveryOder,
      requestConfigJason
    );
  }

  // Delete a DeliveryRequest
  static deleteDeliveryOder(id) {
    return axios.delete(`${BASE_URL}/api/oders/${id}`, requestConfig);
  }
}

export default DeliveryServiceAPI;
