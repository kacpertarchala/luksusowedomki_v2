import { redirect } from "next/navigation";

const DEFAULT_LOCALE = "pl";

export default function RootPage() {
  redirect(`/${DEFAULT_LOCALE}`);
}
