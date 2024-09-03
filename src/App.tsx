import whatsappLogo from '@/assets/whatsapp.svg'
import Home from "./components/ui/Home"

export default function App() {
  return (
    <>
      <Home />
      <a
        href="https://api.whatsapp.com/send/?phone=5515997681165&text=Ol%C3%A1%21+Tenho+algumas+d%C3%BAvidas+sobre+meus+direitos+trabalhistas.+Voc%C3%AA+poderia+me+ajudar%3F&type=phone_number&app_absent=0"
        target='_blank'
        className="fixed z-50 bottom-6 right-6 bg-green-600 w-auto p-2 rounded text-white flex items-center gap-3"
      >
        <img className='w-8' src={whatsappLogo} />
        Whatsapp
      </a>
    </>
  )
}
