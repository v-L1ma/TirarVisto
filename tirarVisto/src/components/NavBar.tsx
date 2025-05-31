function NavBar() {
  return (
    <nav className="flex gap-2 py-4">
      <img src="logo.png" alt="Logo" />
      <ul className="flex gap-5">
        <li>Home</li>
        <li>Quem somos</li>
        <li>Serviços</li>
        <li>Contato</li>
      </ul>
    </nav>
  );
}

export default NavBar;
