import image from "../assets/chef.png"
export default function Header() {
  return (
    <header className="header">
      <img
        src={image}
        alt="Chef Icon"
        className="chef-icon"
      ></img>
      <h1 className="title">Chef Claude</h1>
    </header>
  );
}
