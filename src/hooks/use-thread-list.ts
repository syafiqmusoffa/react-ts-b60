import api from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export function useThreads() {
  return useQuery({
    queryKey: ["threads"],
    queryFn: async () => {
      const res = await api.get("/api/threads");
      return res.data;
    },
  });
}
