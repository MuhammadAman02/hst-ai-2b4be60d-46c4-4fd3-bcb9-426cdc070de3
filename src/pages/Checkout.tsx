import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Lock } from "lucide-react";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    name: "",
  });

  // Get plan details from navigation state or use defaults
  const planData = location.state || { plan: "Demo", price: "$29" };

  console.log("Checkout page rendered with plan:", planData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    console.log(`Updated ${name}:`, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Processing payment with data:", formData);
    setLoading(true);

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log("Payment processed successfully");
      navigate("/success", { state: planData });
    } catch (error) {
      console.error("Payment failed:", error);
      navigate("/cancel");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
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
            onClick={() => navigate("/pricing")}
          >
            Back to Pricing
          </Button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Complete Your Purchase
            </h1>
            <p className="text-gray-600">
              Secure checkout powered by Stripe
            </p>
          </div>

          <div className="grid gap-8">
            {/* Order Summary */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
                <CardDescription>Review your selected plan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center py-4 border-b">
                  <div>
                    <h3 className="font-semibold">{planData.plan} Plan</h3>
                    <p className="text-sm text-gray-600">Monthly subscription</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-lg">{planData.price}</p>
                    <p className="text-sm text-gray-600">per month</p>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4">
                  <span className="font-semibold">Total</span>
                  <span className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {planData.price}/month
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Payment Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-5 h-5" />
                  Payment Information
                </CardTitle>
                <CardDescription>Enter your payment details below</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="name">Cardholder Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <div className="relative">
                      <Input
                        id="cardNumber"
                        name="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        required
                      />
                      <CreditCard className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiryDate">Expiry Date</Label>
                      <Input
                        id="expiryDate"
                        name="expiryDate"
                        placeholder="MM/YY"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input
                        id="cvc"
                        name="cvc"
                        placeholder="123"
                        value={formData.cvc}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    disabled={loading}
                  >
                    {loading ? "Processing..." : `Pay ${planData.price}/month`}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    Your payment information is secure and encrypted. This is a demo checkout.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;