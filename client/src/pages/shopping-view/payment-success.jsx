import { CheckCircle2 } from "lucide-react";


function PaymentSuccessPage(){
    return (
        <div className="flex items-center justify-center min-h-screen bg-green-50 p-4">
            <div className="bg-white p-8 rounded-2xl shadow-md text-center max-w-md">
                <CheckCircle2 size={64} className="text-green-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-green-700 mb-2">
                    Payment Successful!
                </h2>
                <p className="text-gray-600 mb-6">
                    Thank you for your purchase. Your order has been placed successfully.
                </p>

            </div>
        </div>

    )
}
export default PaymentSuccessPage;