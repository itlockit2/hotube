import routes from "../routes";
import Video from "../models/Video";

export const videoHomeController = async (req, res) => {
  try {
    const videosData = await Video.find({});
    res.render("home", { pageTitle: "Home", videosData });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videosData: [] });
  }
};
export const videoSearchController = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  res.render("search", {
    pageTitle: "Search",
    searchingBy,
    videosData,
  });
};
export const videos = (req, res) =>
  res.send("Videos", { pageTitle: "Videos" });
export const getUpload = (req, res) => {
  res.render("videoUpload", { pageTitle: "Upload" });
};
export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path },
  } = req;
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description,
  });
  res.redirect(routes.videoDetail(newVideo.id));
};
export const videoDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("videoDetail", { pageTitle: "Video Detail", video });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};
export const postEditVideo = async (req, res) => {
  const {
    params: { id },
    body: { title, description },
  } = req;
  try {
    await Video.findByIdAndUpdate(
      { _id: id },
      { title, description }
    );
    res.redirect(routes.videoDetail(id));
  } catch (error) {
    res.redirect(routes.home);
  }
};
export const getEditVideo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("editVideo", {
      pageTitle: `Edit ${video.title}`,
      video,
    });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
