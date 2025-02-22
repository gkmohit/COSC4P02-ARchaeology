import { json, redirect } from "@remix-run/cloudflare";
import type { LoaderArgs } from "@remix-run/cloudflare";
import { Outlet, useLoaderData, useTransition } from "@remix-run/react";
import { BuildingLibraryIcon, HomeIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { url as gravatarUrl } from "gravatar";

import { Sidebar } from "../components";

import { getTokenAndEmail } from "../utils.server";

const today = new Date();
const year = today.getFullYear().toString();

export const loader = async ({ context, request }: LoaderArgs) => {
  const { email, token } = await getTokenAndEmail(request, context);
  if (!token) {
    return redirect("/sign-in");
  }
  return json({ email, token });
};

export default function Admin() {
  const { email, token } = useLoaderData<typeof loader>();
  const transition = useTransition();

  // Pass email to sidebar

  return (
    <div className="bg-slate-50 min-h-full flex flex-row">
      <Sidebar
        links={[
          {
            Icon: HomeIcon,
            title: "Home",
            url: "/admin",
          },
          {
            Icon: BuildingLibraryIcon,
            title: "Artifacts",
            url: "/admin/artifacts",
          },
          {
            Icon: UserGroupIcon,
            title: "Users",
            url: "/admin/users",
          },
        ]}
        user={{
          role: "Authenticated",
          image: gravatarUrl(email),
          email,
        }}
      />
      <main className="p-4 flex-1 overflow-hidden">
        <Outlet context={{ token }} />
      </main>
    </div>
  )
}
