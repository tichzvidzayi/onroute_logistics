import menuData from '../data/menu.json';

const SideMenu = () => (
  <aside className="bg-gray-100 p-4 w-64">
    <ul>
      {menuData.data.map((item, index) => (
        <li key={index}>
          <a href={item.url} className="block py-2 px-4 hover:bg-gray-200">
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  </aside>
);

export default SideMenu;
