import { useMutation, useQuery, useQueryClient } from "react-query";
import { addProduct, getAllProducts } from "../api/firebase";

export default function useProducts() {
  const queryClient = useQueryClient();

  const productQuery = useQuery(["products"], () => getAllProducts(), {
    staleTime: 1000 * 60 * 5,
  });
  const addProductQuery = useMutation((product) => addProduct(product), {
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },
  });

  return { productQuery, addProductQuery };
}
