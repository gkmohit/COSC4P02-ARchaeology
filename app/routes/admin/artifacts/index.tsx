import type { LoaderArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { toast } from "react-toastify";
import { EyeIcon, XMarkIcon, PencilIcon } from "@heroicons/react/24/solid";

import { Button, PageHeading, Tooltip } from "../../../components";

import { ArtifactService } from "../../../services.server";

export const loader = async ({ context }: LoaderArgs) => {
  const service = new ArtifactService(context);
  const artifacts = await service.getArtifacts();
  return json(artifacts);
}

export default function Artifacts() {
  const allArtifacts = useLoaderData<typeof loader>();
  const [artifacts, setArtifacts] = useState(allArtifacts);

  async function handleDelete(e: React.MouseEvent<HTMLAnchorElement>, artifactId: number) {
    e.preventDefault();
    const url = e.currentTarget.href;

    if (confirm("Are you sure you want to delete this artifact? This cannot be undone.")) {
      try {
        const response = await fetch(url, { method: "delete" });
        const result: { error: any } = await response.json();
        if (result.error) {
          throw new Error('Error deleting artifact');
        }
        toast.success("Deleted artifact");
        setArtifacts(artifacts.filter(({ id }) => id !== artifactId))
      } catch (e) {
        toast.error("Sorry! Could not delete artifact");
      }
    }
  }

  return (
    <>
      <div className="sm:flex sm:items-center border-b border-slate-200 pb-4 mb-4">
        <div className="sm:flex-auto">
          <PageHeading title="Artifacts" />
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <Button href="/admin/artifacts/new" primary>
            Add artifact
          </Button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="overflow-x-auto shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
          <table className="min-w-full divide-y divide-slate-300">
            <thead className="bg-slate-50">
              <tr>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-slate-900 sm:pl-6">
                  ID
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900">
                  Object ID
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900">
                  Name
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {artifacts.map((artifact) => (
                <tr key={artifact.id}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-slate-900 sm:pl-6">
                    {artifact.id}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500">{artifact.objectId}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500">{artifact.name}</td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 flex items-center justify-end gap-2">
                    <Tooltip content="Manage QR code and images">
                      <Button href={`/admin/artifacts/${artifact.id}`} size="small" inverse>
                        <EyeIcon className="h-4 w-4" aria-hidden={true} />
                        <span className="sr-only">Manage artifact images and QR code</span>
                      </Button>
                    </Tooltip>

                    <Tooltip content="Edit record">
                      <Button href={`/admin/artifacts/${artifact.id}/edit`} size="small" inverse>
                        <PencilIcon className="h-4 w-4" aria-hidden={true} />
                        <span className="sr-only">Edit artifact</span>
                      </Button>
                    </Tooltip>

                    <Tooltip content="Delete artifact">
                      <Button href={`/admin/artifacts/${artifact.id}/delete`} size="small" inverse danger onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleDelete(e, artifact.id)}>
                        <XMarkIcon className="h-4 w-4" aria-hidden={true} />
                        <span className="sr-only">Delete artifact</span>
                      </Button>
                    </Tooltip>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
