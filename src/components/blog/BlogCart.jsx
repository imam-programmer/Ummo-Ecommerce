import React from 'react'

function BlogCart({ post }) {
  return (
    <article className="group flex flex-col">
      <div className="aspect-3/2 w-full overflow-hidden bg-[#EDEDED]">
     
      </div>

      <div className="flex flex-1 flex-col pt-5">
        <p
          className="text-xs tracking-wide"
          style={{ color: "var(--color-gray)" }}
        >
          BY ADMIN &nbsp;&nbsp;{post.date}
        </p>

        <h3
          className="mt-3 text-lg font-medium leading-snug"
          style={{ color: "var(--color-primary)" }}
        >
          {post.title}
        </h3>

        <p
          className="mt-3 text-sm leading-relaxed"
          style={{ color: "var(--color-gray)" }}
        >
          {post.excerpt}
        </p>

        <button
          type="button"
          className="mt-4 cursor-pointer w-fit text-xs text-primary font-semibold  underline  underline-offset-4 transition-opacity hover:opacity-60"
          
        >
          CONTINUE READING
        </button>
      </div>
    </article>
  );
}

export default BlogCart