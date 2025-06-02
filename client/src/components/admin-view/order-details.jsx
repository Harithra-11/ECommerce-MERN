import { useState } from "react";
import CommonForm from "../common/form";
import { DialogContent } from "../ui/dialog";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";


const initialFormData={
    status:
    ''
}


function AdminOrderDetailsView() {



    const [formData,setFormData]=useState(initialFormData)


    function handleUpdateStatus(event){
        event.preventDefault()
    }
    return (
        <DialogContent className="sm:max-w-[600px]">
            <div className="grid gap-6">

                <div className="grid gap-2">
                    <div className="flex mt-2 items-center justify-between ">
                        <p className="font-medium"> Order ID </p>
                        <Label> 123456</Label>

                    </div>
                    <div className="flex mt-2 items-center justify-between ">
                        <p className="font-medium"> Order date </p>
                        <Label> 27/09/2027</Label>

                    </div>
                    <div className="flex mt-2 items-center justify-between ">
                        <p className="font-medium"> Order price </p>
                        <Label> $500</Label>

                    </div>
                    <div className="flex mt-2 items-center justify-between ">
                        <p className="font-medium"> Order status </p>
                        <Label> In process</Label>

                    </div>


                </div>

                <Separator />
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <div className="font-medium">
                            Order Details
                        </div>
                        <ul className="grid gap-3">
                            <li className="flex items-center justify-between">
                                <span>
                                    Product 1
                                </span>
                                <span>
                                    100
                                </span>
                            </li>

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
                                John Doe
                            </span>
                            <span>
                                Address
                            </span>
                            <span>
                                City
                            </span>
                            <span>
                                Pincode
                            </span>
                            <span>
                                Phone
                            </span>
                            <span>
                                Notes
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