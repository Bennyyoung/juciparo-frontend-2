import http from "./http-common";

const upload = (file) => {
  let formData = new FormData();

  formData.append("file", file);

  return http.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

const getFiles = () => {
  return http.get("/files");
};

export default {
  upload,
  getFiles,
};

