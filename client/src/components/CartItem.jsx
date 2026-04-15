import useCartStore from "../../feauters/useCartStore";

export function CartItem({ product }) {
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const increaseCount = useCartStore((state) => state.increaseCount);
  const decreaseCount = useCartStore((state) => state.decreaseCount);

  return (
    <div
      className="flex items-center gap-4 p-4 
      bg-white/5 border border-white/10 rounded-xl
      backdrop-blur-sm"
    >
      {/* Image */}
      <img
        src={"http://localhost:5000" + product.image}
        alt="Phantom X"
        className="w-16 h-16 object-contain"
      />

      {/* Info */}
      <div className="flex-1">
        <h3 className="text-sm font-medium">{product.name}</h3>

        <div className="mt-2 text-[#fef9ad] font-medium">{product.price}</div>
      </div>

      {/* Actions */}
      <div className="flex flex-col items-end gap-2">
        {/* Quantity */}
        <div className="flex items-center border border-white/10 rounded-lg overflow-hidden">
          <button
            className="px-2 py-1 hover:bg-white/10 transition"
            onClick={() => decreaseCount(product.id)}
          >
            −
          </button>

          <span className="px-3 text-sm">{product.count}</span>

          <button
            className="px-2 py-1 hover:bg-white/10 transition"
            onClick={() => increaseCount(product.id)}
          >
            +
          </button>
        </div>

        {/* Remove */}
        <button
          className="text-xs text-gray-500 hover:text-red-400 transition"
          onClick={() => removeFromCart(product.id)}
        >
          Убрать
        </button>
      </div>
    </div>
  );
}
