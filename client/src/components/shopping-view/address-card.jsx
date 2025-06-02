import { Label } from "@radix-ui/react-label";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";

function AddressCard({ addressInfo, handleDeleteAddress ,handleEditAddress}) {
    return (
        <Card>
            <CardContent className=" grid p-4 gap-4">
                <Label className="font-semibold">Address: {addressInfo?.address}
                </Label>
                <Label className="font-semibold">City: {addressInfo?.city}
                </Label>
                <Label className="font-semibold">Pincode: {addressInfo?.pincode}
                </Label>
                <Label className="font-semibold">Phone: {addressInfo?.phone}
                </Label>
                <Label className="font-semibold">Notes: {addressInfo?.notes}
                </Label>

            </CardContent>
            <CardFooter className="p-3 flex justify-between">

                <Button onClick={() => handleEditAddress(addressInfo)}> Edit</Button>

                <Button onClick={() => handleDeleteAddress(addressInfo)}> Delete</Button>

            </CardFooter>
        </Card>
    )
}
export default AddressCard;