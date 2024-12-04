function BlogPage() {
  return (
    <div className="flex justify-center items-center flex-col font-bold min-h-[80vh]">
      <h1 className="text-3xl mb-4">Inside Edulearning: Tips and Tricks</h1>
      <h2 className="font-normal">Subscribe now to learn about different categories of education</h2>
      <form action="" className="mb-4">
        <label htmlFor="email" className="sr-only"> </label>
        <input type="email" placeholder="Enter your email"
          className="mt-8 border px-8 py-2 rounded-lg" />
        <button>Subscibe</button>
      </form>

    </div>
  );
}

export default BlogPage;
