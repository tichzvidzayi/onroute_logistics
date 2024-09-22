import menuData from '../data/menu.json';

const SideMenu = () => (
  <aside className="bg-gray-100 p-6 shadow-lg w-64 rounded-lg">
    <h2 className="text-xl font-semibold mb-4 text-gray-800">Menu</h2>
    <ul className="space-y-2">
      {menuData.data.map((item, index) => (
        <li key={index}>
          <a
            href={item.url}
            className="block py-3 px-4 rounded-lg text-gray-700 hover:bg-red-600 hover:text-white transition duration-300 ease-in-out"
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  </aside>
);

export default SideMenu;
