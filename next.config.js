const withImages = require("next-images");
module.exports = withImages({
  reactStrictMode: true,
  images: {
    domains: ["source.unsplash.com", "unsplash.com", "images.unsplash.com"],
    disableStaticImages: true
  },
});
