import axios from "axios";

const postProperty = (fields, setAlert) => {
  return axios
    .post("http://localhost:4000/api/v1/PropertyListing/", fields)
    .then((res) => {
      console.log(res.config.data);
      setAlert({
        message: "Property Successfully Added",
        isSuccess: true,
      });
    })
    .catch(() => {
      setAlert({
        message: "Server error. Please try again later.",
        isSuccess: false,
      });
    });
};

export default postProperty;
