import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { removeAll } from "../../features/CartSlice";
import { useParams } from "react-router-dom";
import useApi from "../../Hooks/useApi";

const SuccessPayment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const orderId = useParams().orderId;

  const { put } = useApi();

  //  console.log(params.orderId)

  useEffect(() => {


    put(`orders/${orderId}`, { paymentInfo: "paid" }, "updatedOrder");
    put(`payments/orderId/${orderId}`, { status: "paid" }, "updatePayment");

    toast.success("Payment Successful", { duration: 4000, position: "top-right" });
    dispatch(removeAll());
    navigate("/");
  }, [dispatch]);

  return (
    <div>
      <p>sss</p>
    </div>
  );
};

export default SuccessPayment;
