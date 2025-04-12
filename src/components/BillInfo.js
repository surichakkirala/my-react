const BillInfo = ({ items }) => {
  const totalItemPrice = items.reduce((total, item) => {
    return (
      total + item.quantity * (item.price / 100 || item.defaultPrice / 100)
    );
  }, 0);
  const deliveryFee = 30,
    platformFee = 10,
    GST = (totalItemPrice * 18) / 100;

  const billTotal = totalItemPrice + deliveryFee + platformFee + GST;

  return (
    <div className="p-4 w-full">
      <h1 className=" text-lg font-bold mb-3">BillInfo</h1>
      <div className="flex justify-between mb-3">
        <span>ItemTotal</span>
        <span>₹ {totalItemPrice}</span>
      </div>
      <div className="flex justify-between mb-3 border-b-1 pb-3 border-gray-300">
        <span>DeliveryFee</span>
        <span>₹ {deliveryFee}</span>
      </div>
      <div className="flex justify-between  mb-3">
        <span>Platform Fee</span>
        <span>₹ {platformFee}</span>
      </div>
      <div className="flex justify-between mb-3 border-b-1 pb-3 border-gray-300">
        <span>GST</span>
        <span>₹ {GST.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-3  border-gray-300">
        <span>Total Amount</span>
        <span>₹ {billTotal.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default BillInfo;
