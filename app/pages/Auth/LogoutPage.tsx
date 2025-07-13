import { Link, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export function LogoutPage() {
  const navigate = useNavigate();

  return (
    <motion.main
      className="min-h-screen px-4 py-4 sm:py-8 flex flex-col justify-start sm:justify-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex-grow flex items-center justify-center">
        <Card className="w-full max-w-md border border-border rounded-none shadow-none bg-background">
          <CardContent className="space-y-6 text-center p-6">
            <h2 className="text-xl font-semibold">Logout Confirmation</h2>
            <p className="text-sm text-muted-foreground">
              Are you sure you want to logout from Clubstar?
            </p>

            <div className="flex justify-center gap-4 flex-wrap pt-2">
              <Button asChild className="w-full sm:w-32 rounded-none border-border">
                <Link to="/user/logout/confirm">Yes, Logout</Link>
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate(-1)}
                className="w-full sm:w-32 rounded-none border-border"
              >
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.main>
  );
}
