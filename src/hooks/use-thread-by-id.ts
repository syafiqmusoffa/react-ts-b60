
import api from "@/utils/api";
import { useQuery } from "@tanstack/react-query";


export const fetchThreadById = (id: string) => {
  return useQuery({
    queryKey: ["threadbyid", id], 
    queryFn: async () => {
      const res = await api.get(`/api/thread/${id}`);
      return res.data;
    },
  });
};