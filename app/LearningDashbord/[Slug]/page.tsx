export default async function BlogPostPage({
  Params,
}: {
  Params: Promise<{ slug: string }>
}) {
  const { slug } = await Params
  const post = await getPost(slug)
 
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}