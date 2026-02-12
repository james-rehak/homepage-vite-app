// 1. Your JSON Data
const links = [
  {id: 1, title: "Google", url: "https://google.com", category: "Search", sort: 1},
  {id: 2, title: "GitHub", url: "https://github.com", category: "Code", sort: 2},
  // ... more links
];

export default function LinkGrid() {
  return (
    // 2. The Tailwind Grid Container
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-10">
      {links.sort((a, b)=>a.sort - b.sort)
            .map((link) => (
        <a
          key={link.id}
          href={link.url}
          className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition-all"
        >
          <h3 className="font-bold text-blue-600">{link.title}</h3>
          <p className="text-sm text-gray-500">{link.category}</p>
        </a>
      ))}
    </div>
  );
}
