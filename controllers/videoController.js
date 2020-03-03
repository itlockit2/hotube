import { videosData } from "../db";

export const videoHomeController = (req, res) =>
  res.render("home", { pageTitle: "Home", videosData });
export const videoSearchController = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy, videosData });
};
export const videos = (req, res) => res.send("Videos", { pageTitle: "Videos" });
export const upload = (req, res) => res.send("Upload", { pageTitle: "Upload" });
export const videoDetail = (req, res) =>
  res.send("Video Detail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) =>
  res.send("Edit Video", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
  res.send("Delete Video", { pageTitle: "Delete Video" });
