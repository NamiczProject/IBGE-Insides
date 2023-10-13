import Logo from "../Basic/Logo"
import ifspImage from "../../assets/ifsp-footer-image.png"
import ibgeImage from "../../assets/ibge-footer-image.png"

function Footer(){
    return(
        <div className='w-full h-fit bg-slate-200 text-slate-800 pt-6 lg:font-medium md:font-light'>
            <div className='flex items-center lg:justify-evenly lg:flex-row md:gap-5 md:flex-col sm:flex-col'>
                <div className='flex items-center justify-center sm:hidden md:block'>
                    <Logo/>
                </div>
                <div className="flex gap-5 sm:flex-col md:flex-row sm:text-center md:text-start sm:mb-4">
                    <div className="">
                        <ul className='gap-2 grid'>
                            <li><a href="https://github.com/vct-h-dias/IBGE-Insides" target="_blank" className='hover:text-black hover:bg-slate-50 duration-100'>| Repositório do projeto <span className="md:hidden">|</span></a></li>
                            <li><a href="#" target="_blank" className='hover:text-black hover:bg-slate-50 duration-100'>| Documentação do projeto <span className="md:hidden">|</span></a></li>
                            <li><a href="#" target="_blank" className='hover:text-black hover:bg-slate-50 duration-100'>| Entrar em contato <span className="md:hidden">|</span></a></li>
                        </ul>
                    </div>
                    <div className="md:text-end">
                        <ul className='gap-2 grid'>
                            <li><a href="https://www.ibge.gov.br/" target="_blank" className='hover:text-black hover:bg-slate-50 duration-100'><span className="md:hidden">|</span> Instituto Brasileiro de Geografia e Estatística |</a></li>
                            <li><a href="https://servicodados.ibge.gov.br/api/docs" target="_blank" className='hover:text-black hover:bg-slate-50 duration-100'><span className="md:hidden">|</span> API de serviço de dados do IBGE |</a></li>
                            <li><a href="https://portal.cmp.ifsp.edu.br/" target="_blank" className='hover:text-black hover:bg-slate-50 duration-100'><span className="md:hidden">|</span> Instituto Federal - IFSP Câmpus Campinas |</a></li>
                        </ul>
                    </div>
                </div>
                <div className='flex items-center justify-center sm:mb-10 md:m-5 md:hidden'>
                    <Logo/>
                </div>
                <div className="sm:mb-4 md:w-[25rem] lg:w-fit flex md:justify-between sm:flex-col md:flex-row lg:flex-col md:gap-5 sm:gap-10">
                    <a href="https://www.ibge.gov.br/" target="_blank"><img src={ibgeImage} alt="IBGE" className='h-[40px]'/></a>
                    <a href="https://portal.cmp.ifsp.edu.br/" target="_blank"><img src={ifspImage} alt="IFSP" className='h-[40px]'/></a>
                </div>
            </div>
            
            <div className='flex mt-5 justify-center items-baseline font-extrabold'>
                <h1>©2023 The IFers</h1>
            </div>
        </div>
    )
}

export default Footer