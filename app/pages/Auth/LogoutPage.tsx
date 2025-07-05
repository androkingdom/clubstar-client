import { Link, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export function LogoutPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Card className="max-w-md w-full p-6 shadow-lg">
          <CardContent className="space-y-6 text-center">
            <h2 className="text-xl font-semibold">Logout Confirmation</h2>
            <p className="text-sm text-muted-foreground">
              Are you sure you want to logout from Clubstar?
            </p>

            <div className="flex justify-center gap-4 flex-wrap mt-4">
              <Button asChild className="w-32">
                <Link to="/user/logout/confirm">Yes, Logout</Link>
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate(-1)}
                className="w-32"
              >
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
