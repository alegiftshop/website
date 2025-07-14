import api from "../connection/api"; // Import your Axios instance
import endpoints from "../connection/endpoints"; // Import your endpoints

export const signUp = async (userData) => {
  try {
    const response = await api.post(endpoints.signUp, userData);
    return response.data;
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
};

export const signIn = async (credentials) => {
  try {
    const response = await api.post(endpoints.signIn, credentials);
    return response.data;
  } catch (error) {
    console.error("Error signing in:", error);
    throw error;
  }
};

export const signOut = async () => {
  try {
    const response = await api.post(endpoints.signOut); // Sign-out may not need a body
    return response.data;
  } catch (error) {
    console.error("Error signing out:", error);
    throw error;
  }
};

export const fetchSections = async () => {
  try {
    const response = await api.get(endpoints.fetchSections);
    return response.data;
  } catch (error) {
    console.error("Error fetching sections:", error);
    throw error;
  }
};

export const fetchUser = async () => {
  try {
    const response = await api.get(endpoints.fetchUser);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const fetchCategories = async () => {
  try {
    const response = await api.get(endpoints.fetchCategories);
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

export const fetchProducts = async () => {
  try {
    const response = await api.get(endpoints.fetchProducts);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};