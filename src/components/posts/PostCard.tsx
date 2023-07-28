import type { Post } from "~/types/types";

type PostProps = {
  post: Post;
};

export default function PostCard({ post }: PostProps) {
  const { title, body } = post;
  return (
    <div className="w-[400px] rounded-xl border-2 border-slate-400 p-4 shadow-xl">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p>{body}</p>
    </div>
  );
}
