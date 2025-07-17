import NavLinks from "./NavLinks";
import CartButton from "./CartButton";

const MobileMenu = () => {
  return (
    <div className="flex flex-col gap-4 mt-6">
      <NavLinks />
      <div className="pt-2 border-t mt-4">
        <CartButton />
      </div>
    </div>
  );
};

export default MobileMenu;
