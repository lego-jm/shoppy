import { useMutation, useQuery, useQueryClient } from "react-query";
import { addOrUpdateCart, getCarts, removeItem } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";

export default function useCart() {
  const { uid } = useAuthContext();
  const queryClient = useQueryClient();

  const cartQuery = useQuery(["carts", uid || ""], () => getCarts(uid), {
    enabled: !!uid,
  });
  const addOrUpdateItem = useMutation((item) => addOrUpdateCart(uid, item), {
    onSuccess: () => {
      queryClient.invalidateQueries(["carts", uid]);
    },
  });
  const removeCartItem = useMutation(
    (productId) => removeItem(uid, productId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["carts", uid]);
      },
    }
  );

  return { cartQuery, addOrUpdateItem, removeCartItem };
}
