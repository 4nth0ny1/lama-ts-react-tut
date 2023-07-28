export default function Events() {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Searched!");
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    e.preventDefault();
    console.log(`Post ${id} has been deleted!`);
  };
  return (
    <div className="eventExample">
      <form>
        <input
          type="text"
          placeholder="Search for anything..."
          onChange={handleChange}
          className="mr-2 rounded-xl border border-gray-400 p-2"
        />
        <button className="rounded-xl bg-green-500 p-2" onClick={handleClick}>
          Search
        </button>
      </form>
      <form>
        <h1 className="text-2xl font-bold">
          Lorem ipsum dolor sit amet consectetur 1
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam
          voluptate quisquam voluptatibus magni voluptatum quasi eveniet totam
          harum neque itaque, eum reprehenderit non repellendus? Assumenda
          necessitatibus distinctio veniam eveniet.
        </p>
        <button
          className="rounded-xl bg-purple-500 p-2"
          onClick={(e) => handleDelete(e, 1)}
        >
          Delete
        </button>
      </form>
      <form>
        <h1 className="text-2xl font-bold">
          Lorem ipsum dolor sit amet consectetur 2
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam
          voluptate quisquam voluptatibus magni voluptatum quasi eveniet totam
          harum neque itaque, eum reprehenderit non repellendus? Assumenda
          necessitatibus distinctio veniam eveniet.
        </p>
        <button
          className="rounded-xl bg-purple-500 p-2"
          onClick={(e) => handleDelete(e, 2)}
        >
          Delete
        </button>
      </form>
    </div>
  );
}
