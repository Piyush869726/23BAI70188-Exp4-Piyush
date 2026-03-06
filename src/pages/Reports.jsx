import { useSelector } from "react-redux";
import { useMemo } from "react";

function Reports() {

  const items = useSelector(state => state.cart.items);

  const totalItems = useMemo(() => {
    return items.length;
  }, [items]);

  return (
    <div>
      <h2>Reports Page</h2>
      <p>Total Items in Cart: {totalItems}</p>
    </div>
  );
}

export default Reports;