"use client";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { UploadButton } from "./upload-button";
import { FileCard } from "./file-card";
import Image from "next/image";
import { GridIcon, Loader2, RowsIcon } from "lucide-react";
import { SearchBar } from "./search-bar";
import { useState } from "react";
import { DataTable } from "./file-table";
import { columns } from "./columns";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Doc, Id } from "../../../convex/_generated/dataModel";
import { useAuth } from "@/providers/auth-provider";
// import BookMarkedList from "./bookmark-list";
import { Placeholder } from "./placeholder";
import { Loading } from "./loading";
import BookMarkedList from "../shared/book-marked-list";
export function FileBrowser({
  userId,
  favoritesOnly,
  deletedOnly,
}: {
  userId: Id<"users">;
  favoritesOnly?: boolean;
  deletedOnly?: boolean;
}) {
  // if (!userId) return;
  const bookmarkedBooks = useQuery(api.bookmark.getBookmarksByUserId, {
    userId,
  });
  // const { user } = useAuth();
  // const [query, setQuery] = useState("");
  // const [type, setType] = useState<Doc<"files">["type"] | "all">("all");

  // collections
  // const favorites = useQuery(
  //   api.files.getAllFavorites,
  //   orgId ? { orgId } : "skip"
  // );


  // const files = useQuery(
  //   api.files.getFiles,
  //   orgId
  //     ? {
  //         orgId,
  //         type: type === "all" ? undefined : type,
  //         query,
  //         favorites: favoritesOnly,
  //         deletedOnly,
  //       }
  //     : "skip"
  // );
  const isLoading = bookmarkedBooks === undefined;

  // const modifiedFiles =
  //   files?.map((file) => ({
  //     ...file,
  //     isFavorited: (favorites ?? []).some(
  //       (favorite) => favorite.fileId === file._id
  //     ),
  //   })) ?? [];

  return (
    <div>
      {/* <div className="flex justify-between items-center mb-8">
        <SearchBar query={query} setQuery={setQuery} />
        <UploadButton />
      </div> */}

      <Tabs defaultValue="grid">
        <div className="flex justify-between items-center">
        </div>

        {isLoading && (
          <Loading title="bookmarks" />
        )}

        <TabsContent value="grid">
          <div className="grid grid-cols-3 gap-4">
          {bookmarkedBooks?.map((e) => (
          <BookMarkedList key={e._id} bookId={e.bookId} />
        ))}
          </div>
        </TabsContent>
        <TabsContent value="table">
          {/* <DataTable columns={columns} data={bookmarkedBooks} /> */}
        </TabsContent>
      </Tabs>

      {bookmarkedBooks?.length === 0 && <Placeholder />}
      {/* <Placeholder /> */}
    </div>
  );
}
