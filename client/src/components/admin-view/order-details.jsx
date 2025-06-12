import { useState } from "react";
import CommonForm from "../common/form";
import { DialogContent } from "../ui/dialog";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import { useSelector } from "react-redux";


const initialFormData={
    status:
    ''
}


function AdminOrderDetailsView({orderDetails}) {



    const [formData,setFormData]=useState(initialFormData)
    const {user}=useSelector((state)=>state.auth)


    function handleUpdateStatus(event){
        event.preventDefault()
    }
    return (
        <DialogContent className="sm:max-w-[600px]">
            <div className="grid gap-6">

                    <div className="grid gap-2">
                    <div className="flex mt-2 items-center justify-between ">
                        <p className="font-medium"> Order ID </p>
                        <Label> {orderDetails?._id}</Label>

                    </div>
                    <div className="flex mt-2 items-center justify-between ">
                        <p className="font-medium"> Order date </p>
                        <Label> {orderDetails?.orderDate.split('T')[0]}</Label>

                    </div>
                    <div className="flex mt-2 items-center justify-between ">
                        <p className="font-medium"> Order price </p>
                        <Label> ${orderDetails?.totalAmount}</Label>

                    </div>
                    <div className="flex mt-2 items-center justify-between ">
                        <p className="font-medium"> Payment Method</p>
                        <Label> {orderDetails?.paymentMethod}</Label>

                    </div>
                    <div className="flex mt-2 items-center justify-between ">
                        <p className="font-medium"> Payment status </p>
                        <Label> {orderDetails?.paymentStatus}</Label>

                    </div>
                    <div className="flex mt-2 items-center justify-between ">
                        <p className="font-medium"> Order status </p>
                        <Label>
                            <Badge className={`py-1 px-3 ${orderDetails?.orderStatus === 'Confirmed' ? 'bg-green-500' : 'bg-black'}`}>
                                {orderDetails?.orderStatus}
                            </Badge>

                        </Label>

                    </div>


                </div>

                <Separator />
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <div className="font-medium">
                            Order Details
                        </div>
                        <ul className="grid gap-3">
                            {
                                orderDetails?.cartItems && orderDetails?.cartItems.length > 0 ?
                                    orderDetails?.cartItems.map(item =>
                                        <li className="flex items-center justify-between">
                                            <span>
                                                Title:{item.title}
                                            </span>
                                            <span>
                                                Quantity:{item.quantity}
                                            </span>
                                            <span>
                                               Price: ${item.price}
                                            </span>
                                        </li>

                                    ) : null
                            }





                        </ul>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <div className="font-medium">
                            Shipping Info
                        </div>

                        <div className="grid gap-0.5 text-muted-foreground">
                            <span>
                               {user.userName}
                            </span>
                            <span>
                                {orderDetails?.addressInfo?.address}
                            </span>
                            <span>
                                {orderDetails?.addressInfo?.city}
                            </span>
                            <span>
                                {orderDetails?.addressInfo?.pincode}
                            </span>
                            <span>
                                {orderDetails?.addressInfo?.phone}
                            </span>
                            <span>
                                {orderDetails?.addressInfo?.notes}
                            </span>

                        </div>

                    </div>

                </div>

                <div>
                    <CommonForm
                        formControls={[
                            {
                                label: "Order status",
                                name: "status",
                                componentType: "select",
                                options: [
                                    { id: "pending", label: "In Pending" },
                                    { id: "inProcess", label: "In Process" },
                                    { id: "inShipping", label: "In Shipping" },
                                    { id: "delivered", label: "Delivered" },
                                    { id: "rejected", label: "Rejected" },

                                ],
                            },
                        ]

                        }
                        formData={formData}
                        setFormData={setFormData}
                        buttonText={'Update Order status'}
                        onSubmit={handleUpdateStatus}
                         />
                </div>

            </div>

        </DialogContent>
    )

}
export default AdminOrderDetailsView;