import Namicz from '../../assets/namicz-Icon.svg';

const Logo = () => {
  return (
    <div className="my-auto w-fit font-semibold text-4xl">
        <a href="#"className="flex content"><img src={Namicz} className="w-[40px]"/>
        <h1 className="my-auto ml-0.5 md:hidden lg:block">AMICZ</h1></a>
    </div>
  );
}

export default Logo;