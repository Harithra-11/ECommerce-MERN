import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import { Dialog } from "../ui/dialog";
import { useState } from "react";
import AdminOrderDetailsView from "./order-details";

function AdminOrdersView() {
    const [openDetailsDialog, setOpenDetailsDialog] = useState(false)
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    All orders
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>
                                Order ID
                            </TableHead>
                            <TableHead>
                                Order date
                            </TableHead>
                            <TableHead>
                                Order status
                            </TableHead>
                            <TableHead>
                                Order price
                            </TableHead>
                            <TableHead>
                                <span className="sr-only"> Details</span>
                            </TableHead>
                        </TableRow>
                    </TableHeader>



                    <TableBody>
                        <TableRow>
                            <TableCell>123456</TableCell>
                            <TableCell>123456</TableCell>
                            <TableCell>123456</TableCell>
                            <TableCell>123456</TableCell>
                            <TableCell>
                                <Dialog open={openDetailsDialog} onOpenChange={setOpenDetailsDialog}>
                                    {/* <DialogTrigger asChild> */}
                                        <Button onClick={() => setOpenDetailsDialog(true)}>
                                            view details
                                        </Button>

                                    {/* </DialogTrigger> */}


                                    <AdminOrderDetailsView />


                                </Dialog>

                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
export default AdminOrdersView;