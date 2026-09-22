import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { channelApi } from "../api/channelApi";
import { categoryApi } from "../api/categoryApi";

const ChannelContext = createContext();

export const ChannelProvider = ({ children }) => {
  const [channels, setChannels] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [totalChannels, setTotalChannels] = useState(0);

  const fetchCategories = async () => {
    try {
      const response = await categoryApi.getAll();
      setCategories(["All", ...(response.data || [])]);
    } catch (err) {
      console.error("Failed to load categories", err);
    }
  };

  const fetchChannels = useCallback(async () => {
    setLoading(true);
    try {
      const response = await channelApi.getAll({
        category: selectedCategory,
        search: searchQuery,
        limit: 150,
      });
      setChannels(response.data || []);
      setTotalChannels(response.total || 0);
    } catch (err) {
      console.error("Failed to load channels", err);
    } finally {
      setLoading(false);
    }
  }, [selectedCategory, searchQuery]);

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      fetchChannels();
    }, 250);
    return () => clearTimeout(handler);
  }, [fetchChannels]);

  return (
    <ChannelContext.Provider
      value={{
        channels,
        categories,
        selectedCategory,
        setSelectedCategory,
        searchQuery,
        setSearchQuery,
        loading,
        totalChannels,
        refetchChannels: fetchChannels,
      }}
    >
      {children}
    </ChannelContext.Provider>
  );
};

export const useChannelsContext = () => useContext(ChannelContext);
