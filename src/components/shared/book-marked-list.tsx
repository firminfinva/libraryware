import React from "react";
import { Id } from "../../../convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import BookCard from "./book-card";

type Props = { bookId: Id<"book"> };

export default function BookMarkedList({ bookId }: Props) {
  const book = useQuery(api.book.getBookById, { bookId });
  if (!book) return;
  return (
    <div className="flex flex-wrap gap-3">
      <BookCard
        key={book._id}
        id={book._id}
        href={`/user/${book._id}`}
        title={book.title}
        cover={book.coverUrl || ""}
        author={book.author}
        openLibraryId={book.openLibraryId}
      />
    </div>
  );
}
