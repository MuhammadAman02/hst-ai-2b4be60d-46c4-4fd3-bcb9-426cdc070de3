import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { XCircle, ArrowLeft, HelpCircle } from "lucide-react";

const Cancel = () => {
  const navigate = useNavigate();

  console.log("Cancel page rendered");

  useEffect(() => {
    console.log("Payment was cancelled or failed");
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
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
            variant="outline"
            onClick={() => navigate("/")}
          >
            Back to Home
          </Button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Cancel Icon */}
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <XCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Payment Cancelled
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your payment was not processed. No charges have been made to your account.
            </p>
          </div>

          {/* Information Card */}
          <Card className="border-0 shadow-lg mb-8">
            <CardHeader>
              <CardTitle>What Happened?</CardTitle>
              <CardDescription>Your payment was cancelled or encountered an issue</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-left">
              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>Possible reasons:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>You cancelled the payment process</li>
                  <li>Payment method was declined</li>
                  <li>Session expired during checkout</li>
                  <li>Technical issue occurred</li>
                </ul>
              </div>
              <div className="pt-4 border-t">
                <p className="text-sm text-gray-500">
                  Don't worry - no charges have been made to your account. You can try again anytime.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <Button 
              onClick={() => navigate("/pricing")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Try Again
            </Button>
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={() => console.log("Contact support clicked")}
            >
              <HelpCircle className="w-4 h-4" />
              Contact Support
            </Button>
          </div>

          {/* Help Section */}
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Need Help?</h2>
            <p className="text-lg mb-6 text-gray-600">
              If you're experiencing issues with payment, our support team is here to help.
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                variant="outline"
                onClick={() => navigate("/pricing")}
                className="border-gray-400 text-gray-700 hover:bg-gray-300"
              >
                View Pricing Again
              </Button>
              <Button 
                variant="outline"
                className="border-gray-400 text-gray-700 hover:bg-gray-300"
                onClick={() => console.log("Contact support clicked")}
              >
                Get Support
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cancel;