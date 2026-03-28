import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full rounded-3xl border border-slate-800 bg-slate-950/85 p-5 shadow-2xl shadow-slate-950/40 transition-transform duration-300 ease-out hover:-translate-y-1">
        <div className="w-full overflow-hidden rounded-3xl mb-5 bg-slate-900/60">
          {featuredImage && (
            <img
              src={appwriteService.getFilePreview(featuredImage)}
              alt={title}
              className="h-52 w-full object-cover"
            />
          )}
        </div>
        <h2 className="text-xl font-semibold text-slate-100">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
