import { Button } from "../../../view/components/Button";
import { useAuth } from "../../../app/hooks/useAuth";

export function Dashboard() {
  const { signout } = useAuth()

  return (
    <div>
      <h1>Dashboard</h1>

      <Button onClick={signout}>
        Sair
      </Button>
    </div>
  );
}
