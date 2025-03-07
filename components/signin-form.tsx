import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Logo from "./ui/logo"

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <a
              href="#"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <Logo size="lg" />
            </a>
            <h1 className="text-2xl font-medium my-4">Create AI powered test in seconds!</h1>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
          <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
            <span className="relative z-10 bg-background px-2 text-muted-foreground">
              Or
            </span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Button variant="outline" className="w-full">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M64.0001 34.9092H34.9092V64.0001H64.0001V34.9092Z" fill="#FEBA08" />
                <path d="M29.0909 34.9092H0V64.0001H29.0909V34.9092Z" fill="#05A6F0" />
                <path d="M64.0001 0H34.9092V29.0909H64.0001V0Z" fill="#80BC06" />
                <path d="M29.0909 0H0V29.0909H29.0909V0Z" fill="#F25325" />
              </svg>
              Continue with Microsoft
            </Button>
            <Button variant="outline" className="w-full">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M64.0003 32.7111C64.0003 30.08 63.7824 28.16 63.3109 26.1689H32.6533V38.0444H50.6486C50.286 40.9956 48.3268 45.44 43.973 48.4265L43.9119 48.8241L53.6053 56.1832L54.2769 56.2489C60.4446 50.6666 64.0003 42.4533 64.0003 32.7111Z" fill="#4285F4" />
                <path d="M32.6531 64.0002C41.4693 64.0002 48.8705 61.1556 54.2766 56.2491L43.9727 48.4267C41.2154 50.3111 37.5146 51.6267 32.6531 51.6267C24.0182 51.6267 16.6895 46.0446 14.077 38.3291L13.694 38.361L3.61472 46.0054L3.48291 46.3645C8.85247 56.8178 19.882 64.0002 32.6531 64.0002Z" fill="#34A853" />
                <path d="M14.077 38.3291C13.3876 36.338 12.9887 34.2045 12.9887 32.0002C12.9887 29.7956 13.3876 27.6624 14.0407 25.6713L14.0224 25.2472L3.81682 17.48L3.48291 17.6356C1.26986 21.9735 0 26.8447 0 32.0002C0 37.1557 1.26986 42.0267 3.48291 46.3645L14.077 38.3291Z" fill="#FBBC05" />
                <path d="M32.6531 12.3732C38.7845 12.3732 42.9205 14.9688 45.2788 17.1378L54.4942 8.32C48.8345 3.16446 41.4693 0 32.6531 0C19.882 0 8.85247 7.18217 3.48291 17.6354L14.0407 25.6711C16.6895 17.9555 24.0182 12.3732 32.6531 12.3732Z" fill="#EB4335" />
              </svg>
              Continue with Google
            </Button>
          </div>
        </div>
      </form>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary  ">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  )
}
