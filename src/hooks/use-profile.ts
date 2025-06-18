import api from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export function useProfile() {
    return useQuery({
        queryKey: ["my-profile"],
        queryFn: async () => {
            const res = await api.get("/api/my-profile")
            return res.data
        }
    })
}