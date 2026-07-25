import React, { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import NotFound from './error/404';

const postModules = import.meta.glob('../../public/Markdown/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
});

const parseFrontmatter = (content) => {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);
  if (!match) return { meta: {}, body: content };

  const metaLines = match[1].split('\n');
  const meta = {};

  metaLines.forEach((line) => {
    const [key, ...rest] = line.split(':');
    if (!key || !rest.length) return;
    const value = rest.join(':').trim();
    meta[key.trim()] = value.replace(/^['"]|['"]$/g, '');
  });

  return {
    meta,
    body: content.replace(match[0], ''),
  };
};

const posts = Object.entries(postModules)
  .map(([filePath, content]) => {
    const fileName = filePath.split('/').pop()?.replace(/\.md$/, '') || 'post';
    const { meta, body } = parseFrontmatter(content);

    return {
      slug: fileName,
      title: meta.title || fileName.replace(/-/g, ' '),
      date: meta.date || '',
      tags: meta.tags ? meta.tags.split(',').map((tag) => tag.trim()).filter(Boolean) : [],
      content: body,
      meta,
    };
  })
  .sort((a, b) => a.title.localeCompare(b.title));

const PostPage = () => {
  const { slug } = useParams();

  const currentPost = useMemo(() => {
    if (!slug) return null;
    return posts.find((post) => post.slug === slug) || null;
  }, [slug]);

  if (!slug) {
    return (
      <div className="py:40px px:20px f:#fff">
        <h1 className="font-weight:bold f:28px mb:20px">文章列表</h1>
        <div className="flex flex:col gap:12px">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/posts/${post.slug}`}
              className="p:16px r:10px bg:#1e1e1e b:1px|solid|#2f2f2f text-decoration:none f:#fff"
            >
              <div className="font-weight:bold">{post.title}</div>
              {post.date && <div className="f:#999 mt:6px">{post.date}</div>}
              {post.tags.length > 0 && (
                <div className="f:#7dd3fc mt:8px">
                  {post.tags.map((tag) => `#${tag}`).join(' ')}
                </div>
              )}
              <div className="f:#999 mt:6px">/posts/{post.slug}</div>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  if (!currentPost) {
    return <NotFound />;
  }

  return (
    <div className="py:40px px:20px f:#fff">
      <Link to="/posts" className="f:#7dd3fc text-decoration:none">
        ← 返回文章列表
      </Link>

      <h1 className="font-weight:bold f:28px mt:16px mb:20px">{currentPost.title}</h1>
      {currentPost.date && <div className="f:#999 mb:12px">{currentPost.date}</div>}
      {currentPost.tags.length > 0 && (
        <div className="f:#7dd3fc mb:16px">
          {currentPost.tags.map((tag) => `#${tag}`).join(' ')}
        </div>
      )}

      <article className="p:20px r:12px bg:#1e1e1e b:1px|solid|#2f2f2f">
        <ReactMarkdown remarkPlugins={[[remarkGfm, { singleTilde: false }]]}>
          {currentPost.content}
        </ReactMarkdown>
      </article>
    </div>
  );
};

export default PostPage;
