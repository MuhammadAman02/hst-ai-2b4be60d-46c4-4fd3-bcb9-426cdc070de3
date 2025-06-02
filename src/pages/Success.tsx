import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Download, Mail } from "lucide-react";

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const planData = location.state || { plan: "Demo", price: "$29" };

  console.log("Success page rendered with plan:", planData);

  useEffect(() => {
    console.log("Payment successful for plan:", planData);
  }, [planData]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div 
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer"
            onClick={() => navigate("/")}
          >
            StripeApp
          </div>
          <Button 
            onClick={() => navigate("/")}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            Go to Dashboard
          </Button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Payment Successful!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Thank you for your purchase. Your subscription is now active.
            </p>
          </div>

          {/* Order Details */}
          <Card className="border-0 shadow-lg mb-8">
            <CardHeader>
              <CardTitle>Order Confirmation</CardTitle>
              <CardDescription>Your subscription details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b">
                <span className="text-gray-600">Plan</span>
                <span className="font-semibold">{planData.plan}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="text-gray-600">Amount</span>
                <span className="font-semibold">{planData.price}/month</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="text-gray-600">Status</span>
                <span className="font-semibold text-green-600">Active</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-600">Next Billing</span>
                <span className="font-semibold">
                  {new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={() => console.log("Download receipt clicked")}
            >
              <Download className="w-4 h-4" />
              Download Receipt
            </Button>
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={() => console.log("Email receipt clicked")}
            >
              <Mail className="w-4 h-4" />
              Email Receipt
            </Button>
          </div>

          {/* Next Steps */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">What's Next?</h2>
            <p className="text-lg mb-6 opacity-90">
              Your account is ready! Start exploring all the features included in your {planData.plan} plan.
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                variant="secondary"
                onClick={() => navigate("/")}
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Go to Dashboard
              </Button>
              <Button 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() => console.log("View documentation clicked")}
              >
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Success;