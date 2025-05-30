import ProductImageUpload from "@/components/admin-view/image-upload";
import CommonForm from "@/components/common/form";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { addProductFormElements } from "@/config";
import { Fragment, useEffect, useState } from "react";

const initialFormData = {
    image: null,
    title: '',
    description: '',
    category: '',
    brand: '',
    price: "",
    salePrice: '',
    totalStock: ''
}

function AdminProducts() {
    const [openCreateProductsDialog, setopenCreateProductsDialog] = useState(false);
    const [formData, setFormData] = useState(initialFormData);
    const [imageFile, setImageFile] = useState(null);
    const [uploadedImageUrl, setUploadedImageUrl] = useState('')
    const [imageLoadingState, setImageloadingState] = useState(false)
    useEffect(() => {
        console.log("formData changed:", formData);
    }, [formData]);
    function onSubmit() {
        console.log(formData, "formData");


    }
    return (
        <Fragment>
            <div className="mb-5 w-full flex justify-end">
                <Button onClick={() => setopenCreateProductsDialog(true)}>Add new Product</Button>
            </div>
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4"></div>
            <Sheet open={openCreateProductsDialog} onOpenChange={() => {
                setopenCreateProductsDialog(false)
            }}>
                <SheetContent side="right" className="overflow-auto">
                    <SheetHeader>
                        <SheetTitle> Add new product</SheetTitle>
                        <SheetDescription> {/* Add this line */}
                            {/* Add product details and images */}
                        </SheetDescription>
                    </SheetHeader>
                    <ProductImageUpload
                        imageFile={imageFile}
                        setImageFile={setImageFile}
                        uploadedImageUrl={uploadedImageUrl}
                        setUploadedImageUrl={setUploadedImageUrl}
                        setImageloadingState={setImageloadingState}

                    />
                    <div className="py-6">
                        <CommonForm
                            onSubmit={onSubmit}
                            formData={formData}
                            setFormData={setFormData}
                            buttonText='Add'
                            formControls={addProductFormElements}
                        />
                    </div>

                </SheetContent>
            </Sheet>
        </Fragment>
    );
}
export default AdminProducts;