import axios from "axios";

export const Category = axios.create({
  baseURL: `https://crackersbackend2.onrender.com/category`,
});

export const Product = axios.create({
  baseURL: `https://crackersbackend2.onrender.com/product`,
});

export const Order = axios.create({
  baseURL: `https://crackersbackend2.onrender.com/order`,
});

export const Marquee = axios.create({
  baseURL: `https://crackersbackend2.onrender.com/marquee`,
});
export const Video = axios.create({
  baseURL: `https://crackersbackend2.onrender.com/video`,
});
