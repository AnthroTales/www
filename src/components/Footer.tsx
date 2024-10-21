export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-2">
      <div className="px-4 flex justify-between items-center">
        <a href="https://x.com/Slashset" target="_blank">
          1 @Slashset
        </a>
        <div className="lg:text-right text-center">
          <a href="https://go.anthrotales.eu/bce" target="_blank">
            &copy; {new Date().getFullYear()} AnthroTales Events.{" "}
            2.
          </a>
        </div>
      </div>
    </footer>
  );
};
