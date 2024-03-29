interface Props {
  query: string;
  category: string;
}

const Header = ({ query, category }: Props) => {
  if (query && category) {
    return (
      <h1 className="heading3 self-start text-white-800">
        Search results for "{query}" in <span className="capitalize">{category}</span>
      </h1>
    );
  }

  if (query) {
    return (
      <h1 className="heading3 self-start text-white-800">
        Search results for "<span className="capitalize">{query}</span>
      </h1>
    );
  }

  if (category) {
    return (
      <h1 className="heading3 self-start text-white-800">
        Search results in <span className="capitalize">{category}</span>
      </h1>
    );
  }

  return (
    <h1 className="heading3 self-start text-white-800">No Results</h1>
  );
}

export default Header